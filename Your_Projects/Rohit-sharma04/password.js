const commonPasswords=['000000',  '101010',  '101123',  '10203',  '102030',  '1111',  '11111',  '111111',  '1111111',  '11111111',  '1111111111',  '111222',  '112233',  '11223344',  '121212',  '123',  '123123',  '123123123',  '123321',  '1234',  '12341234',  '12344321',  '12345',  '1234554321',  '123456',  '1234561',  '1234567',  '12345678',  '123456789',  '1234567890',  '1234567891',  '12345678910',  '123456789a',  '123456789q',  '123456a',  '123456abc',  '123456q',  '12345a',  '12345q',  '12345qwert',  '1234qwer',  '123654',  '123654789',  '123789',  '123abc',  '123qwe',  '123qweasd',  '12qwaszx',  '131313',  '147258',  '147258369',  '147852',  '147852369',  '159357',  '159753',  '1g2w3e4r',  '1q2w3e',  '1q2w3e4r',  '1q2w3e4r5t',  '1q2w3e4r5t6y',  '1qaz',  '1qaz2wsx',  '1qaz2wsx3edc',  '1qaz@WSX',  '1qazxsw2',  '212121',  '222222',  '232323',  '444444',  '456123',  '456789',  '55555',  '555555',  '654321',  '666666',  '741852963',  '7758521',  '777777',  '7777777',  '786786',  '789456',  '789456123',  '87654321',  '888888',  '88888888',  '987654',  '987654321',  '999999',  '999999999',  'Alice0505',  'Gmail',  'Indya123',  'Jaidalewis1',  'P@ssw0rd',  'Senti123',  'Status',  'XXX',  'a12345',  'a123456',  'a123456789',  'aa12345678',  'aaaaaa',  'abc123',  'abcd1234',  'abcdef',  'abcdefgh',  'abhishek',  'aditya',  'admin123',  'aisyah',  'amultani',  'andrea',  'andrew',  'anjali',  'ankita',  'anthony',  'anuradha',  'archana',  'asd123',  'asdasd',  'asdasd123',  'asdf',  'asdf1234',  'asdfgh',  'asdfghjkl',  'ashish',  'ashley',  'azerty',  'balaji',  'bangalore',  'baseball',  'bigbasket',  'bismillah',  'braelynn12',  'caki1',  'celina',  'chandra',  'charlie',  'chennai',  'chinnu',  'chocolate',  'computer',  'creative',  'cricket',  'daniel',  'deepak',  'devgupta',  'dinesh',  'dragon',  'dubsmash',  'ebrarbas',  'emaans',  'emmagrange',  'engineer',  'flower',  'football',  'football1',  'forever',  'freedom',  'friend',  'friends',  'fuckyou',  'fuckyou1',  'gandalf',  'ganesh',  'ganesha',  'gaurav',  'gayathri',  'girlsrockz',  'godisgreat',  'goodluck',  'google',  'gwerty',  'gwerty123',  'hager',  'hanuman',  'hariom',  'harsha',  'hello',  'hello123',  'himanshu',  'hunter',  'iloveindia',  'iloveu',  'iloveyou',  'iloveyou1',  'india',  'india123',  'indian',  'internet',  'jacob',  'jaihanuman',  'jaimatadi',  'jennifer',  'jessica',  'jordan',  'jordan23',  'joshua',  'julienerean',  'justin',  'karthik',  'keerthu',  'khushi',  'killer',  'kolettis',  'krishna',  'lakshmi',  'leah123',  'letmein',  'linkedin',  'liverpool',  'love',  'love123',  'lovely',  'lucky123',  'mahesh',  'manish',  'manisha',  'marcelasilva',  'marina',  'master',  'mechanical',  'michael',  'michael1',  'michelle',  'miezwa',  'miyai',  'mohmadsolh',  'monkey',  'monkey1',  'mother',  'mumbai',  'muthu',  'mynoob',  'myspace1',  'namfiz01',  'narayana',  'naruto',  'naveen',  'nicole',  'nikhil',  'nikita',  'nizmy',  'nouhailalalala',  'noval',  'olivia16',  'omsairam',  'pakistan',  'pallavi',  'pankaj',  'pass@123',  'passw0rd',  'password',  'password1',  'password123',  'pirrehan',  'pito123',  'pokemon',  'poonam',  'pradeep',  'prakash',  'prasad',  'prashant',  'pravallika',  'praveen',  'prince',  'princess',  'princess1',  'priyanka',  'q1w2e3',  'q1w2e3r4',  'q1w2e3r4t5',  'q1w2e3r4t5y6',  'qazwsx',  'qazwsxedc',  'qazxsw',  'qq123456',  'qwaszx',  'qwe',  'qwe123',  'qweasd',  'qweasdzxc',  'qweqwe',  'qwer1234',  'qwert',  'qwerty',  'qwerty password',  'qwerty1',  'qwerty12',  'qwerty123',  'qwerty12345',  'qwertyu',  'qwertyui',  'qwertyuiop',  'rahul',  'rajesh',  'rajkumar',  'rakesh',  'ramesh',  'rashmi',  'reset123',  'robert',  'rockstar',  'ruprupesh',  'sachi',  'sachin',  'saibaba',  'sairam',  'sameer',  'samsanth',  'samsung',  'sandeep',  'sandhya',  'sangeeta',  'sanjay',  'santosh',  'secret',  'shadow',  'sharma',  'shweta',  'simran',  'soccer',  'sonali',  'sophia',  'srinivas',  'sriram',  'starwars',  'success',  'sunita',  'sunny',  'sunshine',  'supdog',  'superman',  'suresh',  'sweety',  'target123',  'test1',  'test123',  'thomas',  'tinkle',  'tosteri123',  'venkat',  'vennila',  'vijaya',  'vishal',  'waheguru',  'welcome',  'welcome123',  'wowecarts@123',  'xxx',  'zag12wsx',  'zomato',  'zxcvbn',  'zxcvbnm']

