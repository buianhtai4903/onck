let stt =1;
function ktmssv(){
    let mssv =document.getElementById('mssv').value;
    let regexmssv =/^(21|20|19|18|17)+(\d{5})+1$/;
    if(!mssv){
        document.getElementById('tbmssv').innerHTML='vui long nhap';
        return false;
    }
    else if (!regexmssv.test(mssv)){
        document.getElementById('tbmssv').innerHTML='vui long nhap dung dinh dang';
        return false;
    }
    else {
        document.getElementById('tbmssv').innerHTML='';
        return true;
    }
}
function ktten1(){
    let ten1 =document.getElementById('ten1').value;
    let ten2 =document.getElementById('ten2').value;
    if (!ten1 || !ten2){
        document.getElementById('tbhoten').innerHTML='vui long đien ho ten va ten dem'
        document.getElementById('tbten').innerHTML='vui long đien ho ten va ten dem'
        return false;
    }
    else {
        document.getElementById('tbhoten').innerHTML='';
        document.getElementById('tbten').innerHTML='';
        return true;
    }

}
function ktgt(){
    let gt =document.getElementsByName('gt');
    let gtbool= false;
    for(let i =0; i<gt.length ;i++){
        if(gt[i].checked){
            gtbool=true;
            break;
        }
    }
    if(!gtbool){
        document.getElementById('tbgt').innerHTML='vui long chon ioi tinh';
        return false;
    }
    else {
        document.getElementById('tbgt').innerHTML='';
        return true;
    }
}
function ktdt(){
    let dt= document.getElementById('dt').value;
    let regexsdt=/^(03|04|05|07|08|09)+\d{8}/;
    if (!dt){
        document.getElementById('tbdt').innerHTML='vui long nhap so dien thoai';
        return false;
    }
    else if (!regexsdt.test(dt)){
        document.getElementById('tbdt').innerHTML='vui long nhap dung so';
        return false;
    }
    else{
        document.getElementById('tbdt').innerHTML='';
        return true;
    }
}
function ktdays() {
    let nht = new Date();
    let days = document.getElementById('days').value;
    let nn = new Date(days);
    
    if (isNaN(nn.getTime())) {
        document.getElementById('tbdays').innerHTML = 'Vui lòng nhập ngày tháng hợp lệ';
        return false;
    }
    else {
        
        let time =nn-nht;
        let day5 = Math.ceil(time /(1000 * 60 * 60 * 24 ));
        if (day5 <=3){
            document.getElementById('tbdays').innerHTML = 'Vui lòng phai nhap sau 3 ngay sau ngay hien tai' + day5;    
            return false;
        }
        else{
            document.getElementById('tbdays').innerHTML = day5;    
            return true ;
        }
       
    }
}

function kthd(){
    let hdtn = document.getElementsByName('hdtn');
    let hdtnbool= false;
    for (let i =0;i <hdtn.length;i++){
        if(hdtn[i].checked){
            hdtnbool=true;
            break;
        }
    }
    if(!hdtnbool){
        document.getElementById('tbhdtn').innerHTML='chua xac nhan';
        return false;
    }
    else{
        document.getElementById('tbhdtn').innerHTML='';
        return true;
    }
}
function button1(){
    if(ktmssv()&&ktten1()&&ktgt()&&ktdt()&&ktdays()&&kthd()){
        let days=document.getElementById('days').value;
       
        let mssv =document.getElementById('mssv').value;
        let ten1 =document.getElementById('ten1').value;
        let ten2 =document.getElementById('ten2').value;
        let gt =document.querySelector('input[name="gt"]:checked').value;
        let dt =document.getElementById('dt').value;
        let hddk =document.getElementById('hddk');
        let hddkoption = hddk.options[hddk.selectedIndex];
        let hdtn =document.getElementsByName('hdtn');
        let hdtn1=[];
        for (let i =0 ;i<hdtn.length;i++){
            if(hdtn[i].checked){
                hdtn1.push(hdtn[i].value);
                
            }
        }
    
        row = "<tr><td>"+stt+"</td><td>"+mssv+"</td><td>"+ten1+ " "+ten2+"</td><td>"+gt+"</td><td>"+dt+"</td><td>"+ days+"</td><td>"+hddkoption.text+"</td><td>"+hdtn1.join(', ')+"</td></tr>";
        document.getElementById('table1').innerHTML+=row;
        stt++;
    }
}