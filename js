            var counter = 0;
            var btn = document.getElementById('btn');
            var resetBtn = document.getElementById('resetBtn');
            var counterElement = document.getElementById('counter');

            btn.addEventListener('click', function() {
                counter++;
                counterElement.textContent = counter;
            });

            resetBtn.addEventListener('click', function() {
                counter = 0;
                counterElement.textContent = counter;
            });
        
