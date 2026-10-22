export interface Project {
  id: string;
  name: string;
  type: string;
  location: string;
  domain: string;
  image: string | null;
  description: string;
  tags: string[];
  tone: 'sage' | 'rose' | 'sand' | 'blue';
}

export const projects: Project[] = [
  {id:'scalpstudio',name:'Scalp Studio',type:'Beauty & aesthetics',location:'United Kingdom',domain:'scalpstudio.com',image:'scalpstudio',description:'A scalp micropigmentation website presenting treatments, artist information, results, and training in Glasgow.',tags:['Web design','SMP clinic'],tone:'sage'},
  {id:'folisim',name:'Folisim Australia',type:'Beauty & aesthetics',location:'Australia',domain:'www.folisim.com.au',image:'folisim',description:'A specialist clinic website with a clear introduction to scalp micropigmentation, treatment information, and consultation enquiries.',tags:['Web design','WordPress'],tone:'blue'},
  {id:'yvorence',name:'Yvorencé',type:'E-commerce',location:'Fashion & retail',domain:'yvorence.com',image:'yvorence',description:'A fashion storefront bringing clothing collections, individual products, and the brand’s editorial identity together.',tags:['Web design','Online store'],tone:'sand'},
  {id:'myph',name:'My Philippine Team',type:'Corporate',location:'Business services',domain:'myph.team',image:'myph',description:'A business services website introducing digital marketing, website development, and virtual assistance.',tags:['Web design','Business services'],tone:'blue'},
  {id:'innerwest',name:'Inner West Vision',type:'Local services',location:'Australia',domain:'innerwestvision.com.au',image:'innerwest',description:'A Sydney security services website covering CCTV, alarm systems, intercoms, and access control.',tags:['Web design','Security services'],tone:'sage'},
  {id:'paintedlady',name:'Painted Lady Studios',type:'Beauty & aesthetics',location:'United States',domain:'www.paintedladystudios.com',image:'paintedlady',description:'A beauty studio website presenting permanent makeup, medical tattooing, and beauty services in Syracuse, New York.',tags:['Web design','Beauty studio'],tone:'rose'},
  {id:'chatham',name:'Chatham Tree Services',type:'Local services',location:'Canada',domain:'chathamtreeservices.com',image:'chatham',description:'A tree care website bringing arborist services, service areas, and estimate enquiries into one place.',tags:['Web design','Tree care'],tone:'sage'},
  {id:'evoke',name:'Evoke Hair Clinic',type:'Beauty & aesthetics',location:'United Kingdom',domain:'evokescalpmicropigmentation.co.uk',image:'evoke',description:'A specialist clinic website introducing scalp micropigmentation treatments, client results, and the treatment process.',tags:['Web design','SMP clinic'],tone:'sand'},
  {id:'limitless',name:'Limitless Carpet Cleaning',type:'Local services',location:'United States',domain:'limitlesscarpetcleaning.com',image:'limitless',description:'A cleaning business website presenting carpet and floor care services across California’s Central Coast.',tags:['Web design','Cleaning services'],tone:'blue'},
  {id:'elizabeth',name:'Elizabeth Drain Service',type:'Local services',location:'United States',domain:'elizabethdrainservice.com',image:'elizabeth',description:'A local drain service website with service information and a direct route to contact the business.',tags:['Web design','Drain services'],tone:'sand'},
  {id:'fortlee',name:'Fort Lee Garage Doors',type:'Local services',location:'United States',domain:'fortleegaragedoors.com',image:'fortlee',description:'A garage door services website introducing repair, replacement, and maintenance in Fort Lee, New Jersey.',tags:['Web design','Garage door services'],tone:'sage'},
  {id:'jerseycitypest',name:'Jersey City NJ Pest Control',type:'Local services',location:'United States',domain:'jerseycitynjpestcontrol.com',image:'jerseycitypest',description:'A local pest control website presenting the business and its services in Jersey City, New Jersey.',tags:['Web design','Pest control'],tone:'blue'},
  {id:'jerseycityexterminators',name:'Jersey City Exterminators',type:'Local services',location:'United States',domain:'jerseycityexterminators.com',image:'jerseycityexterminators',description:'A local exterminator website bringing pest service information and contact options together.',tags:['Web design','Pest control'],tone:'sand'},
  {id:'edison',name:'Edison Stucco',type:'Local services',location:'United States',domain:'edisonstucco.com',image:'edison',description:'A contractor website presenting stucco, masonry, restoration, and exterior finishing services.',tags:['Web design','Contractor website'],tone:'sage'},
  {id:'yonkers',name:'Yonkers NY Tinting',type:'Local services',location:'United States',domain:'yonkersnytinting.com',image:'yonkers',description:'A local window tinting website introducing the business and giving visitors a straightforward way to get in touch.',tags:['Web design','Window tinting'],tone:'blue'},
  {id:'bronx',name:'Bronx Window Tinting',type:'Local services',location:'United States',domain:'bronxwindowtinting.com',image:'bronx',description:'A tinting and detailing website covering automotive, residential, and commercial services in the Bronx.',tags:['Web design','Automotive services'],tone:'sand'},
  {id:'inked',name:'Inked Beauty Bar',type:'Beauty & aesthetics',location:'United States',domain:'inkedbeautybar.net',image:'inked',description:'A distinctive online presence for permanent makeup, treatments, and training, with the brand’s personality at the forefront.',tags:['Web design','Responsive layouts'],tone:'rose'},
  {id:'wolfcrete',name:'Wolfcrete',type:'Local services',location:'United States',domain:'wolfcreteky.com',image:'wolfcrete',description:'A service business website that brings concrete flooring expertise, service information, and quote enquiries together.',tags:['WordPress','Service website'],tone:'sand'},
  {id:'go',name:'GO Destination Services',type:'Corporate',location:'United States',domain:'godestinationservices.com',image:'go',description:'A corporate website introducing relocation and destination services through a clear, professional browsing experience.',tags:['Web design','Corporate website'],tone:'blue'},
];

export const filters = ['All projects','Beauty & aesthetics','Local services','Corporate','E-commerce'];
export const pageSize = 6;
