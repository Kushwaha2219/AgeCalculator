let userInput = document.querySelector('#date');
        userInput.max = new Date().toISOString().split("T")[0]
        let text = document.querySelector(".text")
        
        function fetch() {
            let Birthdate = new Date(userInput.value);
            
            let y1 = Birthdate.getFullYear();
            let m1 = Birthdate.getMonth() + 1;
            let d1 = Birthdate.getDate();
            
            if (isNaN(y1) || isNaN(m1) || isNaN(d1)) {
                text.innerHTML = `Write correct Date`;
                return;
            }
            
            let todayDate = new Date();
            let y2 = todayDate.getFullYear();
            let m2 = todayDate.getMonth() + 1;
            let d2 = todayDate.getDate();
        
            let d3, m3, y3;
        
            y3 = y2 - y1;
            if (m2 >= m1) m3 = m2 - m1;
            else {
                y3--;
                m3 = 12 + m2 - m1;
            }
        
            if (d2 >= d1) d3 = d2 - d1;
            else {
                m3--;
                d3 = getDays(y1, m1) + d2 - d1;
            }
        
            if (m3 < 0) {
                m3 = 11;
                y3--;
            }
            
            text.innerHTML = `You are ${y3} Years, ${m3} Months, and ${d3} Days Old`;
        }
        
        function getDays(year, month) {
            return new Date(year, month, 0).getDate();
        }        
        