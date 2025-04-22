const colorjoe = require("./colorjoe");
const tinycolor = require("tinycolor2");

const colorpicker = (element, defaultColors, customColors, disabled = { main: false, primary: false, secondary: false }, extras) => {
	return setup({
		e: element,
		defaultColors: defaultColors,
		customColors: customColors,
		disabled,
		extras,
	});
};

const setup = (v) => {
	if (!v.defaultColors || Object.keys(v.defaultColors) === 0) return;
	localStorage.setItem("color-theme-default", JSON.stringify(v.defaultColors));
	const defaultColors = v.defaultColors;
	let customColors;

	try {
		customColors = JSON.parse(v.customColors);
	} catch (error) {
		if (v.customColors) {
			customColors = {
				main: defaultColors.main,
				primary: defaultColors.primary,
				secondary: defaultColors.secondary,
			};
		}
	}

	let cjm, cjp, cjs;

	let colors = customColors || defaultColors;

	if (!isObject(colors)) return console.error("colorpicker: colors must be an object");

	const e = isString(v.e) ? document.querySelector(v.e) : v.e;

	if (v.extras) customizeColor({ ...v.extras, colors });
	initiateColors(colors, customColors);

	if (e) {
		handleDisabledChooseColor(e, v.disabled);

		window.cpc = e.querySelector(".colorpicker__content");
		window.cpcm = cpc.querySelector(".colorpicker__content__menu");

		// colorpicker toggle menu
		const bt = e.querySelector(".colorpicker__button");

		bt.addEventListener("click", (e) => {
			bt.querySelector(".colorpicker__arrow__icon").classList.toggle("active");
			bt.querySelector(".close-icon-sm").classList.toggle("active");
			cpc.classList.toggle("show");
			cpcm.querySelector(".show") && cpcm.querySelector(".show").classList.remove("show");
			handleDisableResetButton();

			isActiveCj() && addRecentColor(isActiveCj().get().hex(), isActiveTarget());
		});

		cpc.querySelector(".close-icon").addEventListener("click", () => {
			cpc.classList.toggle("show");
			cpcm.querySelector(".show") && cpcm.querySelector(".show").classList.remove("show");
			bt.querySelector(".colorpicker__arrow__icon").classList.toggle("active");

			isActiveCj() && addRecentColor(isActiveCj().get().hex(), isActiveTarget());
		});

		// toggle show selected color
		const tcp = cpcm.querySelectorAll(".colorpicker__toggle__button");
		tcp.forEach((el) => {
			el.addEventListener("click", () => {
				cpcm.querySelector(".show") && cpcm.querySelector(".show").classList.remove("show");

				if (cpcm.querySelector(".colorPicker")) {
					cpcm.querySelector(".colorPicker").replaceChildren();
					cpcm.querySelector(".colorPicker").classList.remove("colorPicker");
				}

				const t = cpcm.querySelector(el.dataset.target);
				t.classList.add("show");

				isActiveCj() && addRecentColor(isActiveCj().get().hex(), isActiveTarget());

				handlerChangeColors(el, colors);
				showRecentColor(t);
			});
		});
	}


	const handlerChangeColors = (el, c) => {
		switch (el.dataset.color) {
			case "main":
				const elm = cpcm.querySelector(el.dataset.target);
				cjp = null;
				cjs = null;

				// initiate colorjoe
				const cjem = elm.querySelector("#colormain");
				cjm = colorjoe.rgb(cjem, c.main, ["alpha"]);
				cjm.show();

				showCodeColor(cjm.get().hex(), elm);
				showAlphaColor(cjm.get().alpha(), elm);

				elm.querySelector(".oned.alpha .bg").style.background = "linear-gradient(to left,  rgba(255,255,255,1) 0%," + c.main + " 80%," + c.main + " 100%";

				cjm.on("change", (color) => {
					elm.querySelector(".oned.alpha .bg").style.background = "linear-gradient(to left,  rgba(255,255,255,1) 0%," + color.hex() + " 80%," + color.hex() + " 100%";
					showCodeColor(color.hex(), elm);
					showAlphaColor(color.alpha(), elm);

					setSelectedColor(color.cssa(), "main", false, cjm);
					handleDisableResetButton();
				});

				cjm.on("done", (color) => {
					checkColorMain(color.cssa());
				});

				break;

			case "primary":
				const elp = cpcm.querySelector(el.dataset.target);
				cjm = null;
				cjs = null;

				// initiate colorjoe
				const cjep = elp.querySelector("#colorprimary");
				cjp = colorjoe.rgb(cjep, c.primary, ["alpha"]);
				cjp.show();

				showCodeColor(cjp.get().hex(), elp);
				showAlphaColor(cjp.get().alpha(), elp);

				elp.querySelector(".oned.alpha .bg").style.background = "linear-gradient(to left,  rgba(255,255,255,1) 0%," + c.main + " 80%," + c.main + " 100%";

				cjp.on("change", (color) => {
					elp.querySelector(".oned.alpha .bg").style.background = "linear-gradient(to left,  rgba(255,255,255,1) 0%," + color.hex() + " 80%," + color.hex() + " 100%";
					showCodeColor(color.hex(), elp);
					showAlphaColor(color.alpha(), elp);

					setSelectedColor(color.cssa(), "primary", false, cjp);

					handleDisableResetButton();
				});

				cjp.on("done", (color) => {
					checkColorPrimary(color.cssa());
				});

				break;

			case "secondary":
				const els = cpcm.querySelector(el.dataset.target);
				cjm = null;
				cjp = null;

				// initiate colorjoe
				const cjes = els.querySelector("#colorsecondary");
				cjs = colorjoe.rgb(cjes, c.secondary, ["alpha"]);
				cjs.show();

				showCodeColor(cjs.get().hex(), els);
				showAlphaColor(cjs.get().alpha(), els);

				els.querySelector(".oned.alpha .bg").style.background = "linear-gradient(to left,  rgba(255,255,255,1) 0%," + c.main + " 80%," + c.main + " 100%";

				cjs.on("change", (color) => {
					els.querySelector(".oned.alpha .bg").style.background = "linear-gradient(to left,  rgba(255,255,255,1) 0%," + color.hex() + " 80%," + color.hex() + " 100%";

					showCodeColor(color.hex(), els);
					showAlphaColor(color.alpha(), els);

					setSelectedColor(color.cssa(), "secondary", false, cjs);

					handleDisableResetButton();
				});

				cjs.on("done", (color) => {
					checkColorSecondary(color.cssa());
				});

				break;

			default:
				console.log("colorpicker: colors not undefined");
				break;
		}
	};

	const setSelectedColor = (color, colorTarget, skipCjUpdate = false, el) => {
		switch (colorTarget) {
			case "main":
				document.querySelector(":root").style.setProperty("--color-main", color);

				colors.main = color;
				break;

			case "primary":
				document.querySelector(":root").style.setProperty("--color-primary", color);

				colors.primary = color;
				break;

			case "secondary":
				document.querySelector(":root").style.setProperty("--color-secondary", color);

				colors.secondary = color;
				break;

			default:
				console.log("colorpicker: color target not undefined");
				break;
		}

		if (e) {
			customizeColor({ ...v.extras, colors });

			localStorage.setItem("color-theme", JSON.stringify(colors));
		}

		skipCjUpdate && el.set(color);
	};

	const handleDisableResetButton = () => {
		if (JSON.stringify(getDefaultColor()) !== JSON.stringify(colors)) cpc.querySelector(".colorpicker__reset").disabled = false;
	};

	let prev_main = localStorage.getItem("recent-color-main") ? JSON.parse(localStorage.getItem("recent-color-main")).slice(-1)[0].color : null;
	let prev_primary = localStorage.getItem("recent-color-primary") ? JSON.parse(localStorage.getItem("recent-color-primary")).slice(-1)[0].color : null;
	let prev_secondary = localStorage.getItem("recent-color-secondary") ? JSON.parse(localStorage.getItem("recent-color-secondary")).slice(-1)[0].color : null;

	const addRecentColor = (c, target) => {
		switch (target) {
			case "main":
				if (c == getDefaultColor().main || prev_main == c) return;

				let rcm = [];
				rcm = localStorage.getItem("recent-color-main") ? JSON.parse(localStorage.getItem("recent-color-main")) : [];

				rcm.length === 12 && rcm.shift();

				rcm.push({ color: c, created_at: Date.now() });

				localStorage.setItem("recent-color-main", JSON.stringify(rcm));

				prev_main = c;

				break;

			case "primary":
				if (c == getDefaultColor().primary || prev_primary == c) return;

				let rcp = [];
				rcp = localStorage.getItem("recent-color-primary") ? JSON.parse(localStorage.getItem("recent-color-primary")) : [];

				rcp.length === 12 && rcp.shift();

				rcp.push({ color: c, created_at: Date.now() });

				localStorage.setItem("recent-color-primary", JSON.stringify(rcp));

				prev_primary = c;

				break;

			case "secondary":
				if (c == getDefaultColor().secondary || prev_secondary == c) return;

				let rcs = [];
				rcs = localStorage.getItem("recent-color-secondary") ? JSON.parse(localStorage.getItem("recent-color-secondary")) : [];

				rcs.length === 12 && rcs.shift();

				rcs.push({ color: c, created_at: Date.now() });

				localStorage.setItem("recent-color-secondary", JSON.stringify(rcs));

				prev_secondary = c;

				break;

			default:
				break;
		}
	};

	const showRecentColor = (el) => {
		let recentColor = null;
		switch (isActiveTarget()) {
			case "main":
				recentColor = localStorage.getItem("recent-color-main") ? JSON.parse(localStorage.getItem("recent-color-main")) : null;
				break;

			case "primary":
				recentColor = localStorage.getItem("recent-color-primary") ? JSON.parse(localStorage.getItem("recent-color-primary")) : null;
				break;

			case "secondary":
				recentColor = localStorage.getItem("recent-color-secondary") ? JSON.parse(localStorage.getItem("recent-color-secondary")) : null;
				break;

			default:
				break;
		}
		const recentEl = el.querySelector(".colorpicker__color__recent__content");

		recentEl.replaceChildren();

		if (recentColor) {
			recentColor.sort((a, b) => b.created_at - a.created_at);

			recentColor.map((item, index) => {
				if (!item.color) return localStorage.removeItem("recent-color");

				const breakpoint = window.matchMedia("(max-width: 767px) and (max-height: 630px)");

				if (breakpoint.matches) {
					if (index <= 5) {
						let htmlRecentColor = document.createElement("div");
						htmlRecentColor.classList.add("color");
						htmlRecentColor.dataset.color = item.color;
						htmlRecentColor.style.backgroundColor = item.color;

						recentEl.appendChild(htmlRecentColor);
					}
				} else {
					let htmlRecentColor = document.createElement("div");
					htmlRecentColor.classList.add("color");
					htmlRecentColor.dataset.color = item.color;
					htmlRecentColor.style.backgroundColor = item.color;

					recentEl.appendChild(htmlRecentColor);
				}
			});
			el.querySelectorAll(".color").forEach((element) => {
				element.addEventListener("mouseup", () => {
					setSelectedColor(element.dataset.color, isActiveTarget(), true, isActiveCj());
				});
			});
		}
	};

	const isActiveCj = () => {
		if (cjm) {
			return cjm;
		} else if (cjp) {
			return cjp;
		} else if (cjs) {
			return cjs;
		} else {
			return null;
		}
	};

	const isActiveTarget = () => {
		if (cjm) {
			return "main";
		} else if (cjp) {
			return "primary";
		} else if (cjs) {
			return "secondary";
		} else {
			return null;
		}
	};

	const showCodeColor = (color, el) => {
		el.querySelector("#code-color").value = color;
	};

	const showAlphaColor = (alpha, el) => {
		el.querySelector("#alpha").value = alpha.toFixed(2) * 100 + "%";
	};

	let listeners = {
		save: [],
	};

	const f = {
		e: e,
		reset: () => {
			if (!e) return console.error("Sorry, When the colorpicker wrapper element is undefined this feature is disabled")
			cpcm.querySelector(".show") && cpcm.querySelector(".show").classList.remove("show");

			if (cpcm.querySelector(".colorPicker")) {
				cpcm.querySelector(".colorPicker").replaceChildren();
				cpcm.querySelector(".colorPicker").classList.remove("colorPicker");
				cjm = null;
				cjp = null;
				cjs = null;
			}

			e.querySelector(".colorpicker__reset").disabled = true;

			localStorage.removeItem("color-theme");
			localStorage.removeItem("recent-color-main");
			localStorage.removeItem("recent-color-primary");
			localStorage.removeItem("recent-color-secondary");
			document.querySelector(":root").style.removeProperty("--color-custom-main");
			document.querySelector(":root").style.removeProperty("--color-custom-primary");
			document.querySelector(":root").style.removeProperty("--color-custom-secondary");

			const COLOR_DEFAULT = getDefaultColor();

			colors = COLOR_DEFAULT;

			resetTextColor();

			return initiateColors(COLOR_DEFAULT);
		},
		on: (evt, cb, name) => {
			if (!e) return console.error("Sorry, When the colorpicker wrapper element is undefined this feature is disabled")
			if (evt === "save") {
				listeners[evt].push({
					name: name,
					fn: cb,
				});
			} else {
				console.warn(`Passed invalid evt name "${evt}" to colorpicker.on`);
			}
		},
		apply: () => {
			if (!e) return console.error("Sorry, When the colorpicker wrapper element is undefined this feature is disabled")
			cpcm.querySelector(".show") && cpcm.querySelector(".show").classList.remove("show");

			if (cpcm.querySelector(".colorPicker")) {
				cpcm.querySelector(".colorPicker").replaceChildren();
				cpcm.querySelector(".colorPicker").classList.remove("colorPicker");
			}

			addRecentColor(isActiveCj().get().hex(), isActiveTarget());

			cjm = null;
			cjp = null;
			cjs = null;
		},
		save: () => {
			if (!e) return console.error("Sorry, When the colorpicker wrapper element is undefined this feature is disabled")
			cpcm.querySelector(".show") && cpcm.querySelector(".show").classList.remove("show");

			if (cpcm.querySelector(".colorPicker")) {
				cpcm.querySelector(".colorPicker").replaceChildren();
				cpcm.querySelector(".colorPicker").classList.remove("colorPicker");
				addRecentColor(isActiveCj().get().hex(), isActiveTarget());

				cjm = null;
				cjp = null;
				cjs = null;
			}

			for (let i = 0; i < listeners.save.length; i++) {
				listeners.save[i].fn(colors);
			}
		},
		close: () => {
			if (!e) return console.error("Sorry, When the colorpicker wrapper element is undefined this feature is disabled")
			cpcm.querySelector(".show") && cpcm.querySelector(".show").classList.remove("show");

			if (cpcm.querySelector(".colorPicker")) {
				cpcm.querySelector(".colorPicker").replaceChildren();
				cpcm.querySelector(".colorPicker").classList.remove("colorPicker");
			}

			cjm = null;
			cjp = null;
			cjs = null;
		},
		handleInputCode: (v, n) => {
			if (!e) return console.error("Sorry, When the colorpicker wrapper element is undefined this feature is disabled")
			return setSelectedColor(v, n, true, isActiveCj());
		},
		handleInputAlpha: (v) => {
			if (!e) return console.error("Sorry, When the colorpicker wrapper element is undefined this feature is disabled")
			const a = v.split("%")[0] / 100;

			return isActiveCj().setAlpha(a);
		},
		updateColors: (colors) => {
			if (typeof colors !== "object") throw new Error("colors parameter must be object");

			const COLOR_DEFAULT = getDefaultColor();

			if (Object.keys(colors).length !== 0) {
				setSelectedColor(colors.main ?? COLOR_DEFAULT.main, "main")
				setSelectedColor(colors.primary ?? COLOR_DEFAULT.primary, "primary")
				setSelectedColor(colors.secondary ?? COLOR_DEFAULT.secondary, "secondary")

				checkAllColor({
					main: colors.main ?? COLOR_DEFAULT.main,
					primary: colors.primary ?? COLOR_DEFAULT.primary,
					secondary: colors.secondary ?? COLOR_DEFAULT.secondary,
				});
			} else {
				console.error("colors parameter is required");
			}
		}
	};

	return f;
};

const initiateColors = (colors, customColors) => {
	if (customColors) {
		localStorage.setItem("color-theme", JSON.stringify(colors));
	}

	const COLOR_DEFAULT = getDefaultColor();

	document.querySelector(":root").style.setProperty("--color-main", colors.main ?? COLOR_DEFAULT.main);

	document.querySelector(":root").style.setProperty("--color-primary", colors.primary ?? COLOR_DEFAULT.primary);

	document.querySelector(":root").style.setProperty("--color-secondary", colors.secondary ?? COLOR_DEFAULT.secondary);

	if (customColors) {
		checkAllColor({
			main: colors.main ?? COLOR_DEFAULT.main,
			primary: colors.primary ?? COLOR_DEFAULT.primary,
			secondary: colors.secondary ?? COLOR_DEFAULT.secondary,
		});
	}
};

const checkColorMain = (c) => {
	if (!c) return;
	const colorMainElement = document.querySelectorAll(".color-main");
	const COLOR_DEFAULT = JSON.parse(localStorage.getItem("color-theme-default"));

	let cm = c;
	if (COLOR_DEFAULT.main != cm) {
		if (tinycolor(cm).isDark()) {
			colorMainElement.forEach((el) => {
				el.style.color = "var(--color-light)";
				if (el.querySelector(".text-link"))
					el.querySelectorAll(".text-link").forEach((e) => {
						e.style.color = "var(--color-light)";
					});
				if (el.querySelector(".color__form"))
					el.querySelectorAll(".color__form").forEach((e) => {
						e.style.setProperty("--color-input", "#fff");
					});
				if (el.querySelector(".color__button__trans"))
					el.querySelectorAll(".color__button__trans").forEach((e) => {
						e.style.setProperty("--color-button-trans", "#ffffff");
					});
			});
		} else {
			colorMainElement.forEach((el) => {
				el.style.color = "var(--color-dark)";
				if (el.querySelector(".text-link"))
					el.querySelectorAll(".text-link").forEach((e) => {
						e.style.color = "var(--color-dark)";
					});
				if (el.querySelector(".color__form"))
					el.querySelectorAll(".color__form").forEach((e) => {
						e.style.setProperty("--color-input", "#1e1f1e");
					});
				if (el.querySelector(".color__button__trans"))
					el.querySelectorAll(".color__button__trans").forEach((e) => {
						e.style.setProperty("--color-button-trans", "#1e1f1e");
					});
			});
		}
	}
};

const checkColorPrimary = (c) => {
	if (!c) return;
	const colorPrimaryElement = document.querySelectorAll(".color-primary");
	const COLOR_DEFAULT = JSON.parse(localStorage.getItem("color-theme-default"));

	let cp = c;

	if (COLOR_DEFAULT.primary != cp) {
		if (tinycolor(cp).isDark()) {
			colorPrimaryElement.forEach((el) => {
				el.style.color = "var(--color-light)";
				if (el.querySelector(".text-link"))
					el.querySelectorAll(".text-link").forEach((e) => {
						e.style.color = "var(--color-light)";
					});
				if (el.querySelector(".color__form"))
					el.querySelectorAll(".color__form").forEach((e) => {
						e.style.setProperty("--color-input", "#fff");
					});
				if (el.querySelector(".color__button__trans"))
					el.querySelectorAll(".color__button__trans").forEach((e) => {
						e.style.setProperty("--color-button-trans", "#ffffff");
					});
			});
		} else {
			colorPrimaryElement.forEach((el) => {
				el.style.color = "var(--color-dark)";
				if (el.querySelector(".text-link"))
					el.querySelectorAll(".text-link").forEach((e) => {
						e.style.color = "var(--color-dark)";
					});
				if (el.querySelector(".color__form"))
					el.querySelectorAll(".color__form").forEach((e) => {
						e.style.setProperty("--color-input", "#1e1f1e");
					});
				if (el.querySelector(".color__button__trans"))
					el.querySelectorAll(".color__button__trans").forEach((e) => {
						e.style.setProperty("--color-button-trans", "#1e1f1e");
					});
			});
		}
	}
};

const checkColorSecondary = (c) => {
	if (!c) return;
	const colorSecondaryElement = document.querySelectorAll(".color-secondary");
	const COLOR_DEFAULT = JSON.parse(localStorage.getItem("color-theme-default"));

	let cs = c;

	if (COLOR_DEFAULT.secondary != cs) {
		if (tinycolor(cs).isDark()) {
			colorSecondaryElement.forEach((el) => {
				el.style.setProperty("--text-button", "#ffffff");
			});
		} else {
			colorSecondaryElement.forEach((el) => {
				el.style.setProperty("--text-button", "#1e1f1e");
			});
		}
	}
};

const checkAllColor = (color) => {
	checkColorMain(color.main);
	checkColorPrimary(color.primary);
	checkColorSecondary(color.secondary);
};

const resetTextColor = () => {
	const colorMainElement = document.querySelectorAll(".color-main");
	const colorPrimaryElement = document.querySelectorAll(".color-primary");
	const colorSecondaryElement = document.querySelectorAll(".color-secondary");
	const colorFormElement = document.querySelectorAll(".color__form");
	const textLinkElement = document.querySelectorAll(".text-link");
	const colorButtonTrans = document.querySelectorAll(".color__button__trans");

	colorMainElement.forEach((el) => {
		el.style.removeProperty("color");
	});

	colorPrimaryElement.forEach((el) => {
		el.style.removeProperty("color");
	});

	colorSecondaryElement.forEach((el) => {
		el.style.removeProperty("--text-button");
	});

	colorFormElement.forEach((el) => {
		el.style.removeProperty("--color-input");
	});

	textLinkElement.forEach((el) => {
		el.style.removeProperty("color");
	});

	colorButtonTrans.forEach((el) => {
		el.style.removeProperty("--color-button-trans");
	});
};

const handleDisabledChooseColor = (e, d) => {
	const COLOR_DEFAULT = JSON.parse(localStorage.getItem("color-theme-default"));

	if (d.main) {
		e.querySelector(".menu__main").style.display = "none";
		document.querySelector(":root").style.setProperty("--color-main", COLOR_DEFAULT.main);
	}
	if (d.primary) {
		e.querySelector(".menu__primary").style.display = "none";
		document.querySelector(":root").style.setProperty("--color-primary", COLOR_DEFAULT.primary);
	}
	if (d.secondary) {
		e.querySelector(".menu__secondary").style.display = "none";
		document.querySelector(":root").style.setProperty("--color-secondary", COLOR_DEFAULT.secondary);
	}
};

const customizeColor = ({ target = "main", to = "lighten", amount = 10, colors }) => {
	switch (to) {
		case "lighten":
			switch (target) {
				case "main":
					if (colors?.main !== getDefaultColor()?.main) {
						const colorMainCustom = tinycolor(colors?.main).lighten(amount).toRgbString();

						document.querySelector(":root").style.setProperty("--color-custom-main", colorMainCustom);
					}
					break;

				case "primary":
					if (colors?.primary !== getDefaultColor()?.primary) {
						const colorPrimaryCustom = tinycolor(colors?.primary).lighten(amount).toRgbString();

						document.querySelector(":root").style.setProperty("--color-custom-primary", colorPrimaryCustom);
					}
					break;

				case "secondary":
					if (colors?.secondary !== getDefaultColor()?.secondary) {
						const colorSecondaryCustom = tinycolor(colors?.secondary).lighten(amount).toRgbString();

						document.querySelector(":root").style.setProperty("--color-custom-secondary", colorSecondaryCustom);
					}
					break;

				default:
					console.warn(`Passed invalid target name "${target}". expected "main/primary/secondary"`);
					break;
			}

			break;

		case "darken":
			switch (target) {
				case "main":
					if (colors?.main !== getDefaultColor()?.main) {
						const colorMainCustom = tinycolor(colors?.main).darken(amount).toRgbString();

						document.querySelector(":root").style.setProperty("--color-custom-main", colorMainCustom);
					}
					break;

				case "primary":
					if (colors?.primary !== getDefaultColor()?.primary) {
						const colorPrimaryCustom = tinycolor(colors?.primary).darken(amount).toRgbString();

						document.querySelector(":root").style.setProperty("--color-custom-primary", colorPrimaryCustom);
					}
					break;

				case "secondary":
					if (colors?.secondary !== getDefaultColor()?.secondary) {
						const colorSecondaryCustom = tinycolor(colors?.secondary).darken(amount).toRgbString();

						document.querySelector(":root").style.setProperty("--color-custom-secondary", colorSecondaryCustom);
					}
					break;

				default:
					break;
			}
			break;

		default:
			console.warn(`Passed invalid to name "${to}". expected "lighten/darken" `);
			break;
	}
};

const getDefaultColor = () => {
	const COLOR_DEFAULT = JSON.parse(localStorage.getItem("color-theme-default"));

	return COLOR_DEFAULT;
};

function isString(o) {
	return typeof o === "string";
}
function isObject(o) {
	return Object.prototype.toString.call(o) === "[object Object]";
}
function isArray(o) {
	return Object.prototype.toString.call(o) === "[object Array]";
}

module.exports = colorpicker;
