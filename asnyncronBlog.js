const posts = [ 
    { id : 1 ,  pName : "kitap" },                      
    { id : 2 ,  pName : "resim" },                      
    { id : 3 ,  pName : "saat"},                      
    { id : 4 ,  pName : "masa"},                      
    { id : 5 ,  pName : "sandalye" },                    

];
 
const list = ()=>{
    posts.map((post)=> {
        console.log(post.id,post.pName);
       
    });
     console.log('----------------');
};
list()

const addPost = (newPost)=>{
    return promise1 = new Promise((resolve,reject)=>{
    if(newPost){
        posts.push(newPost);
        resolve('başariyla eklendi')
    }
    else{
        reject('Bir hata olustu');
    }
    } 
)
};

async function showPost() {
    try {
    await addPost({ id : 6 , pName : "saksi" });
    list();
    }
    catch(err){
        console.log(err);
        
    }
};
showPost();