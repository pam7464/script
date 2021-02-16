document.getElementById('btn_dark_light').addEventListener('click',function(){
  documentSetColor.darkLight(this);
})

let documentSetColor = {
  backColor:function(bgColor){
    document.body.style.backgroundColor = bgColor;
  },
  contentColor:function(color){
    document.getElementById('content_txt').style.color = color;
  },
  listColor:function(olColor){
    document.getElementById('ol').style.color = olColor;
  },
  linkColor:function(lkColor){
    for(let cnt=0;cnt<document.getElementsByClassName('link_tag').length;cnt++){
      document.getElementsByClassName('link_tag')[cnt].style.color = lkColor;
    }
  },
  darkLight:function(self){
    if(self.value == '다크모드'){
      //다크모드
      self.value = '라이트모드';
      this.backColor('black');
      this.contentColor('white');
      this.listColor('lightblue');
      this.linkColor('lightblue');
    }else{
      // 라이트모드
      self.value = '다크모드';
      this.backColor('white');
      this.contentColor('black');
      this.listColor('black');
      this.linkColor('blue');
    }
  }
}