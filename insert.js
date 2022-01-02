const dbConnect = require('./mongodb')
const main = require('./index')

const insertData = async()=>{
    const collection = await dbConnect();
    const result = await collection.insertOne(
        {
            'fullName':'Rajib Hasan',
            'email': 'rajib.hasan1996@gmail.com',
            'password':'braincraft123456',
            'designation': 'back-end developer',
            'userRole':'employee',
            'teamName':'Web',
            'teamId': 'web-bc',
            'supervisorId': '',
            'supervisorName': 'Bilash',
            'nationalIdNumber': '10154876',
            'nationalIdFilePath': '',
            'bloodGroup' :'B+',
            'presentAddress' : 'Mirpur-2',
            'permanentAddress' : 'Madaripur',
            'contactNumber':'014754063712',
            'emergencyContactDetails' : '01754063712',
            'joiningDate':'19-12-2021',
            'profilePhotoPath' :'',
            'dob':'',
            'dateOfTermination': '',
            'totalLeave': 30,
            'availableLeave': 30,
            'consumedLeave': 0,
            'sandwitchLeaveConsumed': 0,
            'facebookProfile':'',
            'appleProfile': '',
            'twitterProfile': '',
            'blogUrl' : '',
            'about' : '',
            'instagramProfile' : '',
            'pinterestProfile' : '',
            'linkedInProfile' : '',
            'isActive' : 1

        }
        );
    if(result.insertedCount){
        console.warn('data is inserted');
    }

}

insertData();
main();

// db.getCollection('employee').insertOne({'fullName':'rrr'})