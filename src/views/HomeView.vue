<template>
  <div>
    <HeroSection />
    <ProgramSection />
    <ReasonSection />
  </div>
</template>

<script>

import HeroSection from '../components/HeroSection.vue'
import ProgramSection from '../components/ProgramSection.vue'
import ReasonSection from '../components/ReasonSection.vue'

export default {
  
  components: { 
    HeroSection,
    ProgramSection,
    ReasonSection
  }
  
}
</script>
