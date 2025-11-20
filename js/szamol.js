    function szamol()
    {
        const a_erteke = document.getElementById('a_erteke').value;
        const b_erteke = document.getElementById('b_erteke').value;
        const c_erteke = document.getElementById('c_erteke').value;

        //document.getElementById('debug').innerHTML = 'a:'+a_erteke+' b:'+b_erteke+' c:'+c_erteke

        if(isNaN(a_erteke) || isNaN(b_erteke) ||isNaN(c_erteke))
            document.getElementById('gyokok').innerHTML = '<b style="color: red;">hiba</b>';
        else
        {
            let d = b_erteke*b_erteke-4*a_erteke*c_erteke;
            if(d<0)
                document.getElementById('gyokok').innerHTML = 0;
            else if(d==0)
                document.getElementById('gyokok').innerHTML = 1;
            else if(d>0)
                document.getElementById('gyokok').innerHTML = 2;
        }
    }