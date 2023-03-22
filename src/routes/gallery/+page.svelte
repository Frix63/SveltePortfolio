<script lang="ts">
    import Nav from '../../comp/Navbar.svelte';
	import Image from '../../comp/Image.svelte';
	import CGB from '../../comp/ChangeGalleryButtons.svelte';

    const images = import.meta.glob('../../../static/photos/*.{jpg,jpeg,png,gif}');
    const graphicsImages = import.meta.glob('../../../static/graphics/*.{jpg,jpeg,png,gif}');
    const triDImages = import.meta.glob('../../../static/3Dimages/*.{jpg,jpeg,png,gif}');
    const imageList: any[] = [];

    
    let changeG = 0;

    for (const path in images) {
        if (Object.prototype.hasOwnProperty.call(images, path)) {
        imageList.push({
            src: path.replace('/static', ''),
            alt: path.split('/')[0]
        });
        }
    };

    let showModal = false;
    let selectedImage = '';

    function openModal(src: string) {
        selectedImage = src;
        showModal = true;
    }

    function closeModal() {
        showModal = false;
        selectedImage = '';
    }

    function changeGallery() {
        imageList.length = 0; for (const path in images) { if (Object.prototype.hasOwnProperty.call(images, path)) { imageList.push({ src: path.replace('/static', ''), alt: path.split('/')[0] }); } }; 
    }
    function changeGallery1() {
        imageList.length = 0; for (const path in triDImages) { if (Object.prototype.hasOwnProperty.call(triDImages, path)) { imageList.push({ src: path.replace('/static', ''), alt: path.split('/')[0] }); } }; 
    }
    function changeGallery2() {
        imageList.length = 0; for (const path in graphicsImages) { if (Object.prototype.hasOwnProperty.call(graphicsImages, path)) { imageList.push({ src: path.replace('/static', ''), alt: path.split('/')[0] }); } }; 
    }
</script>

<body class="h-screen bg-background">
    <Nav/>
    <CGB on:changeGallery={() => {changeGallery()}} on:changeGallery1={() => {changeGallery1()}} on:changeGallery2={() => {changeGallery2()}}/>
    <div class="w-10/12 mx-auto h-max">
        <div class="bg-frontground  min-h-[calc(100vh-2.5rem-8rem)]">
            <div class="grid justify-center grid-cols-2 gap-1 p-5 mx-auto 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {#each imageList as { src, alt }}
                    <Image {src} {alt} on:openModal={() => openModal(src)}/>
                {/each}
            </div>
        </div>
    </div>

    {#if showModal}
        <div class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-75 backdrop-blur-xl">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="flex items-center w-screen h-screen cursor-pointer place-content-center" on:click={() => closeModal()}>
                <img src={selectedImage} alt="" class="object-contain max-h-screen max-w-screen h-max rounded-2xl"/>
            </div>
        </div>
    {/if}
</body>
