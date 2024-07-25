<script>

export default {
  data() {
    return {
      cardHover: false
    }
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          title: 'Top Animes',
          subtitle: 'List of Top Animes on MyAnimeList',
          bgColorCard: 'bg-slate-200',
          bgColorButton: 'bg-blue-400',
          buttonText: 'View More',
          circleColor: 'bg-blue-300'
        }
      }
    }
  },

  methods: {
    updateCircle(id) {
      const circle = document.querySelector(`#${id}`)
      this.cardHover = !this.cardHover

      if (this.cardHover) {
        circle.classList.add('scale-[3]')
      } else {
        circle.classList.remove('scale-[3]')
      }
    }
  }
}
</script>

<template>
  <div
    class="p-5 rounded-lg mb-3 w-[95%] md:w-[45%] shadow-lg relative overflow-hidden z-0"
    :class="value.bgColorCard"
    @mouseenter="updateCircle(value.title === 'Top Animes' ? 'TopAnimes' : 'GenresList')"
    @mouseleave="updateCircle(value.title === 'Top Animes' ? 'TopAnimes' : 'GenresList')"
  >
    <div class="z-10 relative">
      <h1
        class="text-4xl font-bold mb-1 z-0"
        :class="[value.title === 'Top Animes' ? 'text-blue-600' : 'text-slate-100']"
      >
        {{ value.title }}
      </h1>
      <p
        class="text-md mb-5 z-0"
        :class="value.title === 'Top Animes' ? 'text-slate-600' : 'text-slate-100'"
      >
        {{ value.subtitle }}
      </p>
      <button
        :class="value.bgColorButton"
        class="text-white font-bold p-2 rounded hover:bg-blue-500 z-0"
      >
        {{ value.buttonText }}
      </button>
    </div>
    <div
      :id="value.title === 'Top Animes' ? 'TopAnimes' : 'GenresList'"
      :class="value.circleColor"
      class="absolute -bottom-10 -right-10 h-40 w-40 rounded-full transition-all duration-300 -z-1"
    ></div>
  </div>
</template>
