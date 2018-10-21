<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p> {{ this.name }}</p>
        <button @click="changeName">Change name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail v-on:name-show="hello" :myName="name" :resetFn="callReset" tabindex="0"></app-user-detail>

            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function () {
            return  {
                name: 'Deyan'
            }
        },
        methods: {
            changeName() {
                this.name = 'Pesho';
            },

            callReset(){
                this.name= 'Deyan';
            },

            nameShow() {
                this.name = 'Gosho';
            },
            hello() {
                alert("hello");
            },
        },
        components: {
            appUserDetail: UserDetail,
            'app-user-edit': UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
