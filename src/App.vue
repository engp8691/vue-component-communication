<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="switchComponent(`app-blue`)">Load Blue Template</button>
                <button class="btn btn-success" @click="switchComponent(`app-green`)">Load Green Template</button>
                <button class="btn btn-danger"  @click="switchComponent(`app-red`)">Load Red Template</button>
                <hr>
                <component :is="selectedComponent"><p>I say hello!</p></component>                
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
            return {
                selectedComponent: `app-blue`
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            switchComponent: function(c){
                this.selectedComponent = c;
            }
        }
    }
</script>

<style>
</style>
