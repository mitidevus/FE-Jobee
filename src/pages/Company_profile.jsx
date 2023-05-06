
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/company_avt.jfif"

function Company_profile() {

    return (

        <div class="bg-[#393E46] antialiasedr">
            <div class="container mx-auto my-60">


                <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <div class="flex justify-center">
                        <img src={avt} alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>

                    <div class="mt-16">
                        <h3 class="text-center text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            Nha tuyen dung A
                        </h3>
                        <p class="text-center text-sm text-gray-400 font-medium">abc@gmail.com</p>
                        <p class="text-center text-sm text-gray-400 font-medium">012-345-6789</p>
                        <p class="text-center text-sm text-gray-400 font-medium">DiaChi</p>
                        <div class="my-5 px-6">
                            <a href="/" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Go to <span class="font-bold">"Trang chu cua cong ty"</span></a>
                        </div>
                        <div class="flex justify-between items-center my-5 px-6">
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                        </div>

                        <div class="w-full">
                            <div class="px-6">
                               
                                <div class="py-10 border-t border-blueGray-200 text-center">
                                    <div class="flex flex-wrap justify-center">
                                        <div class="w-full lg:w-9/12 px-4">
                                            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Description: </span>
                                                This is a company
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-10 border-t border-blueGray-200 text-center">
                                    <div class="flex flex-wrap justify-center">
                                        <div class="w-full lg:w-9/12 px-4 mb-4">
                                            <button type="submit" class="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit Profile</button>
                                        </div>
                                        <div class="w-full lg:w-9/12 px-4">
                                            <a href="/profile/history" type="submit" class="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">History CV</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Company_profile;