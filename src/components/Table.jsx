export const Table = () => {

    return(

        <>
            <section class="mx-auto w-full max-w-7xl px-4 py-4">
                <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                    <h2 class="text-lg font-semibold">Courses Available:</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        {/* This is a list of all employees. You can add new employees, edit or
                        delete existing ones. */}
                    </p>
                    </div>
                    <div>
                    {/* <button
                        type="button"
                        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Add new employee
                    </button> */}
                    </div>
                </div>
                <div class="mt-6 flex flex-col">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                            <tr class="divide-x divide-gray-200">
                                <th
                                scope="col"
                                class="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                >
                                <span>Courses</span>
                                </th>
                                <th
                                scope="col"
                                class="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                                >
                                Description
                                </th>
                                <th
                                scope="col"
                                class="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                >
                                Status
                                </th>
                                <th
                                scope="col"
                                class="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                >
                                Tutor
                                </th>
                                {/* <th scope="col" class="relative px-4 py-3.5">
                                <span class="sr-only">Edit</span>
                                </th> */}
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">

                            
                            <tr class="divide-x divide-gray-200">
                                <td class="whitespace-nowrap px-4 py-4">
                                <div class="flex items-center">
                                    <div class="h-10 w-10 flex-shrink-0">
                                    <img
                                        class="h-10 w-10 rounded-full object-cover"
                                        // src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                        src="/TableAssets/Tutor03.png"
                                        alt=""
                                    />
                                    </div>
                                    <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">
                                        Data Structures & Algorithms in C++
                                    </div>
                                    {/* <div class="text-sm text-gray-500">john@devui.com</div> */}
                                    </div>
                                </div>
                                </td>
                                <td class="whitespace-nowrap px-12 py-4">
                                <div class="text-sm text-gray-900">Complete DSA Concepts</div>
                                <div class="text-sm text-gray-500">With C++ Expert!</div>
                                </td>
                                <td class="whitespace-nowrap px-4 py-4">
                                <span class="inline-flex rounded-full bg-orange-200 px-2 text-xs font-semibold leading-5 text-green-800">
                                    Live
                                </span>
                                </td>
                                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                Vedant Agrawal
                                </td>
                                {/* <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                <a href="#" class="text-gray-500 hover:text-indigo-600">
                                    Edit
                                </a>
                                </td> */}
                            </tr>
                            
                            
                            <tr class="divide-x divide-gray-200">
                                <td class="whitespace-nowrap px-4 py-4">
                                <div class="flex items-center">
                                    <div class="h-10 w-10 flex-shrink-0">
                                    <img
                                        class="h-10 w-10 rounded-full object-cover"
                                        // src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                        src="/TableAssets/Tutor01.png"
                                        alt=""
                                    />
                                    </div>
                                    <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">
                                        Data Structures & Algorithms in Java
                                    </div>
                                    {/* <div class="text-sm text-gray-500">john@devui.com</div> */}
                                    </div>
                                </div>
                                </td>
                                <td class="whitespace-nowrap px-12 py-4">
                                <div class="text-sm text-gray-900">Complete DSA Concepts</div>
                                <div class="text-sm text-gray-500">With Java Expert!</div>
                                </td>
                                <td class="whitespace-nowrap px-4 py-4">
                                <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                    Completed
                                </span>
                                </td>
                                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                Akshat Sahu
                                </td>
                                {/* <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                <a href="#" class="text-gray-500 hover:text-indigo-600">
                                    Edit
                                </a>
                                </td> */}
                            </tr>
                            <tr class="divide-x divide-gray-200">
                                <td class="whitespace-nowrap px-4 py-4">
                                <div class="flex items-center">
                                    <div class="h-10 w-10 flex-shrink-0">
                                    <img
                                        class="h-10 w-10 rounded-full object-cover"
                                        // src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                                        src="/TableAssets/Tutor02.png"
                                        alt=""
                                    />
                                    </div>
                                    <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">
                                        Data Structures & Algorithms in Javascript
                                    </div>
                                    {/* <div class="text-sm text-gray-500">jane@devui.com</div> */}
                                    </div>
                                </div>
                                </td>
                                <td class="whitespace-nowrap px-12 py-4">
                                <div class="text-sm text-gray-900">Complete DSA Concepts</div>
                                <div class="text-sm text-gray-500">With Javascript Expert!</div>
                                </td>
                                <td class="whitespace-nowrap px-4 py-4">
                                <span class="inline-flex rounded-full bg-orange-200 px-2 text-xs font-semibold leading-5 text-green-800">
                                    Live
                                </span>
                                </td>
                                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                Shubhashish
                                </td>
                                {/* <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                <a href="#" class="text-gray-500 hover:text-indigo-600">
                                    Edit
                                </a>
                                </td> */}
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="mt-4 w-full border-gray-300">
                    <div class="mt-2 flex items-center justify-end">
                    <div class="space-x-2">
                        {/* <button
                        type="button"
                        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                        ← Previous
                        </button> */}
                        <button
                        type="button"
                        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                        More →
                        </button>
                    </div>
                    </div>
                </div>
            </section>

        </>


    )

}