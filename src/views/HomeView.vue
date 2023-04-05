<template>
  <div>
    <HeroSection />

    <ProgramSection />
    <ReasonSection />
    <PlansSection />
    
    <TestimonialSection />

  </div>
</template>

<script>

import HeroSection from '../components/HeroSection.vue'
import ProgramSection from '../components/ProgramSection.vue'
import ReasonSection from '../components/ReasonSection.vue'
import PlansSection from '../components/PlansSection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'

export default {
  
  components: { 
    HeroSection,
    ProgramSection,
    ReasonSection,
    PlansSection,
    TestimonialSection
  }
  
}
</script>
