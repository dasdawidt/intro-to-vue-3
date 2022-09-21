app.component('review-list', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars and {{ review.recommended ? 'recommends it' : 'does not recommend it'}}
          <br/>
          "{{ review.review }}"
          <br/>
        </li>
      </ul>
    </div>
  `
  })