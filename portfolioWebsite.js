function scrollTofirst(){
window.scrollTo({top:100, behavior:"smooth"});
}

document.querySelector(".home").addEventListener('click', function() {

    scrollTofirst();
});
function scrollToSecond(){
    window.scrollTo({top:750, behavior:"smooth"});
    }
    
    document.querySelector(".about").addEventListener('click', function() {
    
        scrollToSecond();
    });
    function scrollToThird(){
        window.scrollTo({top:1300, behavior:"smooth"});
        }
        
        document.querySelector(".service").addEventListener('click', function() {
        
            scrollToThird();
        });
        function scrollToFourth(){
            window.scrollTo({top:1900, behavior:"smooth"});
            }
            
            document.querySelector(".project").addEventListener('click', function() {
            
                scrollToFourth();
            });
            function scrollToBottom(){
                window.scrollTo({top:2500, behavior:"smooth"});
                }
                
                document.querySelector(".contme").addEventListener('click', function() {
                
                    scrollToBottom();
                });
                function scrollToTop(){
                    window.scrollTo({top:0, behavior:"smooth"});
                    }
                    
                    document.querySelector(".send").addEventListener('click', function() {
                    
                        scrollToTop();
                    });
function toggleTooltip(type) {
    const tooltip = document.getElementById(`${type}Tooltip`);
    tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('visitGithub').onclick = function() {
    window.location.href = 'https://github.com/Laiba-AbdulQuddus/';
};
document.getElementById('downloadResume').onclick = function() {
    document.getElementById('resumeLink').click();
};