<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>503 </title>
    <style>
        /* Simple centered layout */
        html,body{height:100%;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial}
        .wrap{min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;background:#f7f7f9;color:#222}
        .card{max-width:720px;width:100%;text-align:center}
        .asset{max-width:320px;height:auto;margin:0 auto 28px;display:block}
        .code{font-size:120px;line-height:1;margin:0 0 12px;font-weight:700}
        .msg{font-size:18px;color:#555;margin-bottom:18px}
        .home-link{display:inline-block;padding:10px 16px;background:#111;color:#fff;border-radius:8px;text-decoration:none}
        @media (max-width:420px){.code{font-size:72px}}
    </style>
</head>
<body>
<div class="wrap" role="main">
    <div class="card">
        <!-- Updated to point to base.png -->
        <img src="{{ asset('assets/base.png') }}" alt="Base asset" class="asset" onerror="this.style.display='none'">

        <!-- Large 404 text -->
        <div class="code">503</div>

        <!-- Optional short message -->
        <div class="msg">503</div>


    </div>
</div>
</body>
</html>
