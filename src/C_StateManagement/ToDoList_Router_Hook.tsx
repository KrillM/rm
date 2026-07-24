import { useForm } from "react-hook-form";

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    passwordConfirm: string;
    extraError?:string;
}

export default function TodoList(){
    const { 
        register, 
        handleSubmit, 
        formState:{errors},
        setError 
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: IForm) => {
        if(data.password !== data.passwordConfirm){
            setError("passwordConfirm", 
                {message: "Password are not match."}, 
                {shouldFocus: true}
            )
        }
        // setError("extraError", {message: "Server is blocked."})
    }

    return (
        <div>
            <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
                {/* required를 내부에 선언하면 잊은 칸을 자동으로 강조한다. */}
                <input 
                    {...register("email", {
                        required: "Email required", 
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com/,
                            message: "Only naver account avaliable."
                        }
                    })} 
                    placeholder="Email" 
                />
                <span>{errors?.email?.message}</span>
                <input 
                    {...register("firstName"
                        , {required:"Write here.", 
                            validate:{
                                noNico:(value)=> 
                                    value.includes("nico") ? "no nico allowed" : true,
                                noMyungBo:(value)=> 
                                    value.includes("myungbo") ? "no myungbo allowed" : true,
                            }
                        })} 
                    placeholder="First Name" 
                />
                <span>{errors?.firstName?.message}</span>
                <input 
                    {...register("lastName", {required:"Write here."})} 
                    placeholder="Last Name" 
                />
                <span>{errors?.lastName?.message}</span>
                <input 
                    {...register("userName", {
                        required: "Write here.", 
                        minLength: 8
                    })} 
                    placeholder="User Name" 
                />
                <span>{errors?.userName?.message}</span>
                <input 
                    {...register("password", {
                        required:"Write here.",
                        minLength: 5,
                    })} 
                    placeholder="Password" 
                />
                <span>{errors?.password?.message}</span>
                <input 
                    {...register("passwordConfirm", {
                        required:"Password is required",
                        minLength: {
                            value: 5,
                            message: "Your password is short."
                        }
                    })} 
                    placeholder="Password Confirm" 
                />
                <span>{errors?.passwordConfirm?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
}