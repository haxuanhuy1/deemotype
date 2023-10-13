import { resolve } from "path"

export const Json = ()=>{
   const value = '{"name":"huy ha"}'
   console.log(JSON.parse(value))
   console.log(value)
   setTimeout(()=>{
    console.log(1);
    setTimeout(()=>{
 console.log(2)
 setTimeout(()=>{
    console.log(3)
 },1000)
    },1000)
   },1000)
//    interface Boolen {

//    }
//    var promise = new Promise<void>(
//     (resolve , reject)=>{
//      resolve(123)
//     }
//    )
//    promise
//    .then(
//     (cours:number)=>{
//      console.log(cours)
//      return 2
//     }
//    )
//    .then(function(cours2){
//    console.log(cours2)
//    })
interface Boolen {
    // Định nghĩa các thuộc tính hoặc phương thức nếu cần
}

var promise = new Promise<number>((resolve, reject) => {
    resolve(123); // Truyền giá trị 123 từ Promise
});

promise
    .then((cours: number) => {
        console.log(cours); // In giá trị 123 ra console
        return 'học viện công nghệ bưu chính viễn thông';
    })
    .then((cours2: string) => {
        console.log(cours2); // In chuỗi 'học viện công nghệ bưu chính viễn thông' ra console
    })
    .catch((error: any) => {
        console.error(error); // Xử lý lỗi nếu có
    });
    return (
        <div>

        </div>
    )
}