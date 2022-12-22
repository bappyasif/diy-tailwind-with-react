import React from 'react'

function Form() {
    return (
        <div className='form bg-center absolute top-20 left-80'>
            <form className='w-full'>
                <legend>Test
                    <span className='relative'>
                        <span className="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
                        <span className="relative text-white">Form</span>
                    </span>
                </legend>
                <fieldset>
                    <label htmlFor='uName'>User Name</label>
                    <input
                        id='uName' value={"'supp"} disabled
                        className="disabled:text-gray-200 disabled:bg-slate-400 rounded-sm pl-1
                        block min-w-full"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='uName'>User Email</label>
                    <input
                        id='uName' type={"email"} required
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
                        focus:outline-none focus:border-sky-500 focus:ring-sky-500 
                        block w-full rounded-md sm:text-sm focus:ring-1 required:border-red-600"
                        placeholder="you@example.com"
                    />
                </fieldset>
                <fieldset>
                    <label
                        className='before:content-["*"]'
                        htmlFor='uPass'
                    >User Password</label>
                    <input
                        id='uPass'
                        className="focus:text-blue-900 active:bg-slate-800 active:text-gray-200
                        rounded-sm pl-1 block w-full"
                    />
                </fieldset>
                <button>Hit it!!</button>
            </form>
            <br />
            <hr />
            <br />
            <DialogForm />
        </div>
    )
}

export const DialogForm = () => {
    return (
        <dialog open={true} class="backdrop:bg-gray-50">
            <form className='w-full' method='dialog'>
                <legend>Dialog
                    <span className='relative'>
                        <span className="block absolute -inset-0 -skew-x-2 -skew-y-6 bg-pink-500" aria-hidden="true"></span>
                        <span className="relative text-white">Form</span>
                    </span>
                </legend>
                <fieldset>
                    <label htmlFor='uName'>User Email</label>
                    <input
                        id='uName' type={"email"} required
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
                        focus:outline-none focus:border-sky-500 focus:ring-sky-500 
                        block w-full rounded-md sm:text-sm focus:ring-1 required:border-red-600"
                        placeholder="you@example.com"
                    />
                </fieldset>
                <fieldset>
                    <label
                        className='before:content-["*"]'
                        htmlFor='uPass'
                    >User Password</label>
                    <input
                        type={"password"}
                        id='uPass'
                        className="focus:text-blue-900 active:bg-slate-800 active:text-gray-200
                        rounded-sm pl-1
                        block w-"
                    />
                </fieldset>
                <button class="shadow-lg shadow-indigo-500/40 ...">Subscribe</button>
                <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
            </form>
        </dialog>
    )
}

export default Form