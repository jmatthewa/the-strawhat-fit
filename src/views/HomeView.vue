<template>
  <div>
    

    <HeroSection />

    <ProgramSection />
    <ReasonSection />
    <PlansSection />

    <TestimonialSection />
    <JoinSection />
    <FooterSection />

    
  </div>
</template>

<script>

import HeroSection from '../components/HeroSection.vue'
import ProgramSection from '../components/ProgramSection.vue'
import ReasonSection from '../components/ReasonSection.vue'
import PlansSection from '../components/PlansSection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import JoinSection from '../components/JoinSection.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  
  components: { 
    HeroSection,
    ProgramSection,
    ReasonSection,
    PlansSection,
    TestimonialSection,
    JoinSection,
    FooterSection
  }

}
</script>


