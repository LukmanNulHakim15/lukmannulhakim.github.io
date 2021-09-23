//Menyeleksi terlebih dahulu dibagian nav dengan id yaitu idnya 'nav
const nav = document.getElementById("nav");

//Membuat sebuah event ketika scroll di jalankan
window.addEventListener('scroll', function(){
    //Step 1.Membuat kondisi dimana scroll jalan atau tidak. "y" adalah sumbu y
    scrollposition = window.scrollY;
    //Step 2. Membuat fungsi
    if (scrollposition >= 10) {
        nav.classList.add('navbar-background'); // variabel nav akan ngeadd class css navbar-background untuk angka "10" bebas mau di beri nilai berapapun
    }else if (scrollposition <= 10){
            nav.classList.remove('navbar-background');
        
    }
})
