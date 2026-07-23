import { useForm } from "react-hook-form";

export default function TodoList(){
    const { register, handleSubmit } = useForm();
    const onValid = (data:any) => {
        console.log(data);
    }

    return (
        <div>
            <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
                {/* required를 안에 선언하면 잊은 칸을 자동으로 강조한다. */}
                <input {...register("email", {required:true})} placeholder="Email" />
                <input {...register("firstName", {required:true})} placeholder="First Name" />
                <input {...register("lastName", {required:true})} placeholder="Last Name" />
                <input {...register("userName", {required:true, minLength:8})} placeholder="User Name" />
                <input {...register("password", {required:true})} placeholder="Password" />
                <input {...register("passwordConfirm", {required:true})} placeholder="Password Confirm" />
                <button>Add</button>
            </form>
        </div>
    );
}