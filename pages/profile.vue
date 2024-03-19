<template>
    <navbar />
    <div class="cont">
        <div class="rightcont">
            <div class="topcont">
                <div class="pic">
                    <img :src="`${$config.public.API_URL}/file/avatars/${User.Avatar}.webp`">
                </div>
                <div class="econt">
                    <div class="name">
                        <h1>{{ User.Name }}</h1>
                    </div>
<!--                     <div class="threecont">
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="midcont">
                
                <div class="table">
                    <div class="raspcube" v-for="(item, index) in Rasp">
                        <h2> {{ Day[index] }}</h2>
                        <p v-for="items in item">{{ items }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--     <forzav /> -->
    <footers />
</template>
<script setup>
definePageMeta({
    middleware: ["profile"]
})
</script>
<script>
import axios from 'axios';
import { routeLocationKey } from 'vue-router';


// Получаем все элементы <tr> с классом "zag" и добавляем в конец каждого элемента <span>
export default {
    data() {
        return {
            Day: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
            User: [],
            Rasp: [],
        }
    },
    methods: {
        async checkuser() {
            if (!localStorage.getItem("Bearer")) { return false }
            let a = await axios.get(this.$config.public.API_URL + "/checkuser", {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`
                }
            })
                .then(response => {
                    if (response.status != 202) { return false }
                    return response.data
                })
                .catch(error => {
                    localStorage.removeItem("Bearer");
                });
            this.User = a;
            
        },
        async GetRaspByClass() {
            const jsonData = {
                "Classname": this.User.Classname
            }
            const a = await axios.post(this.$config.public.API_URL + "/getrasp", jsonData, {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`
                }
            }).then(function(response) {
                return response.data
            })
            let rr = (Object.entries)
            this.Rasp = a

            for (let i = 0; i <= 10; i++) {
                if (this.Rasp.Monday[i] == undefined) {
                    this.Rasp.Monday[i] = ""
                }
            }
            
            for (let i = 0; i <= 10; i++) {
                if (this.Rasp.Tuesday[i] == undefined) {
                    this.Rasp.Tuesday[i] = ""
                }
            }
            
            for (let i = 0; i <= 10; i++) {
                if (this.Rasp.Wendsday[i] == undefined) {
                    this.Rasp.Wendsday[i] = ""
                }
            }
            
            for (let i = 0; i <= 10; i++) {
                if (this.Rasp.Thursday[i] == undefined) {
                    this.Rasp.Thursday[i] = ""
                }
            }
            for (let i = 0; i <= 10; i++) {
                if (this.Rasp.Friday[i] == undefined) {
                    this.Rasp.Friday[i] = ""
                }
            }
            console.log(this.Rasp.Monday)
        }
    },
    async mounted() {
        await this.checkuser()
        console.log('adfssdafasfsa ' + this.User.Classname)
/*         await this.GetRaspByClass()  вызывается в checkuser*/
await this.GetRaspByClass()
console.log(this.Rasp)
        
    }
}
</script>
<style scoped>
.table {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}
.raspcube {
    background-color: #f0f2f5;
    max-width: 300px;
    width: 300px;
    height: 300px;
}

.twocont {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
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
.pic img {
    width: 100%;
    height: 100%;
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
    border-radius: 6px;
}






.slider {
    display: none;
    width: 89%;
    height: 250px;
    margin: 0px;
    background-color: (--bgcolordefault);
}


* {
    color: #2D2D2D;
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



</style>