
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/company_avt.jfif"
import bg from "../assets/company_bg.jfif"
import { data } from "../data/Notification"
function Notification() {
    const content = data
    return (

        <div class="bg-[#393E46] antialiasedr">
            <div class="container mx-auto my-60">


                <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">


                    <div class="mt-16 pt-5 pb-5">
                        <h3 class="text-center text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            Notification
                        </h3>
                        {content.map((content, index) => (
                            <div class="my-5 px-6">
                                <a
                                    href="/notification/details"
                                    class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">
                                    <span class="font-bold">{content.from}</span>
                                </a>
                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </div>
    );
}
export default Notification;