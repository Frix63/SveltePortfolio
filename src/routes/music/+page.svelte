<script>
    import Nav from '../../comp/Navbar.svelte';
    import Songs from '../../comp/Songs.svelte';
</script>




<body class="h-screen bg-background">
    <Nav/>
    <div class="flex-grow w-10/12 mx-auto bg-white min-h-[calc(100vh-2.5rem)]">
        <div class="font-bold text-center bg-frontground text-font">
            This is all my music
        </div>
        <div class="text-center bg-frontground text-font">
            All music is made by me and the cover arts too.
        </div>
        <div class="h-24 bg-frontground">
        </div>
        <Songs/>
    </div>
</body>