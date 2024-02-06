<template>
    <navbar />
    <div class="cont">
        <div class="rightcont">
            <div class="topcont">
                <div class="pic">
                </div>
                <div class="econt">
                    <div class="name">
                        <h1>{{ User.Name }}</h1>
                    </div>
                    <div class="threecont">
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="midcont">
                <Swiper class="slider" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
                    :effect="'creative'" :autoplay="{ delay: 8000, disableOnInteraction: true, }"
                    :creative-effect="{ prev: { shadow: false, translate: ['-20%', 0, -1], }, next: { translate: ['100%', 0, 0], }, }">
                    <SwiperSlide class="slide" v-for="slide in Days" :key="slide">
                        <table>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                            <tr>
                                <th>{{ slide }}</th>
                            </tr>
                        </table>
                    </SwiperSlide>
                </Swiper>
                <div class="table">
                    <table>
                        <tr class="zag">
                            <th class="lessons"></th>
                            <th>Понедельник</th>
                            <th>Вторник</th>
                            <th>Среда</th>
                            <th>Четверг</th>
                            <th>Пятница</th>
                        </tr>
                        <tr v-for="i in 10">
                            <th class="lessons">{{ i }}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="raspset">
                <div class="day">
                    <button>Понедельник</button>
                    <button>Вторник</button>
                    <button>Среда</button>
                    <button>Четверг</button>
                    <button>Пятница</button>
                </div>
                <div class="raspsettable">
                    <table>
                        <tr>
                            <th></th>
                            <th v-for="(item, index) in ClassList">{{ item.Name }}</th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <th v-for="(item, index) in ClassList">{{ item.Name }}</th>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="twocont">
                <div class="documentcont">
                    <div class="documentheader">
                        <p>Документы</p>
                        <div class="pluscont" @click="backcontvisible('Docs')"></div>
                    </div>
                    <div class="document" v-for="(item, index) in Docslist">
                        <h3>{{ item.Name }}</h3>
                        <p>{{ item.Page }}</p>
                        <div class="delete" @click="DeleteDocs(item.Path); Docslist.splice(index, 1)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L9 3H4V5H20V3H15L14 2H10ZM5 7V22H19V7H5ZM8 9H10V20H8V9ZM14 9H16V20H14V9Z"
                                    fill="#FF0000" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="clases">
                    <div class="clasesheader">
                        <p>Классы</p>
                        <div class="pluscont" @click="backcontvisible('Clases')"></div>

                    </div>
                    <div class="clas" v-for="(item, index) in ClassList">
                        <h3>{{ item.Name }}</h3>
                        <div class="change" @click="$router.replace(`./classsetting?class=${item.Name}`)">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_57_2)">
                                    <path
                                        d="M28.1996 16.6248V13.3248L24.272 12.6828C24.0392 11.7528 23.6744 10.8786 23.1932 10.0776L25.4822 6.81545L23.1482 4.48325L19.9274 6.79865C19.1246 6.31265 18.2444 5.94185 17.3078 5.70845L16.6238 1.80005H13.3238L12.6878 5.69525C11.7506 5.92505 10.8656 6.29105 10.0604 6.77465L6.84918 4.48025L4.51578 6.81245L6.77478 10.0428C6.28638 10.851 5.91498 11.7348 5.67918 12.678L1.80078 13.3236V16.6236L5.67498 17.3106C5.90898 18.2514 6.28038 19.1352 6.77058 19.9452L4.48098 23.1474L6.81318 25.482L10.0478 23.2164C10.8554 23.7012 11.738 24.0702 12.6752 24.3012L13.3238 28.2H16.6238L17.3174 24.2922C18.2498 24.0558 19.1306 23.6844 19.9304 23.1978L23.1872 25.4832L25.52 23.1486L23.195 19.9206C23.6762 19.1196 24.0416 18.2442 24.272 17.3142L28.1996 16.6248Z"
                                        stroke="#7E2CBE" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M14.9998 19.2C17.3194 19.2 19.1998 17.3196 19.1998 15C19.1998 12.6805 17.3194 10.8 14.9998 10.8C12.6802 10.8 10.7998 12.6805 10.7998 15C10.7998 17.3196 12.6802 19.2 14.9998 19.2Z"
                                        stroke="#7E2CBE" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_57_2">
                                        <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="delete"
                            @click="DeleteClass(item.Name); ClassList.splice(index, 1); DeleteUserByClassName(item.Name)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L9 3H4V5H20V3H15L14 2H10ZM5 7V22H19V7H5ZM8 9H10V20H8V9ZM14 9H16V20H14V9Z"
                                    fill="#FF0000" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="teacherlist">
                    <div class="teacherlistheader">
                        <p>Учителя</p>
                        <div class="pluscont" @click="backcontvisible('Teacher')"></div>

                    </div>
                    <div class="clas" v-for="(item, index) in Teacher">
                        <h3>{{ item.Name }}</h3>
                        <div class="delete" @click="DeleteUser(item.ID); Teacher.splice(index, 1)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L9 3H4V5H20V3H15L14 2H10ZM5 7V22H19V7H5ZM8 9H10V20H8V9ZM14 9H16V20H14V9Z"
                                    fill="#FF0000" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="zavlist">
                    <div class="zavlistheader">
                        <p>Завучи</p>
                        <div class="pluscont" @click="backcontvisible('Zav')"></div>

                    </div>
                    <div class="clas" v-for="(item, index) in Zav">
                        <h3>{{ item.Name }}</h3>

                        <div class="delete" @click="DeleteUser(item.ID); Zav.splice(index, 1)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L9 3H4V5H20V3H15L14 2H10ZM5 7V22H19V7H5ZM8 9H10V20H8V9ZM14 9H16V20H14V9Z"
                                    fill="#FF0000" />
                            </svg>

                        </div>
                    </div>

                </div>
                <div class="zavlist">
                    <div class="zavlistheader">
                        <p>Iframes</p>
                        <div class="pluscont" @click="backcontvisible('iframes')"></div>

                    </div>
                    <div class="clas" v-for="(item, index) in IframeList">
                        <h3>{{ item.Page }}</h3>

                        <div class="delete" @click="DeleteIframe(item.Path); IframeList.splice(index, 1)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L9 3H4V5H20V3H15L14 2H10ZM5 7V22H19V7H5ZM8 9H10V20H8V9ZM14 9H16V20H14V9Z"
                                    fill="#FF0000" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div id="backcont" class="backcont backcontclose">
        <div class="otcnt">
            <div @click="backcontvisible()" class="otcontclose"></div>
            <div class="docsinput" v-if="BackContType == 'Docs'">
                <h1>Добавить документ</h1>
                <select class="selectpagedoc" v-model="Docs.Page">
                    <option disabled selected>Выберите стрницу сайта</option>
                    <option>Структура и органы управления образовательной организацией</option>
                    <option>Документы</option>
                    <option>Образование</option>
                    <option>Руководство. Педагогический состав</option>
                    <option>Материально-техническое обеспечение и оснащенность образовательного процесса</option>
                    <option>Платные образовательные услуги</option>
                    <option>Финансово-хозяйственная деятельность</option>
                    <option>Вакантные места для приема (перевода) обучающихся</option>
                    <option>Доступная среда</option>
                    <option>Международное сотрудничество</option>
                </select><br>
                <input type="text" placeholder="Название" v-model="Docs.Name">
                <label class="inplabel">
                    <input @change="inputchange" type="file" id="docsfile" name="docsfile">
                    <span class="inspan">{{ Docs.DocsName }}</span>
                </label>
                <button class="btn-add-docs" @click="AddDocs"><span></span>Добавить документ</button>
            </div>
            <div class="clasesinput" v-if="BackContType == 'Clases'">
                <h1>Добавить класс</h1>
                <input placeholder="Название класса" v-model="ClassAdd.Name">
                <button class="btn-add-docs" @click="AddClass()"><span></span>Добавить класс</button>
            </div>
            <div class="teacherinput" v-if="BackContType == 'Teacher'">
                <h1>Добавить учителя</h1>
                <input v-model="AddUserInfo.Name" placeholder="Имя учителя">
                <input v-model="AddUserInfo.Login" placeholder="Логин">
                <button class="btn-add-docs" @click="RegisterUser('teacher')"><span></span>Добавить учителя</button>
            </div>
            <div class="zavinput" v-if="BackContType == 'Zav'">
                <h1>Добавить Завуча</h1>
                <input v-model="AddUserInfo.Name" placeholder="Имя завуча">
                <input v-model="AddUserInfo.Login" placeholder="Логин">
                <button class="btn-add-docs" @click="RegisterUser('zav')"><span></span>Добавить завуча</button>
            </div>
            <div class="reg_responde" v-if="BackContType == 'resp'">
                <h3>Логин: {{ regresp.Login }}</h3>
                <h3>Пароль: {{ regresp.Password }}</h3>
            </div>
            <div class="addiframe" v-if="BackContType == 'iframes'">
                <h1>Установить Iframe</h1>
                <label class="inplabel">
                    <input @change="inputiframechange" type="file" id="iframefile" name="iframefile">
                    <span class="inspan">{{ Iframe.Name }}</span>
                </label>
                <input v-model="Iframe.Page" type="text" placeholder="URL страницы">
                <button class="btn-add-docs" @click="Addiframe"><span></span>Добавить iframe</button>
            </div>
        </div>
    </div>
    <footers />
</template>
<script>
import axios from 'axios';


// Получаем все элементы <tr> с классом "zag" и добавляем в конец каждого элемента <span>
export default {
    data() {
        return {
            Rasp: "",
            Uvd: "",
            Userinfo: "",
            Teacher: [],
            Zav: [],
            regresp: "",
            AddUserInfo: {
                Name: "",
                Login: "",
                Role: "",
                ClassName: "",
            },
            Docs: {
                DocsName: "Выберите файл",
                Name: "",
                Page: "",
                File: "",
            },
            Docslist: [],
            Days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"],
            BackContType: "",
            ClassList: [],
            ClassAdd: {
                Name: "",
            },
            User: [],
            Iframe: {
                Page: "",
                Name: "Выберите файл",
                File: "",
            },
            IframeList: [],
            Rasp: [],
        }
    },
    methods: {
        async getrasp() {
            const a = await axios.get(this.$config.public.API_URL + "/getallrasp", {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`
                }
            }).then(function (response) {
                return response
            })
            this.Rasp = a
            let normrasp = []
        },
        async checkuser() {
            if (!localStorage.getItem("Bearer")) { return false }
            let a = await axios.get(this.$config.public.API_URL + "/checkuser", {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`
                }
            })
                .then(response => {
                    if (response.status != 202) { return false }
                    this.User = response.data
                    this.User.Name = response.data.Name.split(" ")[0] + " " + response.data.Name.split(" ")[1]
                    return true
                })
                .catch(error => {
                    localStorage.removeItem("Bearer");
                });
            return a
        },
        async AddClass() {
            const a = await axios.post(this.$config.public.API_URL + "/addclass", this.ClassAdd, {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`,
                    'Content-Type': 'application/json',
                }
            })
                .then(function (response) {

                })
                .catch(function (err) { })
            this.ClassList = this.GetClass()
            this.backcontvisible()
        },
        async DeleteClass(name) {
            const jsonData = {
                Name: name
            }
            const a = await axios.post(this.$config.public.API_URL + "/deleteclass", jsonData, {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`,
                    'Content-Type': 'application/json',
                }
            })
                .then(function (response) {

                })
                .catch(function (err) { })
        },
        async GetClass() {
            const a = await axios.get(this.$config.public.API_URL + "/getclass", {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`,
                }
            })
                .then(function (response) {
                    return response.data
                })
                .catch(function (response) {
                    //handle error
                });
            this.ClassList = a
        },
        async DeleteDocs(path) {
            const jsonData = {
                Path: path,
            }
            const a = await axios.post(this.$config.public.API_URL + "/deletedocs", jsonData, {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`,
                }
            })
        },
        async GetAllDocs() {
            const list = await axios.get(this.$config.public.API_URL + "/getalldocs", {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`,
                }
            })
                .then(function (response) {
                    return response.data
                },
                )
                .catch(function (response) {
                    //handle error
                });
            console.log(list)
            this.Docslist = list
        },
        async AddDocs() {
            let data = new FormData()
            data.append("Name", this.Docs.Name)
            data.append("Page", this.Docs.Page)
            data.append("File", this.Docs.File)
            let a = await axios.post(this.$config.public.API_URL + "/adddocs", data, {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`,
                    'Content-Type': 'multipart/form-data',
                }
            }).then(function (response) {
                //handle success
            })
                .catch(function (response) {
                    //handle error
                });
            this.backcontvisible()
            this.GetAllDocs()
        },
        async DeleteUser(id) {
            const jsonData = {
                ID: id,
            }
            let a = await axios.post(this.$config.public.API_URL + "/deluser", jsonData, {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`,
                    'Content-Type': 'application/json',
                }
            })
        },
        async Getzavandteach() {
            const zav = await axios.get(this.$config.public.API_URL + "/allzav", {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`,
                }
            }
            )
                .then(response => {
                    return response.data
                })
            const teach = await axios.get(this.$config.public.API_URL + "/allteacher", {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`,
                }
            })
                .then(response => {
                    return response.data
                })
            return [teach, zav !== null ? zav : []]
        },
        async DeleteUserByClassName(className) {
            const a = await axios.post(this.$config.public.API_URL + "/deleteuserbyclass", {
                ClassName: className
            }, {
                headers: {
                    "Authorization": localStorage.getItem("Bearer")
                }
            }).then(function (response) {
                return response.data
            })
                .catch(function (err) { })
        },
        async RegisterUser(role) {
            this.AddUserInfo.Role = role
            // Установите URL, куда вы хотите отправить запрос
            // Отправьте POST-запрос с данными в формате JSON
            await axios.post(this.$config.public.API_URL + "/register", this.AddUserInfo, {
                headers: {
                    'Authorization': localStorage.getItem("Bearer"),
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    this.regresp = response.data
                    this.BackContType = "resp"
                })
                .catch(error => {
                    console.error('Ошибка запроса:', error);
                });
            [this.Teacher, this.Zav] = await this.Getzavandteach()
        },
        inputchange(e) {
            this.Docs.DocsName = e.target.files[0].name
            this.Docs.File = e.target.files[0]
        },
        inputiframechange(e) {
            this.Iframe.File = e.target.files[0]
            this.Iframe.Name = e.target.files[0].name
        },
        backcontvisible(type) {
            let bb = document.getElementById("backcont")
            bb.classList.toggle("backcontclose")
            this.BackContType = type
            this.AddUserInfo = {
                Name: "",
                Login: "",
                Role: "",
                ClassName: "",
            }
            this.Docs = {
                DocsName: "Выберите файл",
                Name: "",
                Page: "",
                File: "",
            }
            this.Iframe = {
                File: "",
                Page: "",
                Name: "Выберите файл",
            }
        },
        async GetAllIframes() {
            const a = await axios.get(this.$config.public.API_URL + "/getalliframe", {
                headers: {
                    "Authorization": `${localStorage.getItem("Bearer")}`
                }
            }).then(function (response) {
                return response.data
            })
                .catch(function (error) { })
            this.IframeList = a
        },
        async Addiframe() {
            let data = new FormData()
            data.append("Name", this.Iframe.Name)
            data.append("Page", this.Iframe.Page)
            data.append("File", this.Iframe.File)
            const a = await axios.post(this.$config.public.API_URL + "/addiframe", data, {
                headers: {
                    "Authorization": `${localStorage.getItem("Bearer")}`,
                    "Content-Type": 'multipart/form-data',

                }
            }).then(function (response) { })
                .catch(function (error) { })
        },
        async DeleteIframe(Path) {
            const jsonData = {
                Path: Path,
            }
            const a = await axios.post(this.$config.public.API_URL + "/deleteiframe", jsonData, {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`,
                    'Content-Type': 'application/json'
                }
            }).then(function (response) { })
                .catch(function (err) { })
        }
    },
    async mounted() {
        console.log(this.$config.public.API_URL)
        
        await this.GetAllDocs()
        this.GetClass()
        this.checkuser()
        this.GetAllIframes()
        [this.Teacher, this.Zav] = await this.Getzavandteach()
        await this.getrasp()

    }
}
</script>
<style scoped>
.clas {
    color: white;
}

.clas h3 {
    margin: 25px 0 0 5px;
}

.change {
    height: 50px;
    transition: all 0.5s;
    position: absolute;
    width: 50px;

    right: 75px;
    top: 15px;
    border-radius: 12px;
    background: #2D2D2D;
    box-shadow: 0.5px 1px 3px 3px rgba(126, 44, 190, 0.58) inset;
}

.change:hover {
    box-shadow: 0.5px 1px 0px 3px #7E2CBE inset;
}

.change svg {
    margin: 10px;
}

.clasesinput input,
.teacherinput input,
.docsinput input,
.addiframe input,
.zavinput input {
    margin: auto;
    outline-style: none;
    width: 210px;
    background-color: #d9d9d9;
    border: none;
    color: black;
    font-family: montserrat;
    height: 40px;
    border-bottom: 2px solid #7E2CBE;
}

.otcontclose {
    margin: 15px;
    position: relative;
    height: 32px;
    width: 32px;
}

.otcontclose::after,
.otcontclose::before {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    background-color: black;
    top: 12px;
    transform: rotate(-45deg);
    transition: all 0.3s;
}

.otcontclose::after {
    transform: rotate(45deg);
}

.btn-add-docs {
    background-color: #D9D9D9;
    color: white;
    font-family: montserrat;
    border: none;
    width: 210px;
    position: relative;
    margin: auto;
    overflow: hidden;
    height: 50px;
    border-radius: 25px;
}

.btn-add-docs span {
    display: block;
    height: 100px;
    width: 100px;
    background-color: #7E2CBE;
    border-radius: 50%;
    position: absolute;
    top: -200px;
    left: -200px;
    transition: all 0.3s;
}

.btn-add-docs:hover span {
    top: -60px;
    left: -60px;
}

.docsinput,
.clasesinput,
.teacherinput,
.zavinput,
.docsinput,
.addiframe {
    display: flex;
    flex-direction: column;
    color: black;
    gap: 10px;
}

.selectpagedoc {
    margin: auto;
    height: 45px;
    width: 210px;
    font-family: montserrat;
    color: black;
    background-color: #D9D9D9;
    border: none;
    border-radius: 25px;
    padding: 10px;
}

.inplabel {
    background-color: #D9D9D9;
    padding: 10px;
    width: 210px;
    margin: auto;
    border-radius: 25px;
    overflow: hidden;
    margin-top: 20px;
}

#docsfile,
#iframefile {
    position: absolute;
    visibility: hidden;
}

.otcnt {
    text-align: center;
    color: black;
    background-color: #f0f2f5;
    width: 500px;
    height: 500px;
    border-radius: 12px;
    margin: auto;
}

.backcont {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.692);
}

.twocont {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.documentcont,
.clases,
.teacherlist,
.zavlist {
    width: 500px;
    height: 500px;
    flex-shrink: 0;
    position: relative;
    border-radius: 12px;
    background: #f0f2f5;
    margin-left: 50px;
    margin-top: 12px;
    color: black;
    overflow: scroll;
    overflow-x: hidden;
}

.documentcont::-webkit-scrollbar,
.clase::-webkit-scrollbars,
.teacherlist::-webkit-scrollbar,
.zavlist::-webkit-scrollbar {
    width: 1px;
}

.pluscont {
    height: 32px;
    width: 32px;
    position: absolute;
    right: 15px;
    top: 5px;
}

.pluscont::after {
    content: "";
    display: block;
    background-color: black;
    position: absolute;
    width: 100%;
    height: 2px;
    top: 15px;
}

.pluscont::before {
    content: "";
    background-color: black;
    display: block;
    position: absolute;
    width: 2px;
    height: 100%;
    left: 15px;
}

.document,
.clas {
    position: relative;
    margin: 5px;
    width: 90%;
    margin-left: 5%;
    height: 88px;

    border-radius: 12px;
    background: #d9d9d9;
    flex-shrink: 0;
}

.document h3 {
    color: white;
    margin-left: 15px;
}

.document p {
    margin-left: 15px;
    color: #666161;
}

.documentheader p,
.clasesheader p,
.teacherlistheader p,
.zavlist p {
    font-size: 24px;
    color: black;
    margin: 5px 0 0 15px;
}

.delete {
    height: 50px;
    transition: all 0.5s;
    position: absolute;
    width: 50px;

    right: 15px;
    top: 15px;
    border-radius: 12px;
    background: gray;
    box-shadow: 0.5px 1px 3px 3px rgba(109, 109, 109, 0.58) inset;
}

.delete:hover {
    box-shadow: 0.5px 1px 0px 3px #7E2CBE inset;
}

.delete svg {
    margin-top: 12px;
    fill: red;
    margin-left: 12px;
}

table {
    color: #ffffff;
    width: 100%;
    height: 100%;
    position: relative;
    border-collapse: collapse;
}

.table tr:nth-child(1) {
    border-bottom: 2px solid var(--bordercolor);
}

.table th:nth-child(1) {
    border-right: 2px solid var(--bordercolor);
}

.table tr:nth-child(1) th:nth-child(4) {
    border-right: 2px solid var(--bordercolor);
}

.cont {
    width: 100%;
    height: 100%;

}

.pic {
    background-color: #f0f2f5;
    width: 256px;
    height: 256px;
    border-radius: 12px;
    margin-top: 20px;
}

.topcont {
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
}

h1 {
    color: black;
}

.threecont div {
    width: 125px;
    height: 50px;
    background-color: #f0f2f5;
    border-radius: 6px;
}

.threecont {
    display: flex;
    gap: 28px;
    margin-top: 165px;
}

.econt {
    display: block;
    margin-left: 20px;
}

.midcont {
    display: flex;
    margin-left: 50px;
    gap: 28px;
    width: 100%;
    margin-top: 78px;
}

.midcont div {
    background-color: #f0f2f5;
    border-radius: 6px;
}

.table {

    position: relative;
    width: 60%;
    height: 500px;
}

.notif {
    width: 30%;
    height: 500px;
}

.zak::before {
    position: absolute;
    display: block;
    bottom: 0px;
    content: "";
    height: 2px;
    width: 100%;
    background-color: #FFF;
    left: 0px;
}

.zak {
    position: relative;
    padding: 10px;
    display: flex;
    color: #FFF;
}

.zak p {
    position: absolute;
    right: 8px;
    font-size: 24px;
    top: 8px;
    margin: 0px;
}

.slider {
    display: none;
    width: 89%;
    height: 250px;
    margin: 0px;
    background-color: (--bgcolordefault);
}

.slide table {
    border-collapse: collapse;
}

.slide table tr:nth-child(1) {
    border-bottom: 2px solid blueviolet;
}

@media (max-width: 1280px) {
    .leftmenu {
        display: none;
    }

    .cont {
        grid-template-columns: 100%;
    }
}

@media (max-width: 810px) {
    .midcont {
        display: block;
    }

    .table {
        width: 89%;
    }

    .notif {
        width: 89%;
        margin-top: 15px;
    }
}

@media (max-width: 808px) {
    .table {
        display: none;
    }

    .pic {
        width: 150px;
        height: 150px;
        margin: 15% 0 0 25%;
    }

    .threecont {
        display: none;
    }

    .slider {
        display: block;
    }

    .midcont,
    .topcont {
        margin: 20px;
    }
}

.backcontclose {
    display: none;
}

* {
    color: #2D2D2D;
}</style>