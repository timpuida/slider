new Vue({
  el:'#app',
  data: function(){
    return{
      currentSlide:0,
      slides:[
            {img: '1.jpg',
              id:0
            },
            {
                img: '2.jpg',
                id:1
            },
            {
                img: '3.jpg',
                id: 2
            }
          ],
    }
  },
  methods: {
    nextSlide(){
      if (this.currentSlide < this.slides.length-1) {
        this.currentSlide++
      }else {
         this.currentSlide = 0
      }
    },
    prevSlide(){
      if (this.currentSlide > 0) {
        this.currentSlide--
      }else {
        this.currentSlide = this.slides.length - 1
      }
    }
  },
})