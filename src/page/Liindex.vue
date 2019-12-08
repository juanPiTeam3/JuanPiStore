<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-09 09:17:12
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-08 16:03:18
 -->
<template>
    <div id="box">
        <div id="center">
            <Liheader></Liheader>  
            <Lnav></Lnav>
        </div>
        <div id="middle">
            <Lbanner></Lbanner>
            <Llist></Llist>
            <Lactive></Lactive>
            <Ltitle></Ltitle>
            <Lgoodlist></Lgoodlist> 
        </div>
        <LyFooter id="myfoooterr"></LyFooter>

    </div>
    
</template>
<script>
import Liheader from '../components/Liheader';
import Lnav from '../components/Lnav';
import Lbanner from '../components/Lbanner';
import Llist from '../components/Llist';
import Lactive from '../components/Lactive';
import Ltitle from '../components/Ltitle';
import Lgoodlist from '../components/Lgoodlist';
import LyFooter from '../components/LyFooter';



export default {
    name:'Liindex',
    data(){
        return{
            
        }
    },
    components:{
        Liheader,Lnav,Lbanner,Llist,Lactive,Ltitle,Lgoodlist
        ,LyFooter
    }

}
</script>
<style scoped>
 
    #center{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2; 

    }
    #middle{
        margin-bottom: 50px;
        
    }
    #myfoooterr{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>