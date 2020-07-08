    //alert("merhaba");
    let d = new Date();
    let birthday = new Date(1999,9,25);
    let bday = 1999;
    console.log(d);
    console.log(typeof d);

    //SET METHODS
    d.setFullYear(2021);
    d.setDate(2);

    //GET METHODS
    console.log(d.getDate());
    // Haftanın kaçıncı günü olduğunu söyler
    console.log(d.getDay());
    console.log(d.getFullYear());

    console.log(d.getFullYear()- birthday.getFullYear());

    // Numbers
    let val;
    val = isNaN('10');
    console.log(val);
    val = isNaN('10a');
    console.log(val);
    val = isNaN('a10');
    console.log(val);

    var num = 12.123456789;
    // noktdan hem önceki hem sonraki basamak sayılaını temsil eder
    val = num.toPrecision(4);
    console.log(val);
    // noktdan sonraki basamak sayılaını temsil eder
    val = num.toFixed(2);
    console.log(val);

    // Math Class
    val = Math.max(1,23,3,4);
    val = Math.min(1,23,3,4);
    // 0-1 arasında
    val = Math.random();
    // 0-9 arasında
    val = Math.random()*10;
    val = Math.floor(Math.random()*10);
    // 0 dahil olmaması için +1
    val = Math.floor(Math.random()*100+1);

    // Strings
    var sentence = "Splash screens can be used as an alternative to loaders – unless of course, they are heavy. Unfortunately, there are still people who take them too seriously and try to transform them into an action-packed part of a play.";
        // finding  charachter count
        console.log(sentence.length);
        // finding  word count
        console.log(sentence.trim().split(' ').length);
        console.log(sentence.toLowerCase);
        // Karakter silmek için >> - boşluk ile yer değişti
        console.log(sentence.replace('-',' '));
        // stringin belli bir bölgesini silmek için 
        var change = 'Splash screens';
        console.log(sentence.substr(change.length));
        console.log(sentence.slice(change.length));
        // Boolean türüde başlangıcın doğru olup olmadığını kontrol eder
        console.log(sentence.startsWith('Splash'));
        // bir stringin kelimeninn olup olmadığını kotnrol etmek için--
        console.log(sentence.indexOf('screens'));
        console.log(sentence.includes('screens'));

        // türkçe harflerden arındırma (1) sadece ilk boşluğu değiştirir (2) hepsini değiştirir
        console.log(sentence.toLowerCase().replace(' ', '-'));
        console.log(sentence.toLowerCase().replace(/ /g, '-'));
        console.log(sentence.toLowerCase().replace(/ı/g, 'i'));
        console.log(sentence.toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u'));
        );

        // if yapısı ile kontrol
        let val;
        val = `İlke's bday`+ ${ 2020 - bday >= 18?'ober 18': 'under 18'};

        //ARRAYS

        let names = ['ada', 'ilke', 'beg'];
        let years = ['2013', '1999', '2000'];
        let mix = ['ilke' ,'doğan', 10999,null,undefined,'sinema'];
        console.log(typeof names);
        console.log(names.length);

        // add item - dizinin sonuna atar
        years.push(1998);
        // add item - dizinin başına atar
        years.push(2923);
        // delete item - dizinin sonundakini siler
        years.pop(1998);
        // remove item - dizinin başındakini siler
        years.unshift(1998);
        names.reverse();

        //sort-alfabbetik sıralar
        years.sort();

        //find
        function over18{
            let age = 2018 - years;
            return age>=18;
    }
    years.find(names);
        
        //IF-ELSE -undefined
        if(typeof id != 'undefined' ){
            console.log('id: ' + id);
        }

        //OBJECT LITERALS
        let val;
        let person ={
            firstName : 'ilke',
            lastName : 'Doğan'
        };
        console.log(person);
