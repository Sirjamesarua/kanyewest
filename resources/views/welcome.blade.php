<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Kanye west quotes</title>

        @viteReactRefresh
        @vite(['resources/css/app.css','resources/js/app.jsx'])

        <!--<script src="{{ asset('js/app.js') }}" defer></script>-->
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
