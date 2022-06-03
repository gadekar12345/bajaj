import fs from "fs";


const data={name:"Akshay Gadekar",email:"akshaygadekar1228@gmail.com",college:"satara college of Engineering and managment,Limb Satara",ccpp:"PD0556",prn:"210941220061",dob:28121994}
export const getData = async (request, responce) => {
  const myData=request.body
  const myDat=request.headers

  console.log(">>>>",myData)
  console.log(">>>>",myDat)
  try { 
    

    if(myDat.name==data.name && myDat.email==data.email && myDat.college==data.college && myData.ccpp==data.ccpp && myData.prn==data.prn && myData.dob==data.dob)
{
  console.log("In serverside getData Function")

  responce.status(200).json({is_success:true});
  return
}else{
  responce.status(203).json({is_success:false});
  return
}

   
  } catch(error) {
//if error occured
console.log(">>>>error.message>",error.message)

    responce.status(400).json({ message: error.message});

  }
};
