let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":2.6864, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3675, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3189, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1585, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1905, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.381, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.7776, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.9777, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.6399, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.16, "optimal":"yes"} ]}; 
let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6299, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5743, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0507, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1014, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4729, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2601, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1608, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.052000000000000005, "optimal":"yes"} ]}; 
let dataV={"nodes": [
{"name":"LDPE"},
{"name":"Households"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7147, "optimal":"yes"} ]}; 
let dataV={"nodes": [
{"name":"Paper"},
{"name":"Households"},
{"name": "Losses"}
],
 "links": [
 {"source":"Paper", "target":"Households", "value":10.7722, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":10.7722, "optimal":"yes"} ]}; 
