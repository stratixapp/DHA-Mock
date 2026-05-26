// PHASE 1: Anatomy & Physiology (300 Questions - Shuffled & Expanded)
// Reference: Tortora & Derrickson - Principles of Anatomy & Physiology, NCLEX-RN Saunders, Guyton & Hall Medical Physiology

const phase1 = {
  phase: 1,
  title: "Anatomy & Physiology",
  icon: "🫀",
  color: "#e74c3c",
  questions: [
    {
      id: "p1q1",
      question: "During ventricular excitation, which structural component coordinates the delayed contraction between the atria and ventricles, and what dictates its intrinsic rhythmicity?",
      options: [
        "Bachmann's bundle; 40–50 bpm",
        "Atrioventricular (AV) node; 40–60 bpm",
        "Purkinje fibers; 15–40 bpm",
        "Sinoatrial (SA) node; 60–100 bpm"
      ],
      answer: 1,
      explanation: "The AV node delays the electrical impulse by approximately 0.12 seconds to allow complete atrial emptying before ventricular contraction. If the SA node fails, the AV node assumes pacemaking at its intrinsic rate of 40–60 bpm."
    },
    {
      id: "p1q2",
      question: "Which cell type in the gastric pits is directly stimulated by Gastrin, Histamine, and Acetylcholine to activate the H+/K+ ATPase pump?",
      options: ["Chief cells", "Parietal cells", "G cells", "Mucous neck cells"],
      answer: 1,
      explanation: "Parietal (oxyntic) cells secrete hydrochloric acid (HCl) and intrinsic factor. They possess receptors for gastrin, histamine (H2), and acetylcholine (M3), which upregulate the H+/K+ ATPase proton pump."
    },
    {
      id: "p1q3",
      question: "A patient with an acoustic neuroma compression at the internal acoustic meatus will most likely demonstrate a loss of function in which cranial nerves?",
      options: ["CN V and CN VII", "CN VII and CN VIII", "CN IX and CN X", "CN VI and CN VII"],
      answer: 1,
      explanation: "The internal acoustic meatus transmits both the Facial nerve (CN VII) and the Vestibulocochlear nerve (CN VIII). Compression here yields ipsilateral facial paralysis and sensorineural hearing loss/vertigo."
    },
    {
      id: "p1q4",
      question: "Normal adult respiratory rate is:",
      options: ["8–12 breaths/min", "12–20 breaths/min", "20–24 breaths/min", "24–30 breaths/min"],
      answer: 1,
      explanation: "Normal adult respiratory rate is 12–20 breaths per minute. Rates below 12 (bradypnea) or above 20 (tachypnea) may indicate pathology."
    },
    {
      id: "p1q5",
      question: "What is the primary immunological mechanism behind the hemolytic transfusion reaction observed when an O- person receives AB+ packed red blood cells?",
      options: [
        "Type I hypersensitivity mediated by IgE binding to mast cells",
        "Type II cytotoxic hypersensitivity where host IgM/IgG antibodies fix complement on donor RBCs",
        "Type III immune complex deposition in renal glomeruli",
        "Type IV delayed-type cell-mediated T-cell destruction"
      ],
      answer: 1,
      explanation: "Type II hypersensitivity involves pre-existing circulating isohemagglutinins (Anti-A and Anti-B IgM/IgG) in the Type O recipient attacking the foreign A and B antigens on the donor RBCs, activating the complement cascade and causing intravascular hemolysis."
    },
    {
      id: "p1q6",
      question: "Which specific zones of the adrenal cortex are primarily regulated by Angiotensin II and ACTH respectively?",
      options: [
        "Zona fasciculata and Zona reticularis",
        "Zona glomerulosa and Zona fasciculata",
        "Zona reticularis and Zona glomerulosa",
        "Adrenal medulla and Zona glomerulosa"
      ],
      answer: 1,
      explanation: "The outer Zona glomerulosa produces aldosterone and is primarily controlled by the renin-angiotensin-aldosterone system (RAAS) and extracellular potassium. The middle Zona fasciculata produces cortisol and is regulated by pituitary ACTH."
    },
    {
      id: "p1q7",
      question: "Which skeletal muscle fiber type is characterized by high myoglobin content, high mitochondrial density, and a reliance on oxidative phosphorylation for sustained low-intensity contractions?",
      options: ["Type IIb fibers", "Type IIa fibers", "Type I fibers", "White fast-twitch fibers"],
      answer: 2,
      explanation: "Type I (slow oxidative) fibers are red due to high myoglobin content. They contain abundant mitochondria and rely on aerobic metabolism, making them highly resistant to fatigue (e.g., postural muscles)."
    },
    {
      id: "p1q8",
      question: "The hypoglossal nerve (CN XII) controls:",
      options: ["Facial expression", "Tongue movement", "Shoulder shrugging", "Eye movement"],
      answer: 1,
      explanation: "CN XII (hypoglossal) controls tongue movements essential for speech, chewing, and swallowing. Damage causes tongue deviation toward the affected side."
    },
    {
      id: "p1q9",
      question: "Which mechanism prevents polyspermy by causing a rapid wave of depolarization across the oocyte plasma membrane immediately upon sperm binding?",
      options: [
        "The slow block (cortical reaction)",
        "The fast block (acrosomal reaction)",
        "The fast block (electrical depolarization via Na+ influx)",
        "The zona reaction via ZP3 inactivation"
      ],
      answer: 2,
      explanation: "The fast block to polyspermy occurs within seconds of sperm binding when sodium channels open, causing an influx of Na+ that depolarizes the egg membrane from -70mV to +20mV, preventing further sperm fusion."
    },
    {
      id: "p1q10",
      question: "Which unique feature of the fetal circulatory system diverts blood from the right atrium directly into the left atrium, bypassing the non-functional lungs?",
      options: ["Ductus arteriosus", "Ductus venosus", "Foramen ovale", "Umbilical artery"],
      answer: 2,
      explanation: "The foramen ovale is an anatomical shunt in the interatrial septum that allows highly oxygenated placental blood from the inferior vena cava to pass from the right to left atrium, avoiding the pulmonary circuit."
    },
    {
      id: "p1q11",
      question: "What is the primary driver of the 'chloride shift' across the erythrocyte membrane during carbon dioxide transport in systemic capillaries?",
      options: [
        "The active transport of CO2 by ATP-driven pumps",
        "The passive exchange of bicarbonate (HCO3-) out of the cell for chloride (Cl-) into the cell via AE1",
        "The movement of hydrogen ions out of the cell",
        "The direct binding of chloride to deoxygenated hemoglobin"
      ],
      answer: 1,
      explanation: "As CO2 enters red blood cells, carbonic anhydrase converts it to carbonic acid, which dissociates into H+ and HCO3-. The accumulation of HCO3- drives its facilitated exchange out of the cell for Cl- via the Anion Exchanger 1 (AE1/Band 3) protein to maintain electrical neutrality."
    },
    {
      id: "p1q12",
      question: "Which segment of the nephron serves as the primary target for loop diuretics, and what specific transporter does it inhibit?",
      options: [
        "Proximal convoluted tubule; Na+/H+ antiporter",
        "Thick ascending limb of the loop of Henle; Na+/K+/2Cl- cotransporter (NKCC2)",
        "Distal convoluted tubule; Na+/Cl- cotransporter (NCC)",
        "Cortical collecting duct; Epithelial sodium channel (ENaC)"
      ],
      answer: 1,
      explanation: "Loop diuretics (like furosemide) act exclusively on the thick ascending limb of the loop of Henle by reversibly binding to and inhibiting the NKCC2 symporter, disrupting the countercurrent medullary gradient."
    },
    {
      id: "p1q13",
      question: "Which clotting factor that is deficient in Hemophilia A is:",
      options: ["Factor VII", "Factor VIII", "Factor IX", "Factor X"],
      answer: 1,
      explanation: "Hemophilia A is the most common severe bleeding disorder, caused by deficiency of Factor VIII. Hemophilia B involves Factor IX deficiency."
    },
    {
      id: "p1q14",
      question: "What specific physiological shift causes a rightward movement of the oxyhemoglobin dissociation curve, facilitating enhanced oxygen unloading at tissue sites?",
      options: [
        "Decreased pCO2, decreased temperature, and increased pH",
        "Increased pCO2, increased 2,3-BPG, increased temperature, and decreased pH",
        "Decreased 2,3-BPG and decreased H+ concentration",
        "Fetal hemoglobin expression"
      ],
      answer: 1,
      explanation: "A rightward shift (the Bohr effect) reduces hemoglobin's affinity for oxygen, making it easier to unload oxygen to metabolically active tissues. This shift is driven by stressors: high pCO2, high temperature, high 2,3-BPG, and high H+ ions (low pH)."
    },
    {
      id: "p1q15",
      question: "Which intracranial dural venous sinus directly drains into the internal jugular vein at the jugular foramen?",
      options: ["Superior sagittal sinus", "Cavernous sinus", "Sigmoid sinus", "Straight sinus"],
      answer: 2,
      explanation: "The sigmoid sinuses receive blood from the transverse sinuses and track along an S-shaped path down to the jugular foramen, where they directly transform into the internal jugular veins."
    },
    {
      id: "p1q16",
      question: "The structural unit of compact bone is called:",
      options: ["Osteocyte", "Osteon (Haversian system)", "Trabecula", "Periosteum"],
      answer: 1,
      explanation: "The osteon (Haversian system) is the structural unit of compact bone, consisting of concentric rings of bone matrix around a central Haversian canal containing blood vessels."
    },
    {
      id: "p1q17",
      question: "In the enteric nervous system, which plexus regulates gastrointestinal motility and where is it anatomically positioned?",
      options: [
        "Meissner's (Submucosal) plexus; within the muscularis mucosae",
        "Auerbach's (Myenteric) plexus; between the inner circular and outer longitudinal muscle layers",
        "Celiac plexus; surrounding the abdominal aorta",
        "Hypogastric plexus; within the pelvic floor lamina propria"
      ],
      answer: 1,
      explanation: "Auerbach's (myenteric) plexus is located within the muscularis externa layer and primarily coordinates GI tract peristalsis and motility, while Meissner's plexus regulates secretions and blood flow."
    },
    {
      id: "p1q18",
      question: "Normal glomerular filtration rate (GFR) in adults is approximately:",
      options: ["60 mL/min", "90 mL/min", "125 mL/min", "150 mL/min"],
      answer: 2,
      explanation: "Normal GFR is approximately 125 mL/min (180 L/day). A GFR below 60 mL/min indicates chronic kidney disease."
    },
    {
      id: "p1q19",
      question: "Which embryological pharyngeal arch derivatives constitute the muscles of mastication and are innervated by the mandibular branch of the trigeminal nerve (CN V3)?",
      options: ["First pharyngeal arch", "Second pharyngeal arch", "Third pharyngeal arch", "Fourth pharyngeal arch"],
      answer: 0,
      explanation: "The first pharyngeal (mandibular) arch develops into the muscles of mastication (masseter, temporalis, pterygoids) along with the maxilla and mandible, all innervated by CN V3. The second arch gives rise to the muscles of facial expression (CN VII)."
    },
    {
      id: "p1q20",
      question: "Normal adult body temperature is:",
      options: ["35.5–36.0°C", "36.1–37.2°C", "37.5–38.0°C", "38.0–38.5°C"],
      answer: 1,
      explanation: "Normal core body temperature ranges from 36.1°C to 37.2°C (97°F to 99°F). Fever is defined as temperature above 38°C (100.4°F)."
    },
    {
      id: "p1q21",
      question: "The optic chiasm is where:",
      options: ["The optic nerve enters the eye", "The two optic nerves partially cross", "Vitreous humor is produced", "The retina converts light to signals"],
      answer: 1,
      explanation: "At the optic chiasm, nasal fibers from each eye cross to the opposite side, while temporal fibers remain ipsilateral, enabling binocular vision processing."
    },
    {
      id: "p1q22",
      question: "Which physiological mechanism explains why rapid corrections of chronic hyponatremia can trigger Central Pontine Myelinolysis (Osmotic Demyelination Syndrome)?",
      options: [
        "Rapid brain swelling from sudden intracellular water influx",
        "A sudden movement of water out of astrocytes into the hypertonic extracellular space, tearing myelin sheaths",
        "Massive influx of calcium causing excitotoxic neuronal death",
        "Ischemic vasospasm of the basilar artery"
      ],
      answer: 1,
      explanation: "In chronic hyponatremia, brain cells shed organic osmolytes to minimize swelling. If hypertonic saline or rapid sodium correction occurs, the extracellular fluid becomes hypertonic relative to the adapted brain cells, causing water to rapidly exit neurons and astrocytes, destroying myelin-producing oligodendrocytes."
    },
    {
      id: "p1q23",
      question: "The skeletal muscle regulatory protein that directly binds to calcium ions to initiate cross-bridge cycling is:",
      options: ["Tropomyosin", "Troponin C", "Troponin I", "Actin"],
      answer: 1,
      explanation: "Troponin is a three-polypeptide complex. Troponin C binds specifically to Ca2+ ions, triggering a conformational shift that pulls tropomyosin away from the myosin-binding sites on actin filaments."
    },
    {
      id: "p1q24",
      question: "What structural mechanism prevents the retrograde flow of sperm into the urinary bladder during male ejaculation?",
      options: [
        "Contraction of the external urethral sphincter",
        "Sympathetic-mediated contraction of the internal urethral sphincter at the bladder neck",
        "Relaxation of the bulbospongiosus muscle",
        "Compression of the prostatic urethra by the pelvic diaphragm"
      ],
      answer: 1,
      explanation: "During emission and ejaculation, sympathetic fibers (L1–L2) cause the internal urethral sphincter to contract firmly, ensuring semen moves forward down the urethra and preventing retrograde ejaculation into the bladder."
    },
    {
      id: "p1q25",
      question: "The somatic nervous system controls:",
      options: ["Involuntary functions like digestion", "Voluntary skeletal muscle movements", "Heart rate and gland secretion", "Autonomic responses"],
      answer: 1,
      explanation: "The somatic nervous system controls voluntary movements of skeletal muscles and transmits sensory information to the CNS. It is under conscious control."
    },
    {
      id: "p1q26",
      question: "Which cell type downregulates its surface expression of MHC Class I proteins during viral evasion, rendering it targetable by Natural Killer (NK) cells via the 'missing self' hypothesis?",
      options: ["Cytotoxic T lymphocytes", "Infected somatic host cells", "B cells", "Helper T cells"],
      answer: 1,
      explanation: "Many viruses downregulate MHC Class I expression to escape detection by CD8+ T cells. NK cells scan for cells lacking normal MHC Class I molecules ('missing self') using killer-cell immunoglobulin-like receptors (KIRs) to initiate apoptosis in these infected cells."
    },
    {
      id: "p1q27",
      question: "Which primary enzyme is down-regulated or bypassed during gluconeogenesis to overcome the irreversible step catalyzed by Phosphofructokinase-1 (PFK-1) in glycolysis?",
      options: [
        "Pyruvate carboxylase",
        "Phosphoenolpyruvate carboxykinase (PEPCK)",
        "Fructose-1,6-bisphosphatase",
        "Glucose-6-phosphatase"
      ],
      answer: 2,
      explanation: "PFK-1 catalyzes an irreversible step in glycolysis. To synthesize glucose during gluconeogenesis, the liver utilizes Fructose-1,6-bisphosphatase to bypass this barrier by removing a phosphate group from fructose-1,6-bisphosphate."
    },
    {
      id: "p1q28",
      question: "Which statement accurately delineates the physiological cause of the 'J wave' or Osborn wave seen on an electrocardiogram?",
      options: [
        "Acute transmural myocardial infarction",
        "Severe hypothermia, distorting the late ventricular depolarization/early repolarization phase",
        "Hyperkalemia-induced widening of the QRS complex",
        "Digitalis toxicity with shortened QT intervals"
      ],
      answer: 1,
      explanation: "An Osborn (J) wave is a positive deflection at the junction of the QRS complex and the ST segment. It is most frequently observed in patients experiencing profound hypothermia (<32°C/89.6°F) or severe hypercalcemia."
    },
    {
      id: "p1q29",
      question: "Which structural element forms the main filtration barrier against macromolecular proteins like albumin in the renal corpuscle?",
      options: [
        "The fenestrated endothelium of glomerular capillaries",
        "The negative charge of the glomerular basement membrane (heparan sulfate) and podocyte slit diaphragms",
        "The macula densa cells of the juxtaglomerular apparatus",
        "The mesangial matrix proteins"
      ],
      answer: 1,
      explanation: "The filtration barrier depends on both size and electrical charge. The basement membrane contains negatively charged polyanionic proteins (heparan sulfate) that repel negatively charged plasma proteins like albumin, despite their small size."
    },
    {
      id: "p1q30",
      question: "What is the primary action of Calcitonin on bone and mineral metabolism, and which cells secrete it?",
      options: [
        "Stimulates osteoclasts to resorptive breakdown; Parathyroid chief cells",
        "Inhibits osteoclastic bone resorption and increases renal calcium excretion; Parafollicular (C) cells of the thyroid",
        "Enhances intestinal calcium absorption; Osteoblasts",
        "Stimulates vitamin D activation; Kidney proximal tubules"
      ],
      answer: 1,
      explanation: "Calcitonin is synthesized and secreted by the parafollicular C cells of the thyroid gland. It opposes parathyroid hormone (PTH) by reducing serum calcium levels, primarily through the direct inhibition of osteoclasts."
    },
    {
      id: "p1q31",
      question: "The primary site of gas exchange in the lungs is:",
      options: ["Bronchi", "Bronchioles", "Alveoli", "Trachea"],
      answer: 2,
      explanation: "Alveoli are tiny air sacs surrounded by capillaries where oxygen diffuses into blood and CO2 diffuses out. Their thin walls and large surface area facilitate efficient gas exchange."
    },
    {
      id: "p1q32",
      question: "Which cell type within the lymph node cortex organizes the selection of high-affinity B cells inside germinal centers through antigen presentation via Fc receptors?",
      options: ["Follicular Dendritic Cells (FDCs)", "Interdigitating Dendritic Cells", "Macrophage foam cells", "Cortical epithelial cells"],
      answer: 0,
      explanation: "Follicular Dendritic Cells (FDCs) are specialized cells located in the B-cell follicles of secondary lymphoid tissues. They capture and hold intact opsonized antigens on their surface for long periods, enabling B cells to undergo affinity maturation."
    },
    {
      id: "p1q33",
      question: "The primary function of the large intestine is:",
      options: ["Protein digestion", "Fat emulsification", "Nutrient absorption", "Water reabsorption and feces formation"],
      answer: 3,
      explanation: "The large intestine reabsorbs water and electrolytes from indigestible material, and forms, stores, and eliminates feces."
    },
    {
      id: "p1q34",
      question: "Which specialized mechanoreceptors adapt slowly to touch and signal static continuous pressure applied to the skin?",
      options: ["Meissner's corpuscles", "Pacinian corpuscles", "Merkel discs and Ruffini endings", "Free nerve endings"],
      answer: 2,
      explanation: "Merkel discs and Ruffini endings are slow-adapting (SA) mechanoreceptors that fire continuously to steady pressure and skin stretch. Meissner's and Pacinian corpuscles are fast-adapting (FA) and detect vibration/vocal flutter."
    },
    {
      id: "p1q35",
      question: "How does the countercurrent multiplier mechanism in the loop of Henle establish a high medullary interstitial osmolarity?",
      options: [
        "By pumping water actively out of the ascending limb",
        "By the active transport of NaCl from the thick ascending limb combined with low water permeability in that same segment",
        "By the passive diffusion of urea into the proximal tubule",
        "By the counter-transport of glucose and sodium in the descending limb"
      ],
      answer: 1,
      explanation: "The thick ascending limb actively pumps out Na+, K+, and Cl- via the NKCC2 transporter but remains completely impermeable to water. This drives solutes into the renal medullary interstitium, pulling water osmotically out of the water-permeable descending limb."
    },
    {
      id: "p1q36",
      question: "Normal adult blood pressure is:",
      options: ["100/60 mmHg", "120/80 mmHg", "140/90 mmHg", "130/85 mmHg"],
      answer: 1,
      explanation: "Normal adult blood pressure is less than 120/80 mmHg. 120–129/<80 is elevated; 130–139/80–89 is Stage 1 hypertension."
    },
    {
      id: "p1q37",
      question: "The normal serum calcium level is:",
      options: ["4.5–5.5 mg/dL", "6.0–8.0 mg/dL", "8.5–10.5 mg/dL", "11.0–13.0 mg/dL"],
      answer: 2,
      explanation: "Normal serum calcium is 8.5–10.5 mg/dL. Hypocalcemia causes tetany and Trousseau's/Chvostek's signs; hypercalcemia causes muscle weakness and cardiac effects."
    },
    {
      id: "p1q38",
      question: "Which unique molecule acts as the primary intracellular calcium sensor in smooth muscle tissue to trigger contraction via myosin light chain phosphorylation?",
      options: ["Troponin C", "Calmodulin", "Caldesmon", "Tropomyosin"],
      answer: 1,
      explanation: "Smooth muscle cells lack troponin. When intracellular Ca2+ increases, it binds to calmodulin. This calcium-calmodulin complex then activates Myosin Light Chain Kinase (MLCK), which phosphorylates myosin to initiate contraction."
    },
    {
      id: "p1q39",
      question: "Which unique cranial nerve carries parasympathetic preganglionic fibers destined to synapse in the ciliary ganglion for pupillary constriction?",
      options: ["CN II (Optic)", "CN III (Oculomotor)", "CN VII (Facial)", "CN V (Trigeminal)"],
      answer: 1,
      explanation: "The Oculomotor nerve (CN III) carries preganglionic parasympathetic fibers originating from the Edinger-Westphal nucleus to the ciliary ganglion. Postganglionic fibers travel via short ciliary nerves to contract the pupillary sphincter muscle."
    },
    {
      id: "p1q40",
      question: "Which ligament restricts hyperextension of the knee joint and prevents forward displacement of the tibia relative to the femur?",
      options: [
        "Posterior cruciate ligament (PCL)",
        "Anterior cruciate ligament (ACL)",
        "Medial collateral ligament (MCL)",
        "Lateral collateral ligament (LCL)"
      ],
      answer: 1,
      explanation: "The ACL prevents excessive anterior translation of the tibia on the femur and prevents hyperextension. The PCL prevents posterior displacement of the tibia."
    },
    {
      id: "p1q41",
      question: "Normal serum potassium level is:",
      options: ["2.5–3.0 mEq/L", "3.5–5.0 mEq/L", "5.5–7.0 mEq/L", "1.5–2.5 mEq/L"],
      answer: 1,
      explanation: "Normal serum potassium is 3.5–5.0 mEq/L. Hypokalemia (<3.5) and hyperkalemia (>5.0) can both cause dangerous cardiac arrhythmias."
    },
    {
      id: "p1q42",
      question: "The external acoustic meatus is lined by stratified squamous epithelium and terminates at which structure?",
      options: ["The oval window", "The tympanic membrane", "The round window", "The malleus"],
      answer: 1,
      explanation: "The external acoustic meatus extends medially from the pinna to the tympanic membrane (eardrum), which separates the external ear from the air-filled middle ear cavity."
    },
    {
      id: "p1q43",
      question: "Which mechanism describes how the heart increases its stroke volume in response to an increase in end-diastolic volume (venous return)?",
      options: [
        "The Bowditch effect",
        "The Anrep effect",
        "The Frank-Starling law of the heart",
        "The Bainbridge reflex"
      ],
      answer: 2,
      explanation: "The Frank-Starling law establishes that an increased volume of blood stretching the ventricular myocardial fibers during diastole optimizes actin-myosin cross-bridge alignment, causing a more forceful contraction during systole."
    },
    {
      id: "p1q44",
      question: "Which condition or compensatory phase occurs when a patient develops hyperventilation secondary to panic, causing a rapid reduction in PaCO2 levels?",
      options: ["Respiratory acidosis", "Metabolic alkalosis", "Respiratory alkalosis", "Metabolic acidosis"],
      answer: 2,
      explanation: "Hyperventilation increases the rate of CO2 clearance from the lungs, dropping arterial PaCO2 below 35 mmHg. This lowers carbonic acid concentration and raises arterial pH, resulting in acute respiratory alkalosis."
    },
    {
      id: "p1q45",
      question: "Which type of immunity is provided by breast milk?",
      options: ["Cell-mediated immunity", "Active natural immunity", "Passive natural immunity", "Artificial active immunity"],
      answer: 2,
      explanation: "Breast milk provides passive natural immunity by transferring maternal IgA antibodies to the infant. The infant does not produce the antibodies; they are received passively."
    },
    {
      id: "p1q46",
      question: "Which enzyme is deficient in classic galactosemia, causing an accumulation of toxic metabolites that leads to infantile cataracts and hepatomegaly?",
      options: [
        "Galactokinase",
        "Galactose-1-phosphate uridyltransferase (GALT)",
        "UDP-glucose-4-epimerase",
        "Phosphoglucomutase"
      ],
      answer: 1,
      explanation: "Classic galactosemia stems from a deficiency in GALT. Galactose-1-phosphate builds up in tissues, causing profound toxicity in the liver, brain, and the lenses of the eyes."
    },
    {
      id: "p1q47",
      question: "How many lobes does the right lung have?",
      options: ["2", "3", "4", "5"],
      answer: 1,
      explanation: "The right lung has 3 lobes (upper, middle, lower). The left lung has only 2 lobes to accommodate the heart. The right lung is also larger and heavier."
    },
    {
      id: "p1q48",
      question: "Which cell type in the liver resides within the space of Disse and is responsible for Vitamin A storage, but transforms into myofibroblasts to drive hepatic fibrosis during chronic cirrhosis?",
      options: ["Kupffer cells", "Hepatic Stellate (Ito) cells", "Hepatocytes", "Sinusoidal endothelial cells"],
      answer: 1,
      explanation: "Hepatic stellate cells (Ito cells) store quiescent lipid droplets rich in Vitamin A. In chronic injury, they get activated by inflammatory cytokines, transdifferentiating into collagen-secreting myofibroblasts that cause cirrhosis."
    },
    {
      id: "p1q49",
      question: "The myelin sheath in the peripheral nervous system is formed by:",
      options: ["Astrocytes", "Microglia", "Oligodendrocytes", "Schwann cells"],
      answer: 3,
      explanation: "Schwann cells form the myelin sheath around peripheral nerve axons. In the CNS, oligodendrocytes perform this role. Myelin insulates axons and speeds conduction."
    },
    {
      id: "p1q50",
      question: "Which chemical factor serves as the strongest, most direct physiological stimulator of central chemoreceptors to upregulate ventilation?",
      options: [
        "Decreased arterial PO2 below 60 mmHg",
        "Hydrogen ions (H+) directly passing through the blood-brain barrier",
        "Carbon dioxide (CO2) diffusing across the blood-brain barrier and forming H+ ions in the cerebrospinal fluid",
        "Elevated blood lactic acid concentration"
      ],
      answer: 2,
      explanation: "Central chemoreceptors in the medulla are sensitive to local H+ concentrations. While H+ in blood cannot pass the blood-brain barrier, lipid-soluble CO2 easily diffuses into CSF where carbonic anhydrase splits it into H+ and HCO3-, triggering the chemoreceptors."
    },
    {
      id: "p1q51",
      question: "The normal serum glucose range (fasting) is:",
      options: ["50–70 mg/dL", "70–99 mg/dL", "100–120 mg/dL", "120–140 mg/dL"],
      answer: 1,
      explanation: "Normal fasting blood glucose is 70–99 mg/dL. 100–125 mg/dL is prediabetes; ≥126 mg/dL on two occasions is diagnostic of diabetes mellitus."
    },
    {
      id: "p1q52",
      question: "Which muscle is a primary muscle of mastication and acts to depress the mandible (open the jaw)?",
      options: ["Masseter", "Temporalis", "Medial pterygoid", "Lateral pterygoid"],
      answer: 3,
      explanation: "The lateral pterygoid muscle is unique among the muscles of mastication because it acts to depress and protract the mandible to open the mouth. The masseter, temporalis, and medial pterygoid all elevate (close) the jaw."
    },
    {
      id: "p1q53",
      question: "Which clinical marker or autoantibody is most characteristically elevated in patients with Graves' disease, causing hyperthyroidism?",
      options: [
        "Anti-thyroid peroxidase (TPO) antibodies",
        "Thyroid-stimulating immunoglobulin (TSI)",
        "Anti-thyroglobulin antibodies",
        "Elevated thyroid-binding globulin (TBG)"
      ],
      answer: 1,
      explanation: "Graves' disease is an autoimmune condition caused by Thyroid-Stimulating Immunoglobulins (TSIs), which act as type II hypersensitivity autoantibodies that bind to and chronically activate the TSH receptor on thyroid follicular cells."
    },
    {
      id: "p1q54",
      question: "The sinoatrial (SA) node is located in which part of the heart?",
      options: ["Left ventricle", "Right atrium", "Left atrium", "Interventricular septum"],
      answer: 1,
      explanation: "The SA node is located in the upper right atrium near the opening of the superior vena cava. It is the heart's natural pacemaker, generating impulses at 60–100 bpm."
    },
    {
      id: "p1q55",
      question: "Which precise step occurs during Phase 0 of a ventricular myocardial action potential?",
      options: [
        "Rapid opening of voltage-gated L-type calcium channels",
        "Inward influx of sodium through fast voltage-gated Na+ channels",
        "Outward movement of potassium through transient outward channels",
        "Closure of all leaky potassium channels"
      ],
      answer: 1,
      explanation: "Phase 0 represents rapid depolarization. When a myocardial cell is excited to its threshold potential, fast voltage-gated sodium channels snap open, driving a massive, rapid influx of Na+ into the cell."
    },
    {
      id: "p1q56",
      question: "What structural adaptation allows skeletal muscle cells to rapidly propagate an action potential from the outer sarcolemma deep into the myofibrils to trigger synchronous calcium release?",
      options: ["Sarcoplasmic reticulum cisternae", "Transverse (T) tubules", "Intercalated discs", "Desmosomes"],
      answer: 1,
      explanation: "Transverse (T) tubules are periodic invaginations of the sarcolemma that penetrate deep into the muscle fiber, bringing electrical depolarization close to the terminal cisternae of the sarcoplasmic reticulum."
    },
    {
      id: "p1q57",
      question: "What is the primary action of antidiuretic hormone (ADH) on the collecting duct epithelium to conserve water?",
      options: [
        "Upregulation of the Na+/Cl- cotransporter via transcription factors",
        "Insertion of Aquaporin-2 water channels into the apical membrane via V2 receptor activation",
        "Inhibition of urea recycling in the inner medullary collecting duct",
        "Direct active pumping of water into the vasa recta"
      ],
      answer: 1,
      explanation: "ADH binds to G-protein coupled V2 receptors on the basolateral membrane of principal cells, increasing cAMP. This triggers the exocytosis of vesicles containing Aquaporin-2 water channels into the luminal (apical) membrane, drastically increasing water permeability."
    },
    {
      id: "p1q58",
      question: "The appendix is attached to which part of the large intestine?",
      options: ["Sigmoid colon", "Ascending colon", "Cecum", "Transverse colon"],
      answer: 2,
      explanation: "The vermiform appendix is attached to the cecum, the first part of the large intestine in the right iliac fossa. Inflammation causes appendicitis."
    },
    {
      id: "p1q59",
      question: "What cellular adaptation allows cardiac muscle cells to structurally withstand mechanical stress and electrically behave as a functional syncytium?",
      options: ["Tight junctions and gap junctions", "Intercalated discs containing desmosomes and gap junctions", "Neuromuscular junctions", "Sarcoplasmic reticulum triads"],
      answer: 1,
      explanation: "Intercalated discs anchor cardiac myocytes together. Desmosomes provide structural stability by preventing cells from pulling apart during contraction, while gap junctions allow rapid, low-resistance ionic diffusion for synchronized electrical conduction."
    },
    {
      id: "p1q60",
      question: "The resting membrane potential of a neuron is approximately:",
      options: ["-40 mV", "-70 mV", "-90 mV", "+30 mV"],
      answer: 1,
      explanation: "The resting membrane potential of a neuron is approximately -70 mV, maintained by the sodium-potassium pump and selective membrane permeability."
    },
    {
      id: "p1q61",
      question: "Which chemical component of surfactant prevents alveolar collapse at the end of expiration by drastically lowering alveolar surface tension?",
      options: [
        "Sphingomyelin",
        "Dipalmitoylphosphatidylcholine (DPPC)",
        "Phosphatidylglycerol",
        "Surfactant Protein A"
      ],
      answer: 1,
      explanation: "Dipalmitoylphosphatidylcholine (DPPC), also called lecithin, is the principal phospholipid component of pulmonary surfactant. It disrupts the cohesive hydrogen bonding of water molecules at the air-liquid interface, reducing surface tension."
    },
    {
      id: "p1q62",
      question: "What structural mechanism describes how local hypercapnia and hypoxia affect the smooth muscle of systemic vs. pulmonary vasculature?",
      options: [
        "Vasodilation in both circuits",
        "Vasoconstriction in both circuits",
        "Vasodilation in systemic vessels, but vasoconstriction in pulmonary vessels",
        "Vasoconstriction in systemic vessels, but vasodilation in pulmonary vessels"
      ],
      answer: 2,
      explanation: "In the systemic circulation, hypoxia and hypercapnia trigger smooth muscle relaxation (vasodilation) to deliver more blood. In the pulmonary circuit, hypoxia triggers Hypoxic Pulmonary Vasoconstriction (HPV) to shunt blood away from poorly ventilated alveoli to functional ones."
    },
    {
      id: "p1q63",
      question: "Which metabolic step is affected in an individual with Type I Glycogen Storage Disease (Von Gierke disease) resulting in severe fasting hypoglycemia?",
      options: [
        "Deficiency of glycogen synthase",
        "Deficiency of Glucose-6-phosphatase",
        "Deficiency of debranching enzyme",
        "Deficiency of muscle phosphorylase"
      ],
      answer: 1,
      explanation: "Glucose-6-phosphatase is the critical terminal enzyme required by the liver to release free glucose into the blood from both glycogenolysis and gluconeogenesis. Deficiency blocks glucose release, causing glycogen accumulation and severe hypoglycemia."
    },
    {
      id: "p1q64",
      question: "What specific neuroanatomical structure connects the third ventricle to the fourth ventricle within the ventricular system?",
      options: [
        "Interventricular foramen (Foramen of Monro)",
        "Cerebral aqueduct (Aqueduct of Sylvius)",
        "Median aperture (Foramen of Magendie)",
        "Lateral apertures (Foramina of Luschka)"
      ],
      answer: 1,
      explanation: "CSF flows from the lateral ventricles to the third ventricle via the interventricular foramina of Monro, and then travels down through the midbrain via the narrow cerebral aqueduct of Sylvius into the fourth ventricle."
    },
    {
      id: "p1q65",
      question: "Which statement accurately describes the physiological function of the Osteoprotegerin (OPG) / RANK / RANKL pathway in bone remodeling?",
      options: [
        "RANKL binds to OPG to stimulate osteoblast activity",
        "RANKL secreted by osteoblasts binds to RANK on osteoclast precursors to induce differentiation; OPG acts as a decoy receptor to block this process",
        "OPG binds directly to bone matrix to accelerate calcium deposition",
        "Osteoclasts secrete OPG to destroy osteoblasts"
      ],
      answer: 1,
      explanation: "Osteoblasts produce RANKL to stimulate osteoclast differentiation and bone resorption. Osteoblasts also produce OPG, a decoy receptor that binds RANKL, blocking its interaction with RANK and protecting bone from excessive breakdown."
    },
    {
      id: "p1q66",
      question: "Normal hemoglobin for adult males is:",
      options: ["10–12 g/dL", "12–14 g/dL", "14–18 g/dL", "18–22 g/dL"],
      answer: 2,
      explanation: "Normal hemoglobin for adult males is 14–18 g/dL; for adult females, 12–16 g/dL. Below normal values indicate anemia."
    },
    {
      id: "p1q67",
      question: "Which vascular structure has the highest aggregate cross-sectional area and experiences the lowest blood velocity across the entire cardiovascular system?",
      options: ["The Aorta", "Arterioles", "Capillaries", "Venae Cavae"],
      answer: 2,
      explanation: "While individual capillaries are microscopic, their collective number yields the highest total cross-sectional area in the body. According to the law of continuity ($V = Q/A$), velocity is inversely proportional to cross-sectional area, making capillary blood velocity the slowest to optimize nutrient exchange."
    },
    {
      id: "p1q68",
      question: "Which clinical phenomenon is characterized by a rebound hyperglycemia in the morning due to a physiological counter-regulatory hormonal release following an unrecognized episode of nocturnal hypoglycemia?",
      options: ["The Dawn phenomenon", "The Somogyi effect", "Insulin resistance syndrome", "Honeymoon phase"],
      answer: 1,
      explanation: "The Somogyi effect occurs when nocturnal insulin excess drives blood glucose down into hypoglycemia at 2–3 AM. The body responds by releasing stress hormones (epinephrine, cortisol, growth hormone, glucagon), triggering a rebound morning hyperglycemia."
    },
    {
      id: "p1q69",
      question: "Which direct physiological action does Parathyroid Hormone (PTH) exert within the renal tubules?",
      options: [
        "Inhibits calcium reabsorption in the proximal convoluted tubule",
        "Stimulates calcium reabsorption in the distal convoluted tubule and inhibits phosphate reabsorption in the proximal convoluted tubule",
        "Stimulates both calcium and phosphate reabsorption in the collecting ducts",
        "Inhibits the 1-alpha-hydroxylase enzyme"
      ],
      answer: 1,
      explanation: "PTH aims to elevate serum calcium and lower serum phosphate. It achieves this by downregulating sodium-phosphate cotransporters in the proximal tubule (causing phosphaturia) and upregulating calcium channels in the distal convoluted tubule."
    },
    {
      id: "p1q70",
      question: "Which regulatory protein binds to the active sites of actin in smooth muscle cells to inhibit contraction when the muscle is at rest?",
      options: ["Troponin T", "Caldesmon", "Myosin light chain", "Titining"],
      answer: 1,
      explanation: "In smooth muscle, caldesmon binds to actin at low calcium concentrations, physically blocking myosin interactions. When Ca2+-calmodulin levels rise, it binds and phosphorylates caldesmon, releasing it from actin to allow cross-bridge cycling."
    },
    {
      id: "p1q71",
      question: "Which component of the sarcomere shortens during an active concentric skeletal muscle contraction?",
      options: ["The A band", "The H zone and I band", "The M line", "The Z discs thicken without moving"],
      answer: 1,
      explanation: "According to the sliding filament theory, myosin and actin filaments slide past one another. The A band (representing the full length of the thick filament) stays constant, whereas the I band (actin only) and H zone (myosin only) contract and shorten."
    },
    {
      id: "p1q72",
      question: "The tricuspid valve has how many cusps?",
      options: ["2", "3", "4", "1"],
      answer: 1,
      explanation: "The tricuspid valve has 3 cusps and is located between the right atrium and right ventricle. It prevents backflow during right ventricular contraction."
    },
    {
      id: "p1q73",
      question: "A lesion to the subthalamic nucleus within the basal ganglia pathways disrupts internal inhibition and results in which classic hyperkinetic motor disorder?",
      options: ["Chorea", "Hemiballismus", "Athetosis", "Parkinsonian tremors"],
      answer: 1,
      explanation: "The subthalamic nucleus excites the globus pallidus internus, which inhibits the thalamus. Destruction of the subthalamic nucleus removes this inhibitory control, yielding hemiballismus—wild, high-amplitude, flinging movements of the contralateral limbs."
    },
    {
      id: "p1q74",
      question: "Which cell organelle is responsible for the final proteolytic cleavage of proinsulin into active insulin and C-peptide?",
      options: ["Rough endoplasmic reticulum", "Golgi apparatus and immature secretory granules", "Lysosomes", "Peroxisomes"],
      answer: 1,
      explanation: "Proinsulin is synthesized in the rough ER and transported to the Golgi apparatus. Inside the Golgi and emerging clathrin-coated secretory granules, endopeptidases cleave the connecting peptide chain, packaging equimolar amounts of active insulin and C-peptide."
    },
    {
      id: "p1q75",
      question: "Which anatomical structure represents the continuous fibrous tract connecting the liver to the anterior abdominal wall, serving as the remnant of the fetal umbilical vein?",
      options: ["Ligamentum venosum", "Ligamentum teres hepatis (Round ligament)", "Falciform ligament", "Coronary ligament"],
      answer: 1,
      explanation: "The ligamentum teres hepatis (round ligament of the liver) runs inside the free edge of the falciform ligament. It is the fibrosed anatomical remnant of the left fetal umbilical vein."
    },
    {
      id: "p1q76",
      question: "The phrenic nerve controls which muscle?",
      options: ["Intercostal muscles", "Diaphragm", "Abdominal muscles", "Sternocleidomastoid"],
      answer: 1,
      explanation: "The phrenic nerve (C3, C4, C5) innervates the diaphragm. Damage above C3 can result in respiratory paralysis. 'C3, 4, 5 keeps the diaphragm alive.'"
    },
    {
      id: "p1q77",
      question: "Which component of the vestibular apparatus detects linear horizontal acceleration, such as riding forward in a car?",
      options: ["The Saccule", "The Utricle", "The Superior semicircular canal", "The Organ of Corti"],
      answer: 1,
      explanation: "The otolith organs detect linear acceleration. The macula of the utricle is oriented horizontally and senses horizontal movement, while the saccule is oriented vertically and senses vertical acceleration (e.g., an elevator)."
    },
    {
      id: "p1q78",
      question: "Which vascular structural change serves as the primary compensatory response to maintain a normal mean arterial pressure when total cardiac output decreases?",
      options: [
        "Generalized systemic venodilatation",
        "Sympathetic-mediated vasoconstriction of arterioles, increasing total peripheral resistance (TPR)",
        "Inhibition of the renin-angiotensin-aldosterone system",
        "Parasympathetic vagal activation"
      ],
      answer: 1,
      explanation: "Since Blood Pressure = Cardiac Output $\times$ TPR, a drop in cardiac output triggers arterial baroreceptors to shift autonomic balance toward sympathetic discharge, constricting peripheral arterioles to elevate TPR and protect central perfusion pressure."
    },
    {
      id: "p1q79",
      question: "The skeletal tissue forming the embryonic skeleton before ossification is primarily:",
      options: ["Fibrocartilage", "Elastic cartilage", "Hyaline cartilage", "Dense irregular connective tissue"],
      answer: 2,
      explanation: "During endochondral ossification, the embryonic skeleton is first constructed as a miniature model composed of hyaline cartilage, which is progressively broken down and replaced by calcified bone matrix."
    },
    {
      id: "p1q80",
      question: "What specific anatomical abnormality causes a patient to develop a right-sided homonymous hemianopsia visual field defect?",
      options: [
        "Transection of the right optic nerve",
        "A pituitary adenoma compressing the central optic chiasm",
        "A lesion or infarction of the left optic tract or left lateral geniculate nucleus",
        "Destruction of the right occipital pole"
      ],
      answer: 2,
      explanation: "The left optic tract carries visual information originating from the right visual fields of both eyes (the temporal retina of the left eye and nasal retina of the right eye). A complete lesion to the left tract yields a right homonymous hemianopsia."
    },
    {
      id: "p1q81",
      question: "The primary site of nutrient absorption in the gastrointestinal tract is:",
      options: ["Duodenum", "Jejunum", "Ileum", "Cecum"],
      answer: 1,
      explanation: "The jejunum is the primary site of nutrient absorption due to its extensive villi and microvilli. The duodenum handles initial digestion; the ileum absorbs B12 and bile salts."
    },
    {
      id: "p1q82",
      question: "Which compound serves as the universal source of methyl groups in structural transmethylation reactions, such as the conversion of norepinephrine to epinephrine?",
      options: ["S-adenosylmethionine (SAMe)", "Tetrahydrofolate", "Homocysteine", "Choline"],
      answer: 0,
      explanation: "S-adenosylmethionine (SAMe) synthesized from methionine and ATP serves as the primary enzymatic methyl donor required for the synthesis of epinephrine, melatonin, and DNA methylation."
    },
    {
      id: "p1q83",
      question: "Which cells produce antibodies?",
      options: ["T lymphocytes", "B lymphocytes (plasma cells)", "Neutrophils", "Macrophages"],
      answer: 1,
      explanation: "B lymphocytes differentiate into plasma cells that produce antibodies (immunoglobulins) as part of humoral immunity."
    },
    {
      id: "p1q84",
      question: "Which mechanism describes how low partial pressures of oxygen ($pO_2$) elicit hyperventilation in patients at extreme high altitudes?",
      options: [
        "Direct excitation of central medullary chemoreceptors",
        "Peripheral chemoreceptors in the carotid and aortic bodies sense low dissolved $pO_2$ and signal the medulla via CN IX and CN X",
        "Baroreceptor unloads in the carotid sinus",
        "Direct pulmonary baroreceptor mechanical feedback"
      ],
      answer: 1,
      explanation: "Peripheral chemoreceptors (primarily carotid bodies) trigger a response when arterial $pO_2$ drops below 60 mmHg. They send afferent signals up the glossopharyngeal (CN IX) and vagus (CN X) nerves to the medullary respiratory center to drive hyperventilation."
    },
    {
      id: "p1q85",
      question: "Which component of the nephron reabsorbs 100% of filtered glucose and amino acids under normal physiological conditions?",
      options: [
        "Proximal convoluted tubule (PCT)",
        "Descending limb of the loop of Henle",
        "Distal convoluted tubule (DCT)",
        "Cortical collecting duct"
      ],
      answer: 0,
      explanation: "The PCT contains high-capacity secondary active transport symporters (such as SGLT2 for glucose) that coupled to the sodium gradient reabsorb all filtered nutrients, amino acids, and glucose before the fluid exits the proximal segment."
    },
    {
      id: "p1q86",
      question: "Which cell type in the bone marrow is the direct precursor that undergoes fragmentation to produce circulating thrombocytes?",
      options: ["Reticulocyte", "Megakaryocyte", "Myeloblast", "Lymphoblast"],
      answer: 1,
      explanation: "Thrombocytes (platelets) are not whole cells but cytoplasmic fragments derived from large polyploid cells called megakaryocytes under the influence of thrombopoietin."
    },
    {
      id: "p1q87",
      question: "What is the physiological role of the enzyme alpha-1-antitrypsin within pulmonary tissue, and what happens when it is genetically deficient?",
      options: [
        "It synthesizes collagen; deficiency causes pulmonary fibrosis",
        "It inhibits neutrophil elastase; deficiency causes uninhibited proteolytic destruction of alveolar walls leading to panacinar emphysema",
        "It acts as a surfactant stabilizer; deficiency causes respiratory distress",
        "It breaks down mucus; deficiency causes cystic fibrosis"
      ],
      answer: 1,
      explanation: "Alpha-1-antitrypsin is a protease inhibitor that protects alveolar elastic tissue from damage caused by neutrophil elastase during inflammation. Deficiency allows elastase to destroy lung parenchyma, causing panacinar emphysema."
    },
    {
      id: "p1q88",
      question: "Which specific phase of the classic cardiac cycle corresponds to the time window when all four heart valves are closed and ventricular pressure is dropping rapidly?",
      options: [
        "Isovolumetric contraction",
        "Isovolumetric relaxation",
        "Rapid ventricular ejection",
        "Diastasis"
      ],
      answer: 1,
      explanation: "Isovolumetric relaxation occurs at the start of diastole immediately after the aortic and pulmonary valves close, but before ventricular pressure falls low enough to open the AV valves. Ventricular volume remains constant while pressure drops."
    },
    {
      id: "p1q89",
      question: "The hormone insulin is produced by which cells of the pancreas?",
      options: ["Alpha cells", "Beta cells", "Delta cells", "PP cells"],
      answer: 1,
      explanation: "Beta cells of the islets of Langerhans in the pancreas produce insulin, which facilitates glucose uptake by cells and lowers blood glucose levels."
    },
    {
      id: "p1q90",
      question: "Which specific immune cell acts as the primary driver of acute cell-mediated allograft rejection through the direct recognition of foreign donor HLA molecules?",
      options: ["B lymphocytes", "Host CD8+ and CD4+ T lymphocytes", "Natural Killer cells", "Eosinophils"],
      answer: 1,
      explanation: "Acute cellular rejection is mediated by host T cells. Host CD8+ cytotoxic T cells directly recognize foreign donor MHC/HLA Class I molecules and kill the allograft tissue, while CD4+ helper cells secrete cytokines that orchestrate type IV hypersensitivity-like damage."
    },
    {
      id: "p1q91",
      question: "Which specialized protein acts as the intracellular chaperone inside the sarcoplasmic reticulum to bind and store calcium ions at high capacity, minimizing free osmotic calcium gradients?",
      options: ["Calmodulin", "Calsequestrin", "Troponin I", "Ryanodine"],
      answer: 1,
      explanation: "Calsequestrin is a highly acidic calcium-binding protein located within the terminal cisternae of the sarcoplasmic reticulum. It binds up to 50 calcium ions per molecule, reducing the gradient against which the SERCA pump must operate."
    },
    {
      id: "p1q92",
      question: "The largest nerve in the human body is:",
      options: ["Femoral nerve", "Brachial plexus", "Sciatic nerve", "Vagus nerve"],
      answer: 2,
      explanation: "The sciatic nerve is the longest and widest single nerve in the body, running from the lower back through the buttock and down each leg."
    },
    {
      id: "p1q93",
      question: "Which sensory path bypasses the thalamus and projects directly to its primary primitive cortical processing zone?",
      options: ["Visual pathway", "Auditory pathway", "Olfactory pathway", "Gustatory pathway"],
      answer: 2,
      explanation: "Olfaction is unique. Olfactory receptor neurons project through the cribriform plate to the olfactory bulb, which targets the piriform cortex and limbic structures directly without an obligatory initial relay in the thalamus."
    },
    {
      id: "p1q94",
      question: "Which compound accumulates to toxic levels within the skeletal muscle sarcoplasm during anaerobic glycolysis, contributing to local metabolic acidosis and fatigue?",
      options: ["Pyruvate", "Lactic acid (Lactate and H+)", "Acetyl-CoA", "Oxaloacetate"],
      answer: 1,
      explanation: "When oxygen delivery is insufficient for oxidative phosphorylation, pyruvate is converted into lactate by lactate dehydrogenase. This step regenerates NAD+ for glycolysis but releases hydrogen ions that lower cellular pH, contributing to fatigue."
    },
    {
      id: "p1q95",
      question: "Which specific cell type forms the structural blood-testis barrier to protect developing haploid spermatids from autoimmune destruction?",
      options: ["Leydig cells", "Sertoli cells", "Spermatogonia", "Interstitial macrophages"],
      answer: 1,
      explanation: "Sertoli cells form tight junctions with one another, dividing the seminiferous epithelium into basal and adluminal compartments. This blood-testis barrier protects developing, immunologically distinct haploid germ cells from host immune surveillance."
    },
    {
      id: "p1q96",
      question: "The somatic sensory cortex is anatomically located within which specific cortical gyral structure?",
      options: [
        "Precentral gyrus of the frontal lobe",
        "Postcentral gyrus of the parietal lobe",
        "Superior temporal gyrus",
        "Calcarine sulcus"
      ],
      answer: 1,
      explanation: "The primary somatosensory cortex (Brodmann areas 3, 1, and 2) occupies the postcentral gyrus of the parietal lobe, mapping tactile, proprioceptive, pain, and temperature inputs from the contralateral body surface."
    },
    {
      id: "p1q97",
      question: "What is the primary action of the active form of Vitamin D (1,25-dihydroxyvitamin D3) within the human gastrointestinal tract?",
      options: [
        "Inhibits phosphate transport",
        "Upregulates the transcription of calbindin and apical calcium channels to increase active calcium absorption",
        "Stimulates gastrin release",
        "Directly breaks down dietary calcium complexes"
      ],
      answer: 1,
      explanation: "Calcitriol binds to intracellular vitamin D receptors in enterocytes, acting as a transcription factor to upregulate the synthesis of luminal calcium channels (TRPV6) and intracellular calcium-binding shuttle proteins (Calbindin), enhancing calcium absorption."
    },
    {
      id: "p1q98",
      question: "Which statement defines the primary mechanism of action of the toxin produced by Clostridium tetani?",
      options: [
        "Inhibition of acetylcholine release at the neuromuscular junction",
        "Retrograde transport to the CNS followed by cleavage of synaptobrevin, blocking the release of inhibitory neurotransmitters GABA and glycine",
        "Chronic activation of adenylate cyclase",
        "Direct destruction of the myelin sheath"
      ],
      answer: 1,
      explanation: "Tetanospasmin undergoes retrograde axonal transport to inhibitory interneurons (Renshaw cells) in the spinal cord. It cleaves synaptobrevin (VAMP), blocking the exocytosis of glycine and GABA. This lifts motor neuron inhibition, triggering spastic paralysis."
    },
    {
      id: "p1q99",
      question: "Which vessel carries blood from the gastrointestinal tract to the liver?",
      options: ["Hepatic artery", "Portal vein", "Hepatic vein", "Mesenteric vein"],
      answer: 1,
      explanation: "The hepatic portal vein carries nutrient-rich, deoxygenated blood from the GI tract and spleen to the liver for processing and detoxification."
    },
    {
      id: "p1q100",
      question: "The normal serum creatinine level in adults is approximately:",
      options: ["0.1–0.5 mg/dL", "0.6–1.2 mg/dL", "1.5–2.0 mg/dL", "2.5–3.0 mg/dL"],
      answer: 1,
      explanation: "Normal serum creatinine is 0.6–1.2 mg/dL (slightly higher in males due to muscle mass). Elevated creatinine indicates decreased kidney function."
    },
    {
      id: "p1q101",
      question: "What unique property of the coronary blood flow profile differentiates it from all other systemic vascular beds?",
      options: [
        "Coronary perfusion peaks during ventricular systole",
        "Left ventricular coronary blood flow drops to its lowest levels during early systole and peaks during diastole",
        "It is not regulated by metabolic autoregulation",
        "It carries deoxygenated blood from the lungs"
      ],
      answer: 1,
      explanation: "During ventricular systole, the extreme intramuscular pressure generated by the contracting left ventricular myocardium compresses the subendocardial coronary vessels, increasing vascular resistance. Consequently, effective left ventricular coronary perfusion occurs during ventricular diastole."
    },
    {
      id: "p1q102",
      question: "Which structure connects muscle to bone?",
      options: ["Ligament", "Tendon", "Cartilage", "Fascia"],
      answer: 1,
      explanation: "Tendons are fibrous connective tissue structures that connect muscle to bone. Ligaments connect bone to bone."
    },
    {
      id: "p1q103",
      question: "Which cells form the structural blood-brain barrier by wrapping their perivascular end-feet around central nervous system capillaries?",
      options: ["Microglia", "Oligodendrocytes", "Astrocytes", "Ependymal cells"],
      answer: 2,
      explanation: "Astrocytes project specialized perivascular end-feet that completely envelop CNS endothelia. They release paracrine factors that stimulate the endothelial cells to form tight junctions, establishing the blood-brain barrier."
    },
    {
      id: "p1q104",
      question: "Which condition would directly induce a state of hyperammonemia due to an accumulation of nitrogenous waste from protein catabolism?",
      options: [
        "Severe renal clear failure",
        "A genetic defect in any of the five enzymes of the hepatic Urea Cycle",
        "Acute pancreatic necrosis",
        "Chronic ketoacidosis"
      ],
      answer: 1,
      explanation: "The liver utilizes the urea cycle to convert toxic ammonia (produced by amino acid deamination) into water-soluble urea. Deficiencies in enzymes like Ornithine Transcarbamylase (OTC) block this pathway, leading to severe hyperammonemia and encephalopathy."
    },
    {
      id: "p1q105",
      question: "Which unique anatomical component of the renal juxtaglomerular apparatus functions as a specialized chemoreceptor that monitors sodium and chloride levels in the tubular fluid?",
      options: ["Juxtaglomerular granular cells", "Macula densa cells of the distal tubule", "Extraglomerular mesangial cells", "Podocytes"],
      answer: 1,
      explanation: "The macula densa is a group of tall, closely packed epithelial cells in the distal convoluted tubule adjacent to the arterioles. They sense drops in luminal Na+ and Cl- loads, signaling granular cells to release renin."
    },
    {
      id: "p1q106",
      question: "Which cellular mechanism explains the destructive features of Myasthenia Gravis?",
      options: [
        "Autoimmune degradation of myelin sheaths in the CNS",
        "Autoantibodies competitively binding to and internalizing nicotinic acetylcholine receptors (AChR) at the post-synaptic neuromuscular junction",
        "Inability to pump calcium back into the sarcoplasmic reticulum",
        "Deficiency of acetylcholinesterase production"
      ],
      answer: 1,
      explanation: "Myasthenia gravis is a type II hypersensitivity autoimmune disorder where pathogenic IgG autoantibodies target postsynaptic nicotinic ACh receptors. This causes complement-mediated destruction and internalization of the receptors, leading to severe muscle weakness."
    },
    {
      id: "p1q107",
      question: "The secondary structure of a protein, such as an alpha-helix or beta-pleated sheet, is stabilized primarily by which type of chemical bond?",
      options: ["Disulfide bridges", "Hydrogen bonds between peptide backbone atoms", "Ionic salt bridges", "Hydrophobic interactions"],
      answer: 1,
      explanation: "Secondary protein structures are formed by localized, regular spatial arrangements stabilized exclusively by hydrogen bonds between the carbonyl oxygen and amide hydrogen atoms along the polypeptide backbone."
    },
    {
      id: "p1q108",
      question: "Which hormone activates an intracellular nuclear receptor to stimulate transcription, rather than binding to a cell-surface G-protein coupled receptor?",
      options: ["Epinephrine", "Thyroxine (T4)", "Glucagon", "Insulin"],
      answer: 1,
      explanation: "Thyroid hormones (T3 and T4) and steroid hormones are lipophilic. They traverse cell membranes to bind to high-affinity nuclear receptors, acting directly as ligand-dependent transcription factors."
    },
    {
      id: "p1q109",
      question: "The hormone that regulates the 'fight or flight' response is:",
      options: ["Cortisol", "Insulin", "Epinephrine (adrenaline)", "Melatonin"],
      answer: 2,
      explanation: "Epinephrine (adrenaline), released from the adrenal medulla, triggers the fight-or-flight response: increased heart rate, bronchodilation, and glucose mobilization."
    },
    {
      id: "p1q110",
      question: "Which specific immune cell type is directly infected and progressively depleted by the Human Immunodeficiency Virus (HIV) using the CD4 receptor and CCR5/CXCR4 co-receptors?",
      options: ["Cytotoxic T cells", "Helper T lymphocytes", "B cells", "Natural Killer cells"],
      answer: 1,
      explanation: "HIV exhibits tropism for helper T cells ($CD4^+$) and macrophages. It binds via its viral envelope glycoprotein gp120 to host CD4 molecules and chemokine co-receptors, leading to cellular destruction and profound immunodeficiency."
    },
    {
      id: "p1q111",
      question: "What is the primary action of the enzyme Myosin Light Chain Phosphatase (MLCP) in smooth muscle contraction dynamics?",
      options: [
        "It phosphorylates myosin to turn on contraction",
        "It dephosphorylates myosin light chains to induce smooth muscle relaxation",
        "It opens intracellular calcium storage gates",
        "It breaks down extracellular nitric oxide"
      ],
      answer: 1,
      explanation: "Smooth muscle contraction requires phosphorylated myosin light chains. MLCP continuously removes these phosphate groups. When calcium levels drop, MLCP activity dominates, causing cross-bridge detachment and muscle relaxation."
    },
    {
      id: "p1q112",
      question: "Which compound represents the immediate macromolecular structural backbone to which iodine atoms are attached during the synthesis of thyroid hormones inside the follicular lumen?",
      options: ["Thyroxine-binding globulin", "Thyroglobulin", "Albumin", "Calcitonin"],
      answer: 1,
      explanation: "Thyroglobulin is a large dimeric glycoprotein synthesized by thyroid follicular cells and secreted into the colloid. Its tyrosine residues serve as substrates for iodination by thyroid peroxidase."
    },
    {
      id: "p1q113",
      question: "The normal primary buffer system in extracellular fluid is:",
      options: ["Phosphate buffer system", "Protein buffer system", "Bicarbonate-carbonic acid buffer system", "Ammonia buffer system"],
      answer: 2,
      explanation: "The bicarbonate-carbonic acid system (HCO3-/H2CO3) is the most important extracellular buffer, regulating blood pH in cooperation with the lungs and kidneys."
    },
    {
      id: "p1q114",
      question: "Which visual cell type within the retina is responsible for high-acuity color vision and is concentrated within the fovea centralis?",
      options: ["Rod cells", "Cone cells", "Horizontal cells", "Amacrine cells"],
      answer: 1,
      explanation: "Cones operate in high-light conditions and handle color vision. The fovea centralis is a specialized pit containing exclusively cone cells, providing maximum visual resolution."
    },
    {
      id: "p1q115",
      question: "Which enzyme catalyzes the rate-limiting step of cholesterol synthesis within hepatocytes, serving as the direct target for statin medications?",
      options: [
        "Acyl-CoA cholesterol acyltransferase (ACAT)",
        "HMG-CoA reductase",
        "Squatene synthase",
        "Cholesterol desmolase"
      ],
      answer: 1,
      explanation: "HMG-CoA reductase converts HMG-CoA into mevalonate. This is the rate-limiting step of cholesterol biosynthesis and is competitively inhibited by statins."
    },
    {
      id: "p1q116",
      question: "The aortic valve opens when:",
      options: ["Left atrium contracts", "Right ventricle contracts", "Left ventricle contracts", "Right atrium contracts"],
      answer: 2,
      explanation: "The aortic valve opens during left ventricular systole (contraction), allowing oxygenated blood to flow from the left ventricle into the aorta."
    },
    {
      id: "p1q117",
      question: "Which component of the nephron serves as the primary site for the active reabsorption of filtered magnesium ions via passive paracellular paracellular pathways driven by a positive lumen electrical gradient?",
      options: [
        "Proximal convoluted tubule",
        "Thick ascending limb of the loop of Henle",
        "Distal convoluted tubule",
        "Medullary collecting duct"
      ],
      answer: 1,
      explanation: "Roughly 60–70% of filtered magnesium is reabsorbed in the thick ascending limb. The K+ leakage back into the lumen via ROMK channels creates a lumen-positive electrical potential that drives divalent cations ($Mg^{2+}$ and $Ca^{2+}$) paracellularly through claudin proteins."
    },
    {
      id: "p1q118",
      question: "Which cranial nerve is responsible for the gag reflex?",
      options: ["CN VII (Facial)", "CN IX (Glossopharyngeal)", "CN X (Vagus)", "CN V (Trigeminal)"],
      answer: 1,
      explanation: "CN IX (Glossopharyngeal) carries the afferent limb, and CN X (Vagus) carries the efferent limb of the gag reflex. CN IX is primarily tested."
    },
    {
      id: "p1q119",
      question: "The normal INR (International Normalized Ratio) for a patient on warfarin therapy is:",
      options: ["0.8–1.2", "1.5–2.0", "2.0–3.0", "3.5–4.5"],
      answer: 2,
      explanation: "Therapeutic INR for most warfarin indications (DVT, A-fib) is 2.0–3.0. For mechanical heart valves, it may be 2.5–3.5. Normal INR (no anticoagulation) is 0.8–1.2."
    },
    {
      id: "p1q120",
      question: "Which specific phase of the uterine endometrial cycle is driven completely by progesterone secretion from the corpus luteum following ovulation?",
      options: ["Menstrual phase", "Proliferative phase", "Secretory phase", "Ischemic phase"],
      answer: 2,
      explanation: "Following ovulation, the corpus luteum secretes abundant progesterone during the secretory phase. Progesterone stops endothelial proliferation and induces vascular twisting and glycogen secretion to prepare for embryo implantation."
    },
    {
      id: "p1q121",
      question: "Which cellular component undergoes structural distortion during a Type I immediate hypersensitivity reaction when an allergen cross-links surface-bound IgE antibodies?",
      options: ["Macrophage activation", "Mast cell and basophil degranulation with histamine release", "Cytotoxic T cell activation", "Complement system lysis"],
      answer: 1,
      explanation: "Type I hypersensitivity involves allergen cross-linking of pre-bound IgE molecules on mast cells and basophils. This triggers a signaling cascade leading to the immediate exocytosis of pre-formed granules containing histamine and heparin."
    },
    {
      id: "p1q122",
      question: "What specific anatomical dynamic occurs at the optic chiasm?",
      options: [
        "All optic nerve fibers pass straight through without crossing",
        "Axons from the nasal retina of each eye cross to the contralateral optic tract, while temporal retinal axons remain uncrossed",
        "All optic nerve fibers completely cross to the opposite side",
        "Optic tracks switch places with cranial nerve III"
      ],
      answer: 1,
      explanation: "The optic chiasm splits retinal fibers: axons from the nasal retinas (which view the temporal visual fields) cross the midline, while temporal retinal fibers stay on the same side. This organizes visual space for binocular cortical integration."
    },
    {
      id: "p1q123",
      question: "Which anatomical branch of the celiac trunk supplies blood directly along the lesser curvature of the stomach?",
      options: ["Right gastric artery", "Left gastric artery", "Splenic artery", "Gastroduodenal artery"],
      answer: 1,
      explanation: "The left gastric artery is a direct branch of the celiac trunk that tracks along the lesser curvature of the stomach, anastomosing with the right gastric artery."
    },
    {
      id: "p1q124",
      question: "The resting membrane potential of standard pacemaking nodal tissue in the SA node is unstable due to the continuous leak of which ion through 'funny' ($I_f$) channels?",
      options: ["Outward Leak of Calcium ($Ca^{2+}$)", "Inward slow leak of Sodium ($Na^+$)", "Rapid influx of Potassium ($K^+$)", "Outward movement of Chloride ($Cl^-$)"],
      answer: 1,
      explanation: "Nodal pacemaker cells do not have a flat resting membrane potential. Phase 4 spontaneous depolarization is driven by 'funny' channels ($I_f$) that open at hyperpolarized potentials, allowing a slow, continuous inward leak of sodium ions."
    },
    {
      id: "p1q125",
      question: "Which specific immune cell acts as the primary professional antigen-presenting cell (APC) residing within epidermal layers of the skin, characterized by Birbeck granules?",
      options: ["Keratinocytes", "Langerhans cells", "Melanocytes", "Merkel cells"],
      answer: 1,
      explanation: "Langerhans cells are tissue-resident dendritic cells located in the stratum spinosum of the epidermis. They capture cutaneous antigens and migrate to regional lymph nodes to prime naive T cells."
    },
    {
      id: "p1q126",
      question: "Which type of muscle is found in the heart?",
      options: ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Striated voluntary muscle"],
      answer: 2,
      explanation: "Cardiac muscle (myocardium) is involuntary, striated, and has unique intercalated discs that allow rapid electrical signal transmission between cells."
    },
    {
      id: "p1q127",
      question: "Which chemical component of the inner ear fluid fills the membranous labyrinth and has an unusually high potassium concentration relative to standard extracellular fluids?",
      options: ["Perilymph", "Endolymph", "Cerebrospinal fluid", "Aqueous humor"],
      answer: 1,
      explanation: "Endolymph fills the scala media and membranous labyrinth. It is unique among extracellular fluids because its ionic composition resembles intracellular fluid, featuring a high $K^+$ concentration and low $Na^+$ concentration maintained by the stria vascularis."
    },
    {
      id: "p1q128",
      question: "What is the primary functional consequence of a complete lesion affecting the lower motor neurons in the spinal cord?",
      options: [
        "Spastic paralysis with hyperreflexia",
        "Flaccid paralysis with hyporeflexia, fasciculations, and severe muscle atrophy",
        "Resting tremors and cogwheel rigidity",
        "Loss of fine touch with preserved motor strength"
      ],
      answer: 1,
      explanation: "Lower motor neuron lesions cut off the direct electrical path to skeletal muscles. This results in flaccid weakness, hypotonia, loss of deep tendon reflexes, muscle fasciculations, and rapid denervation atrophy."
    },
    {
      id: "p1q129",
      question: "Which specialized cellular junction contains transmembrane cadherin loops linked directly to intermediate keratin filaments, providing intense structural anchoring across epithelial sheets?",
      options: ["Gap junctions", "Tight junctions (zonula occludens)", "Desmosomes (macula adherens)", "Focal adhesions"],
      answer: 2,
      explanation: "Desmosomes form strong intercellular links. They utilize desmoglein and desmocollin (cadherins) to span the intercellular gap, anchoring directly into the intracellular intermediate filament (keratin) cytoskeleton to resist mechanical shearing."
    },
    {
      id: "p1q130",
      question: "Which unique anatomical muscle layer composes the walls of the urinary bladder and is stimulated to contract by parasympathetic fibers via muscarinic M3 receptors?",
      options: ["Dartos muscle", "Detrusor muscle", "Trigone muscle", "Cremaster muscle"],
      answer: 1,
      explanation: "The detrusor muscle forms the smooth muscle wall of the bladder. Parasympathetic pelvic nerves release acetylcholine acting on M3 receptors to contract the detrusor muscle, driving micturition."
    },
    {
      id: "p1q131",
      question: "Which hormone is produced by the posterior pituitary gland?",
      options: ["Growth hormone", "TSH", "ADH (Vasopressin)", "ACTH"],
      answer: 2,
      explanation: "ADH (antidiuretic hormone/vasopressin) and oxytocin are produced in the hypothalamus but stored and released by the posterior pituitary gland."
    },
    {
      id: "p1q132",
      question: "Which primary factor stimulates the secretion of Erythropoietin (EPO) by renal peritubular interstitial cells?",
      options: [
        "Elevated systemic blood pressure",
        "Hypoxia (low tissue partial pressure of oxygen) sensed via HIF-1alpha stabilization",
        "High serum iron concentration",
        "Bacterial infection of the bladder"
      ],
      answer: 1,
      explanation: "When local renal oxygen delivery falls, Hypoxia-Inducible Factor 1-alpha (HIF-1alpha) is stabilized and drives transcription of the EPO gene in peritubular interstitial cells, accelerating RBC production in bone marrow."
    },
    {
      id: "p1q133",
      question: "What specific anatomical site acts as the primary location for the final functional maturation and storage of spermatozoa?",
      options: ["Seminiferous tubules", "Epididymis", "Vas deferens", "Seminal vesicles"],
      answer: 1,
      explanation: "Sperm leave the testes immobile and non-fertile. They spend roughly 12–14 days traveling through the duct of the epididymis, where they undergo biochemical changes that grant them forward motility and fertility."
    },
    {
      id: "p1q134",
      question: "The primary function of red blood cells is:",
      options: ["Fighting infection", "Blood clotting", "Transporting oxygen", "Producing antibodies"],
      answer: 2,
      explanation: "Red blood cells (erythrocytes) carry hemoglobin, which binds and transports oxygen from the lungs to tissues and carries CO2 back to the lungs."
    },
    {
      id: "p1q135",
      question: "Which cardiac biomarker elevates within 3–4 hours of myocardial ischemia, peaks at 24 hours, and remains the primary choice for diagnosing acute myocardial infarction due to its high cardiac specificity?",
      options: ["Myoglobin", "Creatine Kinase-MM", "Cardiac Troponin I or T", "Lactate Dehydrogenase-5"],
      answer: 2,
      explanation: "Cardiac troponins I and T are structural proteins unique to cardiac myocytes. Following injury, they release into circulation rapidly and stay elevated for up to 7–10 days, providing exceptional diagnostic sensitivity and specificity."
    },
    {
      id: "p1q136",
      question: "Normal adult heart rate range is:",
      options: ["40–60 bpm", "60–100 bpm", "100–120 bpm", "50–80 bpm"],
      answer: 1,
      explanation: "Normal adult resting heart rate is 60–100 bpm. Below 60 is bradycardia; above 100 is tachycardia."
    },
    {
      id: "p1q137",
      question: "The mitotic division phase where sister chromatids separate and move toward opposite spindle poles is termed:",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      answer: 2,
      explanation: "During anaphase, the proteins holding sister chromatids together are cleaved, allowing the mitotic spindle fibers to pull the separated individual chromosomes to opposite poles of the dividing cell."
    },
    {
      id: "p1q138",
      question: "Which valve separates the left atrium from the left ventricle?",
      options: ["Tricuspid valve", "Pulmonary valve", "Aortic valve", "Mitral (bicuspid) valve"],
      answer: 3,
      explanation: "The mitral valve (bicuspid valve) has two cusps and separates the left atrium from the left ventricle. It prevents backflow of blood during ventricular contraction."
    },
    {
      id: "p1q139",
      question: "Which neurotransmitter is exclusively utilized by preganglionic autonomic fibers in both the sympathetic and parasympathetic nervous systems?",
      options: ["Norepinephrine", "Acetylcholine", "Dopamine", "Serotonin"],
      answer: 1,
      explanation: "All autonomic preganglionic neurons (sympathetic and parasympathetic) release acetylcholine, which binds to nicotinic receptors on the postganglionic neuronal cell bodies within autonomic ganglia."
    },
    {
      id: "p1q140",
      question: "The normal serum sodium level is:",
      options: ["120–130 mEq/L", "135–145 mEq/L", "150–160 mEq/L", "100–110 mEq/L"],
      answer: 1,
      explanation: "Normal serum sodium is 135–145 mEq/L. Hyponatremia is <135; hypernatremia is >145 mEq/L."
    },
    {
      id: "p1q141",
      question: "Which genetic condition is characterized by a 45,X0 karyotype, causing short stature, webbed neck, and streak ovaries in phenotypic females?",
      options: ["Klinefelter syndrome", "Turner syndrome", "Down syndrome", "Edward syndrome"],
      answer: 1,
      explanation: "Turner syndrome occurs when a female is missing one X chromosome (45,X0). This leads to gonadal dysgenesis (streak ovaries), lack of secondary sexual characteristics, and physical hallmarks like a wide webbed neck."
    },
    {
      id: "p1q142",
      question: "Which cell organelle contains hydrolytic enzymes that function at an acidic pH to degrade internalized waste products and old cellular components?",
      options: ["Peroxisomes", "Lysosomes", "Golgi apparatus", "Smooth endoplasmic reticulum"],
      answer: 1,
      explanation: "Lysosomes contain acid hydrolases that degrade proteins, nucleic acids, lipids, and carbohydrates. They maintain an internal pH of ~4.5–5.0 using an ATP-driven proton pump."
    },
    {
      id: "p1q143",
      question: "What is the key physiological defect behind the genetic condition Cystic Fibrosis?",
      options: [
        "Deficiency of alpha-1 antitrypsin",
        "Mutations in the CFTR gene encoding a cAMP-regulated chloride channel, leading to thick, dehydrated mucus secretions",
        "Inability to metabolize phenylalanine",
        "Abnormal structure of beta-hemoglobin chains"
      ],
      answer: 1,
      explanation: "Cystic Fibrosis is an autosomal recessive disorder caused by mutations in the CFTR gene. Defective CFTR proteins impair chloride transport across epithelial surfaces, altering salt and water balance and leaving mucus abnormally thick and sticky, which plugs organ ducts."
    },
    {
      id: "p1q144",
      question: "The brain region responsible for the motor production of fluent speech, which when damaged results in a non-fluent expressive aphasia, is:",
      options: ["Wernicke's area", "Broca's area", "The Arcuate fasciculus", "The Basal ganglia"],
      answer: 1,
      explanation: "Broca's area is located in the inferior frontal gyrus of the dominant hemisphere. Damage here preserves comprehension but impairs the motor mechanics of speech generation, resulting in halting, expressive aphasia."
    },
    {
      id: "p1q145",
      question: "The hormone aldosterone acts on which part of the nephron?",
      options: ["Glomerulus", "Proximal convoluted tubule", "Loop of Henle", "Distal convoluted tubule and collecting duct"],
      answer: 3,
      explanation: "Aldosterone acts on the distal convoluted tubule and collecting duct to increase sodium reabsorption (and water) and potassium excretion, raising blood pressure."
    },
    {
      id: "p1q146",
      question: "Which type of connective tissue fiber provides intense tensile strength and comprises the primary matrix element of tendons, ligaments, and deep dermis layers?",
      options: ["Elastic fibers", "Reticular fibers", "Type I Collagen fibers", "Type II Collagen fibers"],
      answer: 2,
      explanation: "Type I collagen is the most abundant collagen variant in the body. It forms thick, non-elastic fibrils that provide structural integrity and tensile strength to dense connective tissues like tendons and bone matrix."
    },
    {
      id: "p1q147",
      question: "Which layer of the heart is most susceptible to ischemia?",
      options: ["Epicardium", "Pericardium", "Myocardium (subendocardial)", "Endocardium"],
      answer: 2,
      explanation: "The subendocardial (inner) layer of myocardium is most susceptible to ischemia because it's farthest from coronary blood supply and has higher oxygen demand."
    },
    {
      id: "p1q148",
      question: "Which molecule acts as the terminal electron acceptor during the metabolic pathway of aerobic cellular respiration in the mitochondria?",
      options: ["NAD+", "FAD", "Molecular Oxygen ($O_2$)", "Pyruvate"],
      answer: 2,
      explanation: "In the electron transport chain, electrons pass through Complexes I–IV. At Complex IV (Cytochrome c oxidase), molecular oxygen ($O_2$) acts as the final electron acceptor, binding protons to form water."
    },
    {
      id: "p1q149",
      question: "Which primary enzyme is responsible for the unwinding and separation of double-stranded DNA parental templates at the replication fork during S-phase?",
      options: ["DNA Polymerase III", "DNA Helicase", "Topoisomerase", "DNA Ligase"],
      answer: 1,
      explanation: "DNA helicase breaks the hydrogen bonds stabilizing the nitrogenous base pairs, unzipping the double helix to expose single-stranded templates for replication."
    },
    {
      id: "p1q150",
      question: "Bile is produced by the liver and stored in the:",
      options: ["Pancreas", "Duodenum", "Gallbladder", "Spleen"],
      answer: 2,
      explanation: "Bile produced by hepatocytes in the liver is concentrated and stored in the gallbladder, then released into the duodenum to emulsify dietary fats."
    },
    {
      id: "p1q151",
      question: "Which specialized cellular transporter actively extrudes three sodium ions from the cytosol for every two potassium ions pumped inward against their concentration gradients?",
      options: ["The Na+/H+ Exchanger", "The $Na^+/K^+$ ATPase pump", "The Ca2+ ATPase pump", "SGLT1 cotransporter"],
      answer: 1,
      explanation: "The $Na^+/K^+$ ATPase is an electrogenic primary active transporter that uses ATP cleavage to export $3\text{ Na}^+$ and import $2\text{ K}^+$. This maintains the vital concentration gradients that preserve resting membrane potential."
    },
    {
      id: "p1q152",
      question: "What is the primary action of Gastric Inhibitory Peptide (GIP) and Glucagon-Like Peptide-1 (GLP-1), known collectively as incretins?",
      options: [
        "To increase stomach acid secretion",
        "To stimulate insulin secretion from pancreatic beta cells in response to oral carbohydrate intake",
        "To break down structural fats in the duodenum",
        "To inhibit the release of bile"
      ],
      answer: 1,
      explanation: "Incretins are hormones secreted by endocrine cells in the small intestine when nutrients enter. They act on pancreatic beta cells to augment glucose-dependent insulin release before blood glucose spikes, minimizing glycemic excursions."
    },
    {
      id: "p1q153",
      question: "Which component of the nephron establishes the initial segment of the countercurrent medullary osmotic gradient through its high permeability to water and complete lack of active solute transport?",
      options: [
        "The thin descending limb of the loop of Henle",
        "The thin ascending limb",
        "The thick ascending limb",
        "The distal convoluted tubule"
      ],
      answer: 0,
      explanation: "The thin descending limb is highly permeable to water (via aquaporin-1 channels) but possesses no active transport mechanisms for salts. As it dips into the hypertonic medulla, water exits the tubule osmotically, concentrating the tubular fluid."
    },
    {
      id: "p1q154",
      question: "Which primary sensory nucleus of the thalamus acts as the specific obligatory relay center for visual pathways tracking toward the primary visual cortex?",
      options: [
        "Ventral posterolateral nucleus (VPL)",
        "Medial geniculate nucleus (MGN)",
        "Lateral geniculate nucleus (LGN)",
        "Ventral posteromedial nucleus (VPM)"
      ],
      answer: 2,
      explanation: "The LGN of the thalamus receives visual inputs from the optic tracts and projects optic radiations to the primary visual cortex in the occipital lobe. (Memory trick: **L** for **L**ight/Visual; **M** for **M**usic/Auditory)."
    },
    {
      id: "p1q155",
      question: "The pulmonary artery carries which type of blood?",
      options: ["Oxygenated blood from the heart to the lungs", "Deoxygenated blood from the heart to the lungs", "Oxygenated blood from the lungs to the heart", "Deoxygenated blood from the body to the heart"],
      answer: 1,
      explanation: "The pulmonary artery is unique — it's the only artery that carries deoxygenated blood, from the right ventricle to the lungs for oxygenation."
    },
    {
      id: "p1q156",
      question: "Which structural element characterizes the class of joints known as symphyses, such as the pubic symphysis and intervertebral discs?",
      options: ["A fluid-filled synovial cavity", "A bridging plate of fibrocartilage", "A thin sutural ligament", "An industrial hyaline cartilage growth plate"],
      answer: 1,
      explanation: "Symphyses are amphiarthrodial, fibrocartilaginous joints. The presence of dense fibrocartilage allows for limited movement while absorbing immense compressive shock along the body's midline."
    },
    {
      id: "p1q157",
      question: "How many pairs of cranial nerves are there in the human body?",
      options: ["10", "12", "14", "31"],
      answer: 1,
      explanation: "There are 12 pairs of cranial nerves (CN I–XII). They emerge directly from the brain and brainstem."
    },
    {
      id: "p1q158",
      question: "The primary muscle of inspiration is:",
      options: ["Internal intercostals", "External intercostals", "Diaphragm", "Sternocleidomastoid"],
      answer: 2,
      explanation: "The diaphragm is the primary muscle of inspiration. When it contracts and flattens, it increases thoracic volume, creating negative pressure that draws air in."
    },
    {
      id: "p1q159",
      question: "Which enzyme initiates the digestion of proteins within the highly acidic lumen of the stomach, and what is its inactive precursor form?",
      options: [
        "Trypsin; Trypsinogen",
        "Pepsin; Pepsinogen",
        "Chymotrypsin; Chymotrypsinogen",
        "Carboxypeptidase; Procarboxypeptidase"
      ],
      answer: 1,
      explanation: "Chief cells in the gastric pits secrete pepsinogen. The low pH of the stomach (~1.5–2.0) causes pepsinogen to autocleave into active pepsin, an endopeptidase that cuts proteins into smaller peptides."
    },
    {
      id: "p1q160",
      question: "Which physiological mechanism explains why patients with severe emphysema experience chronic dynamic airway collapse during forced exhalation?",
      options: [
        "Loss of alveolar elastic recoil reduces radial traction on non-cartilaginous bronchioles, causing them to collapse as intrapleural pressure becomes positive",
        "Hypertrophy of bronchial smooth muscle",
        "Excessive production of sticky mucus plugs",
        "Spasmodic closure of the epiglottis"
      ],
      answer: 0,
      explanation: "Emphysema destroys the elastic fibers that support and tether the outer walls of small bronchioles. During forced expiration, positive intrapleural pressure compresses these unsupported, floppy airways, trapping air in the lungs."
    },
    {
      id: "p1q161",
      question: "Which part of the neuron receives signals from other neurons?",
      options: ["Axon", "Myelin sheath", "Dendrites", "Schwann cells"],
      answer: 2,
      explanation: "Dendrites are the branching extensions of neurons that receive incoming signals (impulses) from other neurons and conduct them toward the cell body."
    },
    {
      id: "p1q162",
      question: "What specific physiological change initiates the sharp upstroke of Phase 0 in a pacemaker nodal cell action potential?",
      options: [
        "Inward influx of sodium via fast voltage-gated Na+ channels",
        "Inward influx of calcium via voltage-gated L-type $Ca^{2+}$ channels",
        "Outward movement of potassium via rectifier K+ channels",
        "Inward movement of chloride ions"
      ],
      answer: 1,
      explanation: "Unlike ventricular myocytes, SA/AV nodal cells lack functional fast voltage-gated sodium channels. Their Phase 0 depolarization is driven entirely by the slower inward influx of calcium ions through L-type voltage-gated $Ca^{2+}$ channels."
    },
    {
      id: "p1q163",
      question: "Which condition or drug class directly impairs the primary mechanism of action of the osteoclast ruffed border by inhibiting the vacuolar H+-ATPase proton pump?",
      options: ["Statins", "Bifunonal alkylating agents", "Omeprazole at extreme hyper-dose or experimental Bafilomycin variants", "Calcitonin mimics"],
      answer: 2,
      explanation: "Osteoclasts dissolve bone mineral by pumping $H^+$ ions across their ruffled border into the resorption lacuna via a vacuolar-type $H^+$-ATPase. Experimental inhibitors or extreme proton-pump disruptors arrest this acidification process, blocking bone resorption."
    },
    {
      id: "p1q164",
      question: "Which primary component of the human skin represents the main mitotically active germinal layer responsible for generating new keratinocytes?",
      options: ["Stratum corneum", "Stratum granulosum", "Stratum lucidum", "Stratum basale"],
      answer: 3,
      explanation: "The stratum basale (stratum germinativum) is the deepest, single layer of the epidermis. It contains stem cells that divide continuously, pushing daughter cells upward to differentiate through the superficial cutaneous layers."
    },
    {
      id: "p1q165",
      question: "Which cardiac condition causes a pathologically wide splitting of the second heart sound (S2) that does not vary with respiration?",
      options: [
        "Aortic stenosis",
        "Atrial Septal Defect (ASD)",
        "Left bundle branch block",
        "Mitral regurgitation"
      ],
      answer: 1,
      explanation: "An ASD creates a chronic left-to-right shunt that overloads the right ventricle. This keeps right ventricular stroke volume consistently high across both inspiration and expiration, delaying pulmonary valve closure and creating a fixed split S2."
    },
    {
      id: "p1q166",
      question: "What is the primary function of the cerebellum?",
      options: ["Memory and learning", "Balance, coordination, and fine motor control", "Emotional responses", "Visual processing"],
      answer: 1,
      explanation: "The cerebellum coordinates voluntary movements, maintains balance and posture, and regulates fine motor control. Damage causes ataxia and intention tremor."
    },
    {
      id: "p1q167",
      question: "Which type of immunoglobulin is typically configured as a pentamer when secreted into the bloodstream, serving as the primary first responder during an acute primary immune response?",
      options: ["IgG", "IgA", "IgM", "IgE"],
      answer: 2,
      explanation: "IgM is the first antibody isotype secreted during a primary immune response. In its secreted form, it aggregates into a large pentameric structure with 10 antigen-binding sites, making it highly effective at agglutination and complement fixation."
    },
    {
      id: "p1q168",
      question: "Which unique anatomical muscle serves as the primary rotator cuff component responsible for initiating the first 15 degrees of shoulder abduction?",
      options: ["Supraspinatus", "Infraspinatus", "Teres minor", "Subscapularis"],
      answer: 0,
      explanation: "The supraspinatus muscle initiates the first 15 degrees of arm abduction before the deltoid takes over for the remaining range of motion. It is the most commonly injured muscle in rotator cuff tears."
    },
    {
      id: "p1q169",
      question: "Which endocrine cell type secretes Somatostatin within the gastrointestinal mucosa and pancreatic islets to globally inhibit gastrointestinal and endocrine functions?",
      options: ["Alpha cells", "Beta cells", "Delta (D) cells", "G cells"],
      answer: 2,
      explanation: "Delta cells of the pancreas and D cells of the gastrointestinal tract secrete somatostatin, a universal inhibitory paracrine signaling hormone that suppresses the release of insulin, glucagon, gastrin, and growth hormone."
    },
    {
      id: "p1q170",
      question: "What specific microstructural change directly triggers the condition known as rigor mortis after organismal death?",
      options: [
        "A sudden drop in intracellular calcium levels",
        "The complete depletion of cellular ATP, preventing the detachment of the myosin head from the actin binding site",
        "The enzymatic breakdown of actin filaments",
        "Denaturation of troponin complexes"
      ],
      answer: 1,
      explanation: "Rigor mortis occurs because ATP production stops after death. ATP is required to bind to the myosin head to break the actin-myosin cross-bridge. Without ATP, the cross-bridges remain locked in place, freezing the muscle in a rigid state."
    },
    {
      id: "p1q171",
      question: "Which vitamin is essential for calcium absorption from the gut?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      answer: 3,
      explanation: "Vitamin D (calcitriol, the active form) promotes calcium absorption from the intestine and is essential for bone mineralization and calcium homeostasis."
    },
    {
      id: "p1q172",
      question: "Which anatomical branch of the sciatic nerve wraps superficially around the fibular neck, making it vulnerable to compression that causes classic 'foot drop'?",
      options: [
        "Tibial nerve",
        "Common fibular (peroneal) nerve",
        "Femoral nerve",
        "Obturator nerve"
      ],
      answer: 1,
      explanation: "The common fibular nerve curves around the lateral neck of the fibula. Compression or trauma here injures the nerve, paralyzing the deep fibular nerve branch that innervates the anterior compartment muscles responsible for ankle dorsiflexion, causing foot drop."
    },
    {
      id: "p1q173",
      question: "Which primary mechanism describes the action of the endocrine feedback loop during chronic high-dose administration of exogenous glucocorticoids (like prednisone)?",
      options: [
        "Upregulation of endogenous ACTH production",
        "Suppression of both CRH from the hypothalamus and ACTH from the anterior pituitary, leading to bilateral adrenal cortical atrophy",
        "Hypertrophy of the zona glomerulosa",
        "Direct stimulation of endogenous cortisol synthesis"
      ],
      answer: 1,
      explanation: "Exogenous glucocorticoids exert strong negative feedback on the hypothalamus (reducing CRH) and the anterior pituitary (reducing ACTH). The prolonged lack of ACTH stimulation deprives the adrenal zona fasciculata and reticularis of trophic signals, resulting in severe adrenal atrophy."
    },
    {
      id: "p1q174",
      question: "Normal serum sodium level is 135–145 mEq/L. Which major hormone acts as the primary defense against hypernatremia by directly regulating water balance independently of sodium reabsorption?",
      options: ["Aldosterone", "Cortisol", "Antidiuretic Hormone (ADH)", "Atrial Natriuretic Peptide (ANP)"],
      answer: 2,
      explanation: "Hypernatremia spikes plasma osmolarity, which is picked up by hypothalamic osmoreceptors. This drives the release of ADH from the posterior pituitary, opening aquaporins in the collecting ducts to reabsorb free water and dilute the extracellular fluid."
    },
    {
      id: "p1q175",
      question: "The nephron is the functional unit of which organ?",
      options: ["Liver", "Spleen", "Kidney", "Pancreas"],
      answer: 2,
      explanation: "The nephron is the basic structural and functional unit of the kidney. Each kidney contains approximately 1 million nephrons responsible for filtration, reabsorption, and secretion."
    },
    {
      id: "p1q176",
      question: "Which unique anatomical component of the biliary tree marks the junction where the common bile duct and pancreatic duct unite before opening into the duodenum?",
      options: [
        "The cystic duct",
        "The Ampulla of Vater (Hepatopancreatic ampulla)",
        "The Sphincter of Boyden",
        "The Spiral valve of Heister"
      ],
      answer: 1,
      explanation: "The common bile duct and major pancreatic duct merge to form the short Ampulla of Vater. This structures empties through the major duodenal papilla, and its outflow is regulated by the muscular Sphincter of Oddi."
    },
    {
      id: "p1q177",
      question: "Which specific immune cell lines the splenic sinusoids and acts to filter blood, removing damaged erythrocytes and recycling iron components?",
      options: ["Splenic T cells", "Splenic macrophages (Red pulp macrophages)", "Neutrophils", "Megakaryocytes"],
      answer: 1,
      explanation: "The red pulp of the spleen is packed with specialized tissue macrophages. As old, rigid red blood cells squeeze through the narrow endothelial slits of the splenic sinusoids, these macrophages ingest and break down damaged cells, salvaging iron from hemoglobin."
    },
    {
      id: "p1q178",
      question: "Which type of joint allows the greatest range of motion?",
      options: ["Hinge joint", "Pivot joint", "Saddle joint", "Ball-and-socket joint"],
      answer: 3,
      explanation: "Ball-and-socket joints (e.g., hip and shoulder) allow the greatest range of motion in multiple planes: flexion, extension, abduction, adduction, and rotation."
    },
    {
      id: "p1q179",
      question: "The normal serum albumin level is:",
      options: ["1.0–2.0 g/dL", "2.0–3.0 g/dL", "3.5–5.0 g/dL", "6.0–8.0 g/dL"],
      answer: 2,
      explanation: "Normal serum albumin is 3.5–5.0 g/dL. Low albumin (<3.5) may indicate malnutrition, liver disease, or protein-losing conditions and affects drug binding."
    },
    {
      id: "p1q180",
      question: "Which unique molecule forms the main structural component of the thick filaments within a skeletal muscle sarcomere?",
      options: ["Actin", "Myosin", "Tropomyosin", "Nebulin"],
      answer: 1,
      explanation: "Thick filaments are composed of hundreds of individual myosin molecules bundled together. Each myosin molecule features an elongated tail and a globular head with ATP-binding and actin-binding domains."
    },
    {
      id: "p1q181",
      question: "Which type of epithelium lines the lumen of the urinary bladder and ureters, allowing these structures to stretch and distend dramatically?",
      options: [
        "Simple squamous epithelium",
        "Pseudostratified columnar epithelium",
        "Transition epithelium (Urothelium)",
        "Stratified columnar epithelium"
      ],
      answer: 2,
      explanation: "Transition epithelium (urothelium) is specialized to stretch. When the bladder is empty, the cells look cuboidal or domed; as it fills, the cells flatten into a stratified squamous appearance without tearing the barrier."
    },
    {
      id: "p1q182",
      question: "The primary site of drug metabolism is:",
      options: ["Kidney", "Lung", "Liver", "Spleen"],
      answer: 2,
      explanation: "The liver is the primary site of drug metabolism (biotransformation), using cytochrome P450 enzymes to convert drugs into metabolites for excretion."
    },
    {
      id: "p1q183",
      question: "Which brain region contains the vital center regulating autonomic core homeostatic functions like thirst, hunger, core temperature, and circadian rhythms?",
      options: ["Thalamus", "Hypothalamus", "Pons", "Basal ganglia"],
      answer: 1,
      explanation: "The hypothalamus integrates sensory inputs with autonomic and endocrine outputs. It contains dedicated nuclei that monitor blood osmolarity (thirst), blood glucose (hunger), temperature, and light cues via the suprachiasmatic nucleus."
    },
    {
      id: "p1q184",
      question: "What is the primary action of the active form of the enzyme renin once it is released into the systemic circulation by granular juxtaglomerular cells?",
      options: [
        "Converts Angiotensin I directly to Angiotensin II",
        "Cleaves plasma Angiotensinogen into the decapeptide Angiotensin I",
        "Stimulates aldosterone release from the kidney directly",
        "Causes generalized systemic vasodilation"
      ],
      answer: 1,
      explanation: "Renin is an aspartyl protease secreted by the kidneys. It acts exclusively to cleave circulating angiotensinogen (produced by the liver) into angiotensin I, which is later converted to angiotensin II by Angiotensin-Converting Enzyme (ACE) in the lungs."
    },
    {
      id: "p1q185",
      question: "Which type of glial cell acts as the primary resident macrophage of the central nervous system, surveying for damage and performing phagocytosis?",
      options: ["Astrocytes", "Microglia", "Oligodendrocytes", "Ependymal cells"],
      answer: 1,
      explanation: "Microglia are specialized myeloid-derived immune cells resident within the CNS. They become activated in response to injury or infection, transforming into mobile phagocytic cells that clear debris."
    },
    {
      id: "p1q186",
      question: "Which unique anatomical component of the inner ear contains the hair cells responsible for converting mechanical sound vibrations into electrical neural impulses for hearing?",
      options: ["The Macula", "The Crista ampullaris", "The Organ of Corti (Spiral organ)", "The Saccule"],
      answer: 2,
      explanation: "The Organ of Corti rests on the basilar membrane within the cochlea. Sound waves deform the basilar membrane, causing hair cell stereocilia to sheer against the tectorial membrane, opening mechanically gated potassium channels that depolarize the hair cell."
    },
    {
      id: "p1q187",
      question: "Which chamber of the heart pumps oxygenated blood to the systemic circulation?",
      options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
      answer: 3,
      explanation: "The left ventricle pumps oxygenated blood through the aorta to the entire systemic circulation. It has the thickest myocardium due to this high-pressure demand."
    },
    {
      id: "p1q188",
      question: "Normal adult respiratory rate is 12–20 breaths per minute. Which neurological structure establishes the basic automatic rhythm of resting respiration?",
      options: ["The Cerebellum", "The Medulla oblongata", "The Thalamus", "The Frontal motor cortex"],
      answer: 1,
      explanation: "The respiratory center is located within the medulla oblongata and pons. The dorsal respiratory group (DRG) in the medulla contains pacemaking neurons that generate the basic resting inspiratory rhythm."
    },
    {
      id: "p1q189",
      question: "Which specialized protein composes the primary matrix structural element of elastic cartilage, allowing structures like the pinna and epiglottis to bend and snap back into shape?",
      options: ["Type I Collagen", "Elastin", "Keratin", "Fibronectin"],
      answer: 1,
      explanation: "Elastic cartilage contains dense networks of branching elastin fibers interspersed within its proteoglycan matrix, giving it exceptional flexibility and elastic recoil compared to hyaline cartilage."
    },
    {
      id: "p1q190",
      question: "Which layer of the adrenal cortex is responsible for synthesizing and secreting the mineralocorticoid hormone aldosterone?",
      options: [
        "Zona glomerulosa",
        "Zona fasciculata",
        "Zona reticularis",
        "Adrenal medulla"
      ],
      answer: 0,
      explanation: "The adrenal cortex is structured into three distinct cellular zones: the outer Zona glomerulosa (produces aldosterone), the middle Zona fasciculata (glucocorticoids/cortisol), and the inner Zona reticularis (androgens)."
    },
    {
      id: "p1q191",
      question: "Which primary factor triggers the release of Parathyroid Hormone (PTH) from the chief cells of the parathyroid glands?",
      options: [
        "Elevated blood calcium levels",
        "A drop in ionized serum calcium concentration sensed by calcium-sensing receptors (CaSR)",
        "High blood pressure",
        "Elevated thyroid hormone concentrations"
      ],
      answer: 1,
      explanation: "The chief cells possess G-protein coupled Calcium-Sensing Receptors (CaSR) on their surface. When ionized calcium levels drop, these receptors trigger a signaling cascade that stimulates the exocytosis of PTH to restore calcium balance."
    },
    {
      id: "p1q192",
      question: "Which hormone is secreted by the delta cells of the pancreatic islets to act as a local paracrine inhibitor of both insulin and glucagon secretion?",
      options: ["Somatostatin", "Gastrin", "Pancreatic polypeptide", "Amylin"],
      answer: 0,
      explanation: "Somatostatin is a potent inhibitory peptide secreted by pancreatic delta ($D$) cells. It acts locally via paracrine mechanisms to suppress neighboring alpha and beta cell activity, fine-tuning fuel balance."
    },
    {
      id: "p1q193",
      question: "Which anatomical structure prevents food from entering the trachea?",
      options: ["Uvula", "Soft palate", "Epiglottis", "Vocal cords"],
      answer: 2,
      explanation: "The epiglottis is a cartilaginous flap that closes over the glottis during swallowing, routing food and liquid into the esophagus instead of the trachea."
    },
    {
      id: "p1q194",
      question: "Which anatomical valve regulates the passage of materials from the small intestine into the large intestine, preventing bacterial reflux?",
      options: ["Pyloric sphincter", "Ileocecal valve", "Sphincter of Oddi", "Internal anal sphincter"],
      answer: 1,
      explanation: "The ileocecal valve separates the distal ileum from the cecum. It remains closed to prevent contents from the bacteria-rich colon from backing up into the sterile small intestine, opening only when peristaltic waves arrive."
    },
    {
      id: "p1q195",
      question: "The human body has how many pairs of chromosomes?",
      options: ["22 pairs", "23 pairs", "24 pairs", "46 pairs"],
      answer: 1,
      explanation: "Humans have 23 pairs of chromosomes (46 total): 22 autosomal pairs and 1 pair of sex chromosomes (XX female, XY male)."
    },
    {
      id: "p1q196",
      question: "Which specific immune cell acts as a vital link between innate and adaptive immunity by capturing antigens, migrating to lymph nodes, and presenting them to naive T cells?",
      options: ["Neutrophils", "Dendritic cells", "Natural Killer cells", "Plasma cells"],
      answer: 1,
      explanation: "Dendritic cells are the most efficient professional antigen-presenting cells (APCs). They populate peripheral tissues, engulf foreign antigens, and migrate to secondary lymphoid organs where they express high levels of MHC Class II and co-stimulatory molecules to activate naive T helper cells."
    },
    {
      id: "p1q197",
      question: "Which mechanical phase of the cardiac cycle corresponds to the first heart sound (S1, 'lub')?",
      options: [
        "Closure of the semilunar valves at the end of systole",
        "Closure of the atrioventricular (mitral and tricuspid) valves at the onset of ventricular systole",
        "Opening of the aortic valve",
        "Rapid filling of the ventricles"
      ],
      answer: 1,
      explanation: "S1 is generated by the vibrations set off by the sudden closure of the mitral and tricuspid valves as ventricular pressure exceeds atrial pressure at the start of ventricular contraction."
    },
    {
      id: "p1q198",
      question: "Which hormone acts directly on the principal cells of the renal collecting ducts to upregulate sodium reabsorption and potassium excretion?",
      options: ["Cortisol", "Aldosterone", "Antidiuretic hormone", "Atrial natriuretic peptide"],
      answer: 1,
      explanation: "Aldosterone is a steroid hormone that binds to mineralocorticoid receptors in principal cells, increasing the synthesis and expression of apical Epithelial Sodium Channels (ENaC) and basolateral $Na^+/K^+$ ATPase pumps."
    },
    {
      id: "p1q199",
      question: "Which unique compound binds to and transports oxygen within skeletal muscle cells, providing a local oxygen reserve?",
      options: ["Hemoglobin", "Myoglobin", "Cytochrome c", "Ferritin"],
      answer: 1,
      explanation: "Myoglobin is a monomeric hemoprotein found exclusively in muscle tissue. It has a significantly higher affinity for oxygen than hemoglobin, allowing it to hold onto oxygen and release it only during severe hypoxic conditions like strenuous exercise."
    },
    {
      id: "p1q200",
      question: "The normal adult respiratory rate is 12–20 breaths per minute. Which principal muscle drives quiet, resting inspiration?",
      options: ["External intercostals", "Internal intercostals", "Diaphragm", "Rectus abdominis"],
      answer: 2,
      explanation: "The diaphragm supplies roughly 75% of the inspiratory volume during quiet breathing. Contraction flattens the dome, increasing the vertical dimension of the thoracic cavity and dropping intrapulmonary pressure."
    },
    {
      id: "p1q201",
      question: "Which hormone stimulates breast milk production?",
      options: ["Estrogen", "Oxytocin", "Prolactin", "Progesterone"],
      answer: 2,
      explanation: "Prolactin from the anterior pituitary stimulates milk production (lactogenesis). Oxytocin causes milk ejection (letdown reflex) during breastfeeding."
    },
    {
      id: "p1q202",
      question: "Which primary structural component lines the interior of blood vessels, providing a smooth, non-thrombogenic surface?",
      options: [
        "Mesothelium",
        "Endothelium (simple squamous epithelium)",
        "Stratified cuboidal epithelium",
        "Dense regular connective tissue"
      ],
      answer: 1,
      explanation: "The endothelium is a continuous single layer of simple squamous epithelial cells lining the entire vascular system. It plays key roles in preventing coagulation, regulating blood flow, and managing vessel permeability."
    },
    {
      id: "p1q203",
      question: "Which anatomical structure connects the stomach to the small intestine?",
      options: ["Pyloric sphincter", "Cardiac sphincter", "Ileocecal valve", "Sphincter of Oddi"],
      answer: 0,
      explanation: "The pyloric sphincter regulates the passage of partially digested food (chyme) from the stomach into the duodenum of the small intestine."
    },
    {
      id: "p1q204",
      question: "Which component of the neuron forms the insulated wrapping that dramatically accelerates action potential propagation via saltatory conduction?",
      options: ["Axon hillock", "Dendrite spine", "Myelin sheath", "Node of Ranvier"],
      answer: 2,
      explanation: "The myelin sheath is a lipid-rich structural wrap produced by oligodendrocytes (CNS) or Schwann cells (PNS). It prevents charge leakage across the membrane, forcing the action potential to skip from one node of Ranvier to the next."
    },
    {
      id: "p1q205",
      question: "Which blood type is the universal donor for red blood cells?",
      options: ["AB+", "O-", "O+", "AB-"],
      answer: 1,
      explanation: "O negative (O-) is the universal red blood cell donor because it lacks A, B, and Rh antigens, minimizing the risk of transfusion reactions."
    },
    {
      id: "p1q206",
      question: "Which primary hormone is secreted by the pineal gland to coordinate circadian sleep-wake cycles with environmental light patterns?",
      options: ["Serotonin", "Melatonin", "Cortisol", "Growth hormone"],
      answer: 1,
      explanation: "The pineal gland synthesizes melatonin from tryptophan. Secretion increases in darkness and is suppressed by blue light striking the retina, helping to sync the body's internal clock."
    },
    {
      id: "p1q207",
      question: "Which cranial nerve is responsible for transmitting sound and balance information from the inner ear to the brain?",
      options: ["CN VII (Facial)", "CN VIII (Vestibulocochlear)", "CN IX (Glossopharyngeal)", "CN X (Vagus)"],
      answer: 1,
      explanation: "CN VIII carries sensory information from the cochlea (hearing) and vestibular apparatus (balance and equilibrium) into the brainstem."
    },
    {
      id: "p1q208",
      question: "The normal pH range of arterial blood is:",
      options: ["7.15–7.25", "7.25–7.35", "7.35–7.45", "7.45–7.55"],
      answer: 2,
      explanation: "Normal arterial blood pH is 7.35–7.45. Values below 7.35 indicate acidosis; values above 7.45 indicate alkalosis."
    },
    {
      id: "p1q209",
      question: "Which valve separates the right ventricle from the pulmonary trunk?",
      options: ["Tricuspid valve", "Mitral valve", "Pulmonary valve", "Aortic valve"],
      answer: 2,
      explanation: "The pulmonary semilunar valve sits at the exit of the right ventricle, preventing the backflow of deoxygenated blood from the pulmonary trunk during ventricular diastole."
    },
    {
      id: "p1q210",
      question: "Which bone cell type is a multinucleated phagocytic cell derived from monocyte-macrophage lineages that actively resorbs bone matrix?",
      options: ["Osteoblast", "Osteoclast", "Osteocyte", "Osteoprogenitor cell"],
      answer: 1,
      explanation: "Osteoclasts are specialized bone-destroying cells. They form a ruffled border against the bone and secrete acid and lysosomal enzymes to dissolve mineralized bone matrix during remodeling."
    },
    {
      id: "p1q211",
      question: "Which type of connective tissue contains a fluid extracellular matrix and functions to transport nutrients, wastes, and defensive cells throughout the body?",
      options: ["Areolar tissue", "Adipose tissue", "Lymphatic tissue", "Blood"],
      answer: 3,
      explanation: "Blood is classified as a fluid connective tissue because it consists of formed elements (cells) suspended within a liquid extracellular matrix called plasma."
    },
    {
      id: "p1q212",
      question: "What is the normal adult heart rate range at rest?",
      options: ["40–60 bpm", "60–100 bpm", "100–120 bpm", "50–80 bpm"],
      answer: 1,
      explanation: "Normal adult resting heart rate is 60–100 bpm. Rates below 60 signal bradycardia, while rates above 100 signal tachycardia."
    },
    {
      id: "p1q213",
      question: "Which organ contains the unique structural components known as crypts of Lieberkühn and Peyer's patches?",
      options: ["Stomach", "Small intestine", "Esophagus", "Gallbladder"],
      answer: 1,
      explanation: "The small intestine features crypts of Lieberkühn (intestinal glands secreting digestive juices) and Peyer's patches (aggregated lymphoid nodules primarily located in the ileum for immune surveillance)."
    },
    {
      id: "p1q214",
      question: "Which enzyme begins carbohydrate digestion in the mouth?",
      options: ["Pepsin", "Lipase", "Salivary amylase", "Trypsin"],
      answer: 2,
      explanation: "Salivary amylase (ptyalin) in saliva begins breaking down starch (polysaccharides) into maltose in the mouth — the first step of carbohydrate digestion."
    },
    {
      id: "p1q215",
      question: "Which hormone decreases blood glucose levels?",
      options: ["Glucagon", "Cortisol", "Insulin", "Epinephrine"],
      answer: 2,
      explanation: "Insulin, produced by pancreatic beta cells, lowers blood glucose by promoting cellular glucose uptake and inhibiting glucose production in the liver."
    },
    {
      id: "p1q216",
      question: "Which vascular layer is primarily composed of smooth muscle and elastic fibers, allowing arteries to constrict or dilate?",
      options: ["Tunica intima", "Tunica media", "Tunica externa", "Endothelium"],
      answer: 1,
      explanation: "The tunica media is the middle coat of blood vessels. It is significantly thicker in arteries than veins and is composed of smooth muscle cells and elastic sheets controlled by the sympathetic nervous system."
    },
    {
      id: "p1q217",
      question: "Which leukocyte is the most abundant type in a normal adult WBC count and acts as the primary first responder to bacterial infections?",
      options: ["Lymphocyte", "Monocyte", "Neutrophil", "Eosinophil"],
      answer: 2,
      explanation: "Neutrophils make up roughly 50–70% of circulating white blood cells. They migrate rapidly to sites of acute bacterial infection to phagocytose pathogens."
    },
    {
      id: "p1q218",
      question: "Which structure in the kidney filters blood under pressure?",
      options: ["Loop of Henle", "Collecting duct", "Bowman's capsule/Glomerulus", "Proximal tubule"],
      answer: 2,
      explanation: "The glomerulus (within Bowman's capsule) is a knot of capillaries where blood is filtered under pressure — the first step in urine formation."
    },
    {
      id: "p1q219",
      question: "Which hormone is produced by the thyroid gland?",
      options: ["PTH (parathyroid hormone)", "Calcitonin and T3/T4", "ACTH", "FSH"],
      answer: 1,
      explanation: "The thyroid gland produces thyroxine (T4), triiodothyronine (T3), and calcitonin. T3 and T4 regulate metabolism; calcitonin lowers blood calcium."
    },
    {
      id: "p1q220",
      question: "The normal platelet count range is:",
      options: ["50,000–100,000/μL", "100,000–150,000/μL", "150,000–400,000/μL", "500,000–600,000/μL"],
      answer: 2,
      explanation: "Normal platelet count is 150,000–400,000/μL. Thrombocytopenia (<150,000) increases bleeding risk; thrombocytosis (>400,000) increases clotting risk."
    },
    {
      id: "p1q221",
      question: "Which part of the brain is responsible for memory and learning?",
      options: ["Cerebellum", "Basal ganglia", "Hippocampus", "Medulla"],
      answer: 2,
      explanation: "The hippocampus, located in the medial temporal lobe, is critical for forming new memories (long-term potentiation) and spatial navigation."
    },
    {
      id: "p1q222",
      question: "Which structure divides the thoracic cavity from the abdominal cavity?",
      options: ["Mediastinum", "Pleura", "Diaphragm", "Pericardium"],
      answer: 2,
      explanation: "The diaphragm is the dome-shaped muscle separating the thoracic cavity from the abdominal cavity. It is the primary muscle of respiration."
    },
    {
      id: "p1q223",
      question: "Which organ is the primary site of hematopoiesis in a normal adult?",
      options: ["Liver", "Spleen", "Red bone marrow", "Thymus"],
      answer: 2,
      explanation: "In adults, red bone marrow (found in flat bones like the pelvis and sternum, and the ends of long bones) is the exclusive site for normal blood cell production."
    },
    {
      id: "p1q224",
      question: "Which hormone is secreted by the alpha cells of the pancreas to raise blood glucose levels during fasting states?",
      options: ["Insulin", "Glucagon", "Somatostatin", "Cortisol"],
      answer: 1,
      explanation: "Glucagon is released in response to low blood glucose. It acts primarily on the liver to stimulate glycogen breakdown (glycogenolysis) and glucose synthesis (gluconeogenesis)."
    },
    {
      id: "p1q225",
      question: "The normal WBC count in adults is:",
      options: ["1,000–3,000/μL", "4,500–11,000/μL", "12,000–15,000/μL", "15,000–20,000/μL"],
      answer: 1,
      explanation: "Normal WBC count is 4,500–11,000/μL. Leukocytosis (>11,000) suggests infection/inflammation; leukopenia (<4,500) indicates immunosuppression."
    },
    {
      id: "p1q226",
      question: "Which enzyme is responsible for breaking down hydrogen peroxide into water and oxygen within cell peroxisomes?",
      options: ["Amylase", "Catalase", "Pepsin", "Lipase"],
      answer: 1,
      explanation: "Catalase is a key antioxidant enzyme found in peroxisomes. It protects cells by rapidly decomposing toxic hydrogen peroxide ($H_2O_2$) into safe water and oxygen."
    },
    {
      id: "p1q227",
      question: "The tidal volume in a normal adult at rest is approximately:",
      options: ["200 mL", "500 mL", "1000 mL", "1500 mL"],
      answer: 1,
      explanation: "Normal tidal volume (air moved in one breath at rest) is approximately 500 mL (0.5 L). Total lung capacity is about 6000 mL."
    },
    {
      id: "p1q228",
      question: "Which brain structure acts as the principal gatekeeper and sensory relay station, filtering and routing all incoming sensory data (except smell) to the cerebral cortex?",
      options: ["Hypothalamus", "Thalamus", "Basal ganglia", "Pons"],
      answer: 1,
      explanation: "The thalamus acts as the brain's central switching station. It processes, sorts, and relays sensory inputs from the body to their correct destinations in the cortex."
    },
    {
      id: "p1q229",
      question: "Which structural element characterizes the basic contracting unit of a skeletal muscle fiber, extending from one Z disc to the next?",
      options: ["Sarcolemma", "Sarcomere", "Sarcoplasm", "Myofibril"],
      answer: 1,
      explanation: "The sarcomere is the functional unit of striated muscle tissue, composed of organized arrangements of actin (thin) and myosin (thick) filaments."
    },
    {
      id: "p1q230",
      question: "Which component of the eye contains the photoreceptor cells (rods and cones) and represents the inner nervous tunic layer?",
      options: ["Sclera", "Choroid", "Retina", "Cornea"],
      answer: 2,
      explanation: "The retina forms the deep neural layer of the eye where light is captured and translated into nerve signals carried out by the optic nerve."
    },
    {
      id: "p1q231",
      question: "The functional residual capacity (FRC) is the volume of air remaining in the lungs after:",
      options: ["Forced expiration", "Normal (tidal) expiration", "Normal inspiration", "Maximum inspiration"],
      answer: 1,
      explanation: "FRC is the lung volume remaining after a normal (passive/tidal) expiration — approximately 2.5 L. It equals ERV + RV and maintains alveolar patency."
    },
    {
      id: "p1q232",
      question: "Which major blood vessel returns deoxygenated blood from the upper half of the body directly into the right atrium?",
      options: [
        "Inferior vena cava",
        "Superior vena cava",
        "Pulmonary vein",
        "Coronary sinus"
      ],
      answer: 1,
      explanation: "The superior vena cava drains deoxygenated blood from the head, neck, arms, and chest into the upper aspect of the right atrium."
    },
    {
      id: "p1q233",
      question: "Which hormone is secreted in response to high blood glucose levels?",
      options: ["Low blood glucose", "High blood glucose", "Low blood pressure", "High cortisol"],
      answer: 1,
      explanation: "Beta cells of the pancreas detect elevated blood glucose after meals and secrete insulin to facilitate glucose uptake by cells, especially muscle and liver."
    },
    {
      id: "p1q234",
      question: "Which primary cell type is responsible for producing the structural fibers and ground substance that make up the extracellular matrix of loose connective tissue?",
      options: ["Adipocytes", "Fibroblasts", "Chondrocytes", "Macrophages"],
      answer: 1,
      explanation: "Fibroblasts are the most abundant resident cells in connective tissue proper. They synthesize and secrete collagen, elastic fibers, and proteoglycans."
    },
    {
      id: "p1q235",
      question: "Which type of blood vessel features walls that are only a single endothelial cell thick, specializing entirely in nutrient and gas exchange?",
      options: ["Arterioles", "Venules", "Capillaries", "Muscular arteries"],
      answer: 2,
      explanation: "Capillaries lack structural smooth muscle and tunica externa layers. Their thin, single-cell walls maximize the diffusion of gases and nutrients between blood and tissues."
    },
    {
      id: "p1q236",
      question: "The primary function of the spleen includes:",
      options: ["Producing digestive enzymes", "Filtering blood and destroying old RBCs", "Producing bile", "Regulating blood glucose"],
      answer: 1,
      explanation: "The spleen filters blood, removes old/damaged red blood cells, stores platelets, and plays a key role in immune responses against blood-borne pathogens."
    },
    {
      id: "p1q237",
      question: "Which vascular pathway carries nutrient-rich, deoxygenated blood from the digestive organs and spleen directly to the liver before it joins general systemic circulation?",
      options: [
        "Systemic arterial system",
        "Hepatic portal system",
        "Pulmonary circuit",
        "Lymphatic system"
      ],
      answer: 1,
      explanation: "The hepatic portal system channels venous blood from the GI tract to the liver's capillary beds (sinusoids), allowing hepatocytes to filter toxins and store nutrients."
    },
    {
      id: "p1q238",
      question: "Which cranial nerve innervates the muscles of facial expression, such that damage results in Bell's Palsy?",
      options: ["CN V (Trigeminal)", "CN VII (Facial)", "CN IX (Glossopharyngeal)", "CN XII (Hypoglossal)"],
      answer: 1,
      explanation: "The Facial nerve (CN VII) supplies motor innervation to the muscles of facial expression. Injury yields weakness or flaccid paralysis on the affected side of the face."
    },
    {
      id: "p1q239",
      question: "The outer layer of the skin is called:",
      options: ["Dermis", "Hypodermis", "Epidermis", "Subcutaneous layer"],
      answer: 2,
      explanation: "The epidermis is the outermost avascular layer of skin, composed mainly of keratinocytes. It provides a waterproof barrier and contains melanocytes for pigmentation."
    },
    {
      id: "p1q240",
      question: "Which hormone acts to lower blood calcium levels by turning off osteoclastic bone breakdown and increasing renal calcium clearance?",
      options: ["Parathyroid hormone (PTH)", "Calcitonin", "Thyroxine", "Aldosterone"],
      answer: 1,
      explanation: "Calcitonin is released by thyroid parafollicular cells when blood calcium runs high, counteracting PTH to protect bone mineral structures."
    },
    {
      id: "p1q241",
      question: "What is the name of the joint between atlas (C1) and axis (C2)?",
      options: ["Atlanto-occipital joint", "Atlantoaxial joint", "Facet joint", "Intervertebral joint"],
      answer: 1,
      explanation: "The atlantoaxial joint (C1–C2) is a pivot joint that allows rotation of the head (saying 'no'). The atlanto-occipital joint allows nodding (saying 'yes')."
    },
    {
      id: "p1q242",
      question: "Which anatomical structure represents the thick, fibrous double-layered sac that completely encloses and protects the heart muscle?",
      options: ["Endocardium", "Myocardium", "Pericardium", "Pleura"],
      answer: 2,
      explanation: "The pericardium features an outer tough fibrous coat and an inner serous coat that secretes lubricating fluid into the pericardial space to reduce friction."
    },
    {
      id: "p1q243",
      question: "Which primary buffer system stabilizes pH inside the intracellular fluid compartment?",
      options: [
        "Bicarbonate buffer system",
        "Phosphate buffer system",
        "Plasma protein buffer system",
        "Hemoglobin buffer system"
      ],
      answer: 1,
      explanation: "While the bicarbonate system dominates extracellular fluids, the phosphate system ($H_2PO_4^- / HPO_4^{2-}$) is highly concentrated and effective at buffering pH inside cells."
    },
    {
      id: "p1q244",
      question: "Which unique lymphatic structures absorb dietary fats and lipid-soluble vitamins within the villi of the small intestine?",
      options: ["Peyer's patches", "Lacteals", "Lymph nodes", "Splenic cords"],
      answer: 1,
      explanation: "Lacteals are specialized lymphatic capillaries in the intestinal villi. They pick up large milky lipid packages (chylomicrons) that are too large to pass through blood endothelia."
    },
    {
      id: "p1q245",
      question: "The primary function of the hypothalamus is:",
      options: ["Processing sensory information", "Controlling voluntary movement", "Regulating homeostasis, linking nervous and endocrine systems", "Visual processing"],
      answer: 2,
      explanation: "The hypothalamus is the body's master regulator, controlling temperature, hunger, thirst, sleep, and hormonal output via the pituitary gland — linking the nervous and endocrine systems."
    },
    {
      id: "p1q246",
      question: "Which cranial nerve provides the vital motor pathways that carry parasympathetic signals down to the heart, lungs, and upper abdominal organs to slow heart rate?",
      options: ["CN III", "CN VII", "CN IX", "CN X (Vagus nerve)"],
      answer: 3,
      explanation: "The Vagus nerve handles most of the body's resting parasympathetic outflow, managing visceral reflexes and slowing the sinoatrial node's firing rate."
    },
    {
      id: "p1q247",
      question: "Which hormone is produced by the posterior pituitary gland?",
      options: ["Growth hormone", "TSH", "ADH (Vasopressin)", "ACTH"],
      answer: 2,
      explanation: "ADH (antidiuretic hormone/vasopressin) and oxytocin are produced in the hypothalamus but stored and released by the posterior pituitary gland."
    },
    {
      id: "p1q248",
      question: "Which structural feature of the small intestine mucosa maximizes the absolute surface area available for nutrient digestion and absorption?",
      options: [
        "Rugae and oblique muscular layers",
        "Plicae circulares, villi, and microvilli (brush border)",
        "Haustra and teniae coli",
        "Ciliated pseudostratified coats"
      ],
      answer: 1,
      explanation: "The combination of circular folds (plicae), finger-like projections (villi), and cellular microscopic folds (microvilli) magnifies the small intestine's absorbing surface area over 600-fold."
    },
    {
      id: "p1q249",
      question: "The brachial plexus originates from spinal levels:",
      options: ["C1–C4", "C5–T1", "T1–T6", "L1–L5"],
      answer: 1,
      explanation: "The brachial plexus arises from ventral rami of C5 to T1 and innervates the shoulder, arm, forearm, and hand."
    },
    {
      id: "p1q250",
      question: "Which specific phase of a neuronal action potential is driven by the rapid, massive opening of voltage-gated potassium channels alongside the inactivation of sodium channels?",
      options: ["Depolarization", "Repolarization", "Hyperpolarization", "Resting phase"],
      answer: 1,
      explanation: "Repolarization resets the membrane potential. Sodium channels close, and voltage-gated potassium channels open wide, driving an outward rush of $K^+$ ions that brings the cell back to a negative charge."
    },
    {
      id: "p1q251",
      question: "Which primary hormone is secreted by the corpus luteum within the ovary following ovulation to prepare and stabilize the endometrial lining for a potential pregnancy?",
      options: ["Estrogen", "Progesterone", "Luteinizing hormone", "Follicle-stimulating hormone"],
      answer: 1,
      explanation: "Progesterone dominates the post-ovulatory luteal phase, turning the endometrial lining into a vascular, nutrient-rich bed ready for an embryo."
    },
    {
      id: "p1q252",
      question: "Where is cerebrospinal fluid (CSF) produced?",
      options: ["Subarachnoid space", "Dura mater", "Choroid plexus", "Arachnoid mater"],
      answer: 2,
      explanation: "CSF is produced by the choroid plexus in the brain's ventricles, circulates through the ventricular system and subarachnoid space, and is reabsorbed by arachnoid villi."
    },
    {
      id: "p1q253",
      question: "Which unique anatomical component of the sperm contains abundant mitochondria to generate the ATP required for flagellar locomotion?",
      options: ["The head", "The acrosome", "The midpiece", "The principal piece"],
      answer: 2,
      explanation: "The sperm midpiece contains tightly spiraled mitochondria wrapped around the axial filament, fueling the tail's swimming motions."
    },
    {
      id: "p1q254",
      question: "Which chemical enzyme is found inside tears, saliva, and nasal mucus, providing innate protection by actively cleaving bacterial peptidoglycan cell walls?",
      options: ["Amylase", "Lysozyme", "Pepsin", "Trypsin"],
      answer: 1,
      explanation: "Lysozyme is an antimicrobial enzyme that breaks the chemical bonds in bacterial cell walls, offering an immediate barrier against infections on exposed membranes."
    },
    {
      id: "p1q255",
      question: "The mitral valve regurgitation causes blood to flow back into:",
      options: ["Right atrium", "Left atrium", "Aorta", "Pulmonary artery"],
      answer: 1,
      explanation: "Mitral valve regurgitation allows backflow of blood from the left ventricle into the left atrium during systole, causing a pansystolic murmur."
    },
    {
      id: "p1q256",
      question: "Which specific immune cell targets parasite infections and releases cytotoxic granules from its bright red-staining vesicles during an allergic response?",
      options: ["Basophil", "Eosinophil", "Neutrophil", "Monocyte"],
      answer: 1,
      explanation: "Eosinophils feature large granules that stain bright red with acidic dyes. They specialize in destroying large, non-phagocytosable parasites (like helminth worms) by dumping toxic proteins onto them."
    },
    {
      id: "p1q257",
      question: "Which type of connective tissue sheet wraps individual muscle fibers, isolating them electrically from neighboring muscle cells?",
      options: ["Epimysium", "Perimysium", "Endomysium", "Deep fascia"],
      answer: 2,
      explanation: "The endomysium is a delicate layer of connective tissue that covers each single muscle cell. The perimysium organizes fibers into bundles (fascicles), and the epimysium wraps the entire muscle mass."
    },
    {
      id: "p1q258",
      question: "The primary site of gas exchange in the lungs is:",
      options: ["Bronchi", "Bronchioles", "Alveoli", "Trachea"],
      answer: 2,
      explanation: "Alveoli are tiny air sacs surrounded by capillaries where oxygen diffuses into blood and CO2 diffuses out. Their thin walls and large surface area facilitate efficient gas exchange."
    },
    {
      id: "p1q259",
      question: "Which primary structural element anchors the free cusps of the atrioventricular heart valves to the papillary muscles, preventing them from flipping backward during ventricular contraction?",
      options: ["Teniae coli", "Chordae tendineae", "Intercalated discs", "Pectinate muscles"],
      answer: 1,
      explanation: "The chordae tendineae ('heart strings') anchor the valve leaflets to the ventricular walls. When the ventricle contracts, the papillary muscles pull down on these cords to keep the valve from prolapsing into the atrium under high pressure."
    },
    {
      id: "p1q260",
      question: "Which endocrine gland sits in the sella turcica of the sphenoid bone and is directly connected to the hypothalamus via the infundibular stalk?",
      options: ["Thyroid gland", "Adrenal gland", "Pituitary gland", "Thymus"],
      answer: 2,
      explanation: "The pituitary gland rests securely within the sphenoid bone's sella turcica, directly beneath the hypothalamus which coordinates its hormonal outputs."
    },
    {
      id: "p1q261",
      question: "Which artery is most commonly palpated to check a pulse in an unconscious adult?",
      options: ["Radial artery", "Brachial artery", "Carotid artery", "Femoral artery"],
      answer: 2,
      explanation: "The carotid artery is the preferred site for pulse assessment in unconscious adults because it is large and accessible. The radial pulse is used in conscious patients."
    },
    {
      id: "p1q262",
      question: "Which vascular adaptation in the fetal skull represents the large, diamond-shaped fibrous space at the intersection of the coronal and sagittal sutures that normally closes by 18 months of age?",
      options: [
        "Posterior fontanelle",
        "Anterior fontanelle",
        "Mastoid fontanelle",
        "Sphenoid fontanelle"
      ],
      answer: 1,
      explanation: "The anterior fontanelle is the largest 'soft spot' on an infant's head. It allows the skull bones to flex during birth and expands to accommodate early brain growth."
    },
    {
      id: "p1q263",
      question: "Which unique chemical component of the gastric juice is essential for the future absorption of Vitamin B12 within the terminal ileum?",
      options: ["Hydrochloric acid", "Pepsinogen", "Intrinsic factor", "Gastrin"],
      answer: 2,
      explanation: "Intrinsic factor is a glycoprotein produced by gastric parietal cells. It binds to dietary Vitamin B12, shielding it from destruction until it reaches specialized receptors in the terminal ileum for absorption."
    },
    {
      id: "p1q264",
      question: "The lymph drainage from the entire lower body and the left upper quadrant returns to general circulation via which major duct?",
      options: [
        "Right lymphatic duct",
        "Thoracic duct (Left lymphatic duct)",
        "Superior vena cava duct",
        "Cisterna chyli branch"
      ],
      answer: 1,
      explanation: "The thoracic duct drains the majority of the body's lymph, emptying directly into the junction of the left internal jugular and left subclavian veins. The right lymphatic duct handles only the upper right quadrant."
    },
    {
      id: "p1q265",
      question: "The lymphatic system drains into which vein?",
      options: ["Jugular vein", "Subclavian vein", "Femoral vein", "Iliac vein"],
      answer: 1,
      explanation: "Lymph ultimately drains into the subclavian veins (via the thoracic duct on the left and right lymphatic duct on the right), returning fluid to systemic circulation."
    },
    {
      id: "p1q266",
      question: "Which primary anatomical structure represents the non-functional fibrous remnant of the fetal ductus arteriosus within the adult thorax?",
      options: [
        "Ligamentum venosum",
        "Fossa ovalis",
        "Ligamentum arteriosum",
        "Ligamentum teres"
      ],
      answer: 2,
      explanation: "The ductus arteriosus is a fetal vessel routing blood from the pulmonary trunk directly into the aorta. At birth, it constricts and eventually fibroses into the adult ligamentum arteriosum."
    },
    {
      id: "p1q267",
      question: "Which mechanical dynamic characterizes an isometric muscle contraction?",
      options: [
        "The muscle shortens while keeping tension constant",
        "The muscle changes length under changing tension",
        "The muscle develops structural tension but stays at a fixed length",
        "The muscle elongates under relaxation forces"
      ],
      answer: 2,
      explanation: "In an isometric contraction, muscle tension increases but the total muscle length does not change because the resistance matches or exceeds the force generated (e.g., pushing against a solid wall)."
    },
    {
      id: "p1q268",
      question: "The sympathetic nervous system originates from which spinal cord region?",
      options: ["Cranial and sacral", "Cervical only", "Thoracolumbar (T1–L2)", "Sacral only"],
      answer: 2,
      explanation: "The sympathetic (thoracolumbar) division originates from T1–L2. The parasympathetic (craniosacral) division originates from the brainstem and S2–S4."
    },
    {
      id: "p1q269",
      question: "Which mechanical dynamic explains the functional contribution of surfactant inside the human alveoli?",
      options: [
        "It increases the effort required to expand the lungs",
        "It selectively reduces surface tension in smaller alveoli, keeping them from collapsing into larger ones according to the Law of Laplace",
        "It acts as a physical filter to trap dust particles",
        "It alters the chemical bonding of carbon dioxide"
      ],
      answer: 1,
      explanation: "According to Laplace's Law ($P = 2T/r$), smaller alveoli experience higher collapsing pressures due to their small radius. Surfactant molecules crowd closer together in small alveoli, lowering surface tension more than in large ones to keep pressures stable and prevent atelectasis."
    },
    {
      id: "p1q270",
      question: "Which type of blood vessel serves as the primary site of systemic vascular resistance, using smooth muscle walls to adjust peripheral blood pressure?",
      options: ["Large elastic arteries", "Arterioles", "Capillaries", "Large veins"],
      answer: 1,
      explanation: "Arterioles have small diameters and muscular walls. They act as the primary 'nozzles' of the vascular system, altering their diameter in response to autonomic inputs to control total peripheral resistance."
    },
    {
      id: "p1q271",
      question: "Which gland is known as the 'master gland' of the endocrine system?",
      options: ["Thyroid gland", "Adrenal gland", "Pituitary gland", "Hypothalamus"],
      answer: 2,
      explanation: "The pituitary gland (hypophysis) is called the master gland because it secretes hormones that regulate many other endocrine glands throughout the body."
    },
    {
      id: "p1q272",
      question: "Which cell type within the male testes synthesizes and secretes testosterone in response to Luteinizing Hormone (LH)?",
      options: ["Sertoli cells", "Leydig (interstitial) cells", "Spermatogonia", "Primary spermatocytes"],
      answer: 1,
      explanation: "Leydig cells sit in the interstitial spaces between the seminiferous tubules. They express LH receptors and synthesize testosterone to drive spermatogenesis and systemic masculine traits."
    },
    {
      id: "p1q273",
      question: "Which primary enzyme is responsible for the unwinding and separation of double-stranded DNA parental templates at the replication fork during S-phase?",
      options: ["DNA Polymerase III", "DNA Helicase", "Topoisomerase", "DNA Ligase"],
      answer: 1,
      explanation: "DNA helicase breaks the hydrogen bonds stabilizing the nitrogenous base pairs, unzipping the double helix to expose single-stranded templates for replication."
    },
    {
      id: "p1q274",
      question: "The primary site of gas exchange in the lungs is:",
      options: ["Bronchi", "Bronchioles", "Alveoli", "Trachea"],
      answer: 2,
      explanation: "Alveoli are tiny air sacs surrounded by capillaries where oxygen diffuses into blood and CO2 diffuses out. Their thin walls and large surface area facilitate efficient gas exchange."
    },
    {
      id: "p1q275",
      question: "Which primary hormone is secreted by the heart's atria when blood volume stretches the cardiac chambers, working to increase renal sodium and water clearance?",
      options: [
        "Antidiuretic hormone",
        "Aldosterone",
        "Atrial Natriuretic Peptide (ANP)",
        "Angiotensin II"
      ],
      answer: 2,
      explanation: "ANP lowers blood pressure and volume by blocking renin and aldosterone release, relaxing vascular smooth muscle, and promoting sodium and water loss in urine."
    },
    {
      id: "p1q276",
      question: "Which type of cell is responsible for the myelination of axons within the central nervous system (CNS)?",
      options: ["Schwann cells", "Oligodendrocytes", "Astrocytes", "Microglia"],
      answer: 1,
      explanation: "Oligodendrocytes myelinate axons inside the CNS, with one cell stretching out processes to wrap multiple axons. Schwann cells handle this task exclusively in the peripheral nervous system."
    },
    {
      id: "p1q277",
      question: "Which cranial nerve carries sensory pathways from the carotid sinus baroreceptors and carotid body chemoreceptors up to the medullary cardiovascular center?",
      options: ["CN VII", "CN IX (Glossopharyngeal nerve)", "CN X", "CN XII"],
      answer: 1,
      explanation: "The glossopharyngeal nerve (CN IX) transmits blood pressure and blood chemistry data from the carotid bifurcation via Hering's nerve into the brainstem."
    },
    {
      id: "p1q278",
      question: "Normal urine output in adults is approximately:",
      options: ["200–400 mL/day", "400–600 mL/day", "800–2000 mL/day", "2500–3000 mL/day"],
      answer: 2,
      explanation: "Normal adult urine output is approximately 800–2000 mL per day (about 30–50 mL/hr). Oliguria is defined as <400 mL/day."
    },
    {
      id: "p1q279",
      question: "Which type of cartilage covers the articular surfaces of bones within synovial joints, lacking an outer perichondrium membrane?",
      options: ["Elastic cartilage", "Fibrocartilage", "Hyaline cartilage", "Calcified cartilage"],
      answer: 2,
      explanation: "Articular cartilage is a specialized variant of hyaline cartilage. Its smooth, friction-free matrix lacks a perichondrium, which helps optimize smooth joint gliding but limits its capacity to heal after an injury."
    },
    {
      id: "p1q280",
      question: "Which unique anatomical component of the brain stem contains the primary cardiovascular and respiratory centers controlling baseline heart rate and breathing?",
      options: ["Midbrain", "Pons", "Medulla oblongata", "Cerebellum"],
      answer: 2,
      explanation: "The medulla oblongata acts as the brain's homeostatic command hub, housing the dorsal/ventral respiratory groups and the cardiac acceleration/inhibition centers."
    },
    {
      id: "p1q281",
      question: "Which hormone is produced by the posterior pituitary gland?",
      options: ["Growth hormone", "TSH", "ADH (Vasopressin)", "ACTH"],
      answer: 2,
      explanation: "ADH (antidiuretic hormone/vasopressin) and oxytocin are produced in the hypothalamus but stored and released by the posterior pituitary gland."
    },
    {
      id: "p1q282",
      question: "Which pancreatic cell type is responsible for synthesizing and secreting digestive enzymes like trypsinogen, lipase, and amylase into the pancreatic duct system?",
      options: [
        "Islet alpha cells",
        "Islet beta cells",
        "Pancreatic acinar cells",
        "Ductal epithelial cells"
      ],
      answer: 2,
      explanation: "Acinar cells form the exocrine functional units of the pancreas. They pack inactive proenzymes (zymogens) into granules and release them in response to CCK and vagal stimulation."
    },
    {
      id: "p1q283",
      question: "Which specific phase of a cardiac ventricular action potential is characterized by a stable 'plateau' balance between inward calcium influx and outward potassium efflux?",
      options: ["Phase 0", "Phase 1", "Phase 2", "Phase 3"],
      answer: 2,
      explanation: "Phase 2 represents the plateau phase. Inward calcium flow through L-type channels matches outward potassium leak through rectifier channels, prolonging the refractory period to ensure the heart muscle contracts completely and relaxes before the next beat."
    },
    {
      id: "p1q284",
      question: "Which microstructural element functions as the primary electrical connection across the intercalated discs of cardiac muscle cells, enabling rapid, synchronized contraction?",
      options: ["Desmosomes", "Tight junctions", "Gap junctions", "Hemidesmosomes"],
      answer: 2,
      explanation: "Gap junctions are low-resistance ionic pores composed of connexin proteins. They allow action potentials to sweep directly from one cardiac cell to the next, coordinating heart beats."
    },
    {
      id: "p1q285",
      question: "Which unique molecule acts as the primary intracellular calcium sensor in smooth muscle tissue to trigger contraction via myosin light chain phosphorylation?",
      options: ["Troponin C", "Calmodulin", "Caldesmon", "Tropomyosin"],
      answer: 1,
      explanation: "Smooth muscle cells lack troponin. When intracellular Ca2+ increases, it binds to calmodulin. This calcium-calmodulin complex then activates Myosin Light Chain Kinase (MLCK), which phosphorylates myosin to initiate contraction."
    },
    {
      id: "p1q286",
      question: "Which primary hormone is secreted by the kidney's juxtaglomerular apparatus to convert angiotensinogen into angiotensin I?",
      options: ["Erythropoietin", "Renin", "Aldosterone", "Calcitriol"],
      answer: 1,
      explanation: "Renin is an enzymatic hormone released by granular cells when renal perfusion pressure drops or when the macula densa senses low sodium delivery, initiating the RAAS pathway."
    },
    {
      id: "p1q287",
      question: "Which visual lobe of the brain contains the primary processing centers for sight?",
      options: ["Frontal lobe", "Temporal lobe", "Parietal lobe", "Occipital lobe"],
      answer: 3,
      explanation: "The occipital lobe, located at the back of the brain, contains the primary visual cortex (V1) and is responsible for processing visual information."
    },
    {
      id: "p1q288",
      question: "Which unique structural modification characterizes the lining of the stomach, protecting it from self-digestion by its own concentrated hydrochloric acid secretions?",
      options: [
        "A thick surface layer of alkaline mucus rich in bicarbonate ions secreted by mucous neck cells",
        "A keratinized stratified layer",
        "Continuous active excretion of water into the muscle coats",
        "High concentrations of pepsin inhibitors in the submucosa"
      ],
      answer: 0,
      explanation: "The gastric mucosal barrier relies on surface mucous cells that continuously secrete a gel-like layer of mucus containing trapped bicarbonate ($HCO_3^-$) ions, maintaining a neutral pH near the cell surface despite luminal acid."
    },
    {
      id: "p1q289",
      question: "Which type of cartilage covers the articular surfaces of bones within synovial joints, lacking an outer perichondrium membrane?",
      options: ["Elastic cartilage", "Fibrocartilage", "Hyaline cartilage", "Calcified cartilage"],
      answer: 2,
      explanation: "Articular cartilage is a specialized variant of hyaline cartilage. Its smooth, friction-free matrix lacks a perichondrium, which helps optimize smooth joint gliding but limits its capacity to heal after an injury."
    },
    {
      id: "p1q290",
      question: "Which specialized mechanoreceptors adapt slowly to touch and signal static continuous pressure applied to the skin?",
      options: ["Meissner's corpuscles", "Pacinian corpuscles", "Merkel discs and Ruffini endings", "Free nerve endings"],
      answer: 2,
      explanation: "Merkel discs and Ruffini endings are slow-adapting (SA) mechanoreceptors that fire continuously to steady pressure and skin stretch. Meissner's and Pacinian corpuscles are fast-adapting (FA) and detect vibration/vocal flutter."
    },
    {
      id: "p1q291",
      question: "Which segment of the gastrointestinal tract functions as the primary site for the active absorption of Vitamin B12 and bile salts?",
      options: ["Duodenum", "Jejunum", "Terminal ileum", "Ascending colon"],
      answer: 2,
      explanation: "While the jejunum handles the bulk of nutrient absorption, the terminal ileum contains specialized cubilin-amnionless receptor structures designed to absorb Vitamin B12-intrinsic factor complexes and sodium-dependent bile salts."
    },
    {
      id: "p1q292",
      question: "Which component of the nephron reabsorbs 100% of filtered glucose and amino acids under normal physiological conditions?",
      options: [
        "Proximal convoluted tubule (PCT)",
        "Descending limb of the loop of Henle",
        "Distal convoluted tubule (DCT)",
        "Cortical collecting duct"
      ],
      answer: 0,
      explanation: "The PCT contains high-capacity secondary active transport symporters (such as SGLT2 for glucose) that coupled to the sodium gradient reabsorb all filtered nutrients, amino acids, and glucose before the fluid exits the proximal segment."
    },
    {
      id: "p1q293",
      question: "The Purkinje fibers are found in which layer of the heart?",
      options: ["Epicardium", "Myocardium (subendocardial)", "Endocardium", "Pericardium"],
      answer: 1,
      explanation: "Purkinje fibers are located in the subendocardial layer of the myocardium and rapidly conduct electrical impulses to ventricular muscle for coordinated contraction."
    },
    {
      id: "p1q294",
      question: "Which vascular structural change serves as the primary compensatory response to maintain a normal mean arterial pressure when total cardiac output decreases?",
      options: [
        "Generalized systemic venodilatation",
        "Sympathetic-mediated vasoconstriction of arterioles, increasing total peripheral resistance (TPR)",
        "Inhibition of the renin-angiotensin-aldosterone system",
        "Parasympathetic vagal activation"
      ],
      answer: 1,
      explanation: "Since Blood Pressure = Cardiac Output $\times$ TPR, a drop in cardiac output triggers arterial baroreceptors to shift autonomic balance toward sympathetic discharge, constricting peripheral arterioles to elevate TPR and protect central perfusion pressure."
    },
    {
      id: "p1q295",
      question: "Which clotting factor that is deficient in Hemophilia A is:",
      options: ["Factor VII", "Factor VIII", "Factor IX", "Factor X"],
      answer: 1,
      explanation: "Hemophilia A is the most common severe bleeding disorder, caused by deficiency of Factor VIII. Hemophilia B involves Factor IX deficiency."
    },
    {
      id: "p1q296",
      question: "Which unique anatomical component of the fetal circulatory system serves to shunt blood away from the liver bed, routing umbilical vein inflows directly into the inferior vena cava?",
      options: [
        "Ductus arteriosus",
        "Ductus venosus",
        "Foramen ovale",
        "Umbilical artery"
      ],
      answer: 1,
      explanation: "The ductus venosus is a vital fetal shunt that allows highly oxygenated placental blood to bypass the slow fetal hepatic sinusoids, draining directly into the IVC to reach the heart faster."
    },
    {
      id: "p1q297",
      question: "Which component of the nephron serves as the primary site for the active reabsorption of filtered magnesium ions via passive paracellular paracellular pathways driven by a positive lumen electrical gradient?",
      options: [
        "Proximal convoluted tubule",
        "Thick ascending limb of the loop of Henle",
        "Distal convoluted tubule",
        "Medullary collecting duct"
      ],
      answer: 1,
      explanation: "Roughly 60–70% of filtered magnesium is reabsorbed in the thick ascending limb. The K+ leakage back into the lumen via ROMK channels creates a lumen-positive electrical potential that drives divalent cations ($Mg^{2+}$ and $Ca^{2+}$) paracellularly through claudin proteins."
    },
    {
      id: "p1q298",
      question: "Which mechanical dynamic explains the functional contribution of surfactant inside the human alveoli?",
      options: [
        "It increases the effort required to expand the lungs",
        "It selectively reduces surface tension in smaller alveoli, keeping them from collapsing into larger ones according to the Law of Laplace",
        "It acts as a physical filter to trap dust particles",
        "It alters the chemical bonding of carbon dioxide"
      ],
      answer: 1,
      explanation: "According to Laplace's Law ($P = 2T/r$), smaller alveoli experience higher collapsing pressures due to their small radius. Surfactant molecules crowd closer together in small alveoli, lowering surface tension more than in large ones to keep pressures stable and prevent atelectasis."
    },
    {
      id: "p1q299",
      question: "Which specific phase of a cardiac ventricular action potential is characterized by a stable 'plateau' balance between inward calcium influx and outward potassium efflux?",
      options: ["Phase 0", "Phase 1", "Phase 2", "Phase 3"],
      answer: 2,
      explanation: "Phase 2 represents the plateau phase. Inward calcium flow through L-type channels matches outward potassium leak through rectifier channels, prolonging the refractory period to ensure the heart muscle contracts completely and relaxes before the next beat."
    },
    {
      id: "p1q300",
      question: "Which anatomical branch of the celiac trunk supplies blood directly along the lesser curvature of the stomach?",
      options: ["Right gastric artery", "Left gastric artery", "Splenic artery", "Gastroduodenal artery"],
      answer: 1,
      explanation: "The left gastric artery is a direct branch of the celiac trunk that tracks along the lesser curvature of the stomach, anastomosing with the right gastric artery."
    }
  ]
};

export default phase1;