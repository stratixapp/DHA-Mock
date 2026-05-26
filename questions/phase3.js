// PHASE 3-B: Advanced Medical-Surgical Nursing (100 Questions)
// Reference: Brunner & Suddarth's Medical-Surgical Nursing, DHA Exam Blueprints, NCLEX-RN Saunders

const phase3B = {
  phase: "3-B",
  title: "Advanced Medical-Surgical Nursing (DHA Standard)",
  icon: "🏥",
  color: "#16a085",
  questions: [
    {
      id: "p3bq1",
      question: "A patient with a history of severe systemic lupus erythematosus (SLE) is admitted with an acute flare-up. The nurse notes a serum creatinine of 2.4 mg/dL and new-onset periorbital edema. Which diagnostic evaluation should the nurse anticipate as the priority for guiding definitive therapy?",
      options: ["24-hour urine collection for total protein", "Renal biopsy", "Anti-double-stranded DNA (anti-dsDNA) titer", "Intravenous pyelogram (IVP)"],
      answer: 1,
      explanation: "Lupus nephritis is a severe complication of SLE. A renal biopsy is considered the gold standard to determine the specific class of nephritis (Class I to VI) which directly dictates the aggressiveness of immunosuppressive or corticosteroid therapy."
    },
    {
      id: "p3bq2",
      question: "The nurse is monitoring a patient undergoing continuous venovenous hemofiltration (CVVH). The machine alarms indicating a high transmembrane pressure (TMP). What is the nurse's priority action?",
      options: ["Decrease the blood flow rate", "Flush the system with normal saline", "Check the circuit for clotting and prepare to change the filter", "Increase the ultrafiltration rate"],
      answer: 2,
      explanation: "A high transmembrane pressure (TMP) in CVVH indicates increased resistance across the semipermeable membrane, which is almost always caused by clumping or clotting of blood within the filter. The filter must be inspected, and if clotted, the circuit must be replaced."
    },
    {
      id: "p3bq3",
      question: "A patient 3 days post-ventricular aneurysmectomy develops sudden shortness of breath, anxiety, and a loud, harsh holosystolic murmur heard best at the left lower sternal border, accompanied by a palpable thrill. Which complication does the nurse suspect?",
      options: ["Mitral valve prolapse", "Ventricular septal rupture", "Cardiac tamponade", "Acute myocardial infarction"],
      answer: 1,
      explanation: "Ventricular septal rupture is a catastrophic complication that can occur post-MI or post-ventricular surgery. It manifests as a sudden left-to-right shunt, causing a harsh holosystolic murmur with a thrill at the left sternal border, alongside acute pulmonary edema."
    },
    {
      id: "p3bq4",
      question: "An adult patient is brought to the emergency department following an industrial accident resulting in circumferential full-thickness burns to both lower extremities. What is the most critical monitoring parameter for this patient during the first 6 hours?",
      options: ["Core body temperature", "Peripheral pulses and compartment pressures of the lower extremities", "Hourly urine output via indwelling catheter", "Serum potassium levels"],
      answer: 1,
      explanation: "Circumferential full-thickness burns produce a tough, unyielding eschar. As fluid resuscitation proceeds, edema builds up beneath the eschar, compressing blood vessels and nerves. Monitoring peripheral pulses and signs of compartment syndrome is the absolute priority to determine the need for an emergent escharotomy."
    },
    {
      id: "p3bq5",
      question: "A patient with liver cirrhosis is receiving an infusion of 25% albumin following a large-volume paracentesis of 6 liters. What is the therapeutic rationale for this specific intervention?",
      options: ["To stimulate hepatic regeneration of clotting factors", "To prevent post-paracentesis circulatory dysfunction and renal failure", "To bind with unconjugated bilirubin and prevent encephalopathy", "To directly lower portal hypertension"],
      answer: 1,
      explanation: "Removal of large volumes of ascetic fluid (>5 L) causes a rapid shift of fluid into the peritoneal space, leading to profound intravascular volume depletion, arterial hypotension, and hepatorenal syndrome. Intravenous albumin maintains oncotic pressure to prevent this circulatory dysfunction."
    },
    {
      id: "p3bq6",
      question: "The nurse is caring for a patient with a basal skull fracture. The nurse notes clear fluid dripping from the patient's left ear. The fluid is collected on a sterile gauze and demonstrates a distinct central pink spot surrounded by a clear ring. Which action is strictly CONTRAINDICATED?",
      options: ["Elevating the head of the bed to 30 degrees", "Packing the ear canal tightly with sterile gauze to stop the leak", "Placing a loose sterile pad under the ear", "Instructing the patient to avoid blowing their nose"],
      answer: 1,
      explanation: "Packing the ear canal or nasal cavity tightly in a patient with a cerebrospinal fluid (CSF) leak is strictly contraindicated because it blocks the outflow of fluid, increasing intracranial pressure and forcing bacteria back up into the cranial vault, leading to meningitis."
    },
    {
      id: "p3bq7",
      question: "A patient with type 1 diabetes mellitus is admitted in Deep Diabetic Ketoacidosis (DKA). After 4 hours of continuous IV insulin infusion, the blood glucose drops from 550 mg/dL to 230 mg/dL, and the patient's arterial pH is now 7.21. Which modification to the treatment plan should the nurse anticipate?",
      options: ["Stop the insulin infusion completely", "Change the intravenous fluid to a dextrose-containing solution while continuing insulin", "Administer intravenous sodium bicarbonate", "Double the rate of the insulin infusion"],
      answer: 1,
      explanation: "When blood glucose drops below 250 mg/dL in DKA, dextrose (such as D5 0.45% NS) must be added to the fluid regimen. This allows the continuous insulin infusion to safely remain running to clear circulating ketones and correct the underlying metabolic acidosis without triggering severe hypoglycemia or cerebral edema."
    },
    {
      id: "p3bq8",
      question: "A patient with severe acute pancreatitis develops a respiratory rate of 32 breaths/minute, severe intercostal retractions, and an uncorrected PaO2 of 54 mmHg on a 100% non-rebreather mask. The chest X-ray shows diffuse bilateral infiltrates ('ground-glass' appearance). What is the underlying mechanism for this condition?",
      options: ["High-pressure cardiogenic pulmonary edema", "Systemic release of pancreatic enzymes causing breakdown of alveolar-capillary membranes", "Aspiration of gastric contents during vomiting", "Pulmonary thromboembolism"],
      answer: 1,
      explanation: "Severe acute pancreatitis triggers systemic inflammatory response syndrome (SIRS). Circulating pancreatic proteolytic enzymes (like trypsin and phospholipase A2) damage the alveolar-capillary membrane, leading to Acute Respiratory Distress Syndrome (ARDS), characterized by non-cardiogenic pulmonary edema."
    },
    {
      id: "p3bq9",
      question: "During a mechanical ventilation shift assessment, the nurse notes that the patient's auto-PEEP (intrinsic PEEP) is measured at 8 cmH2O. Which nursing intervention or ventilator adjustment would assist in minimizing this phenomenon?",
      options: ["Increase the respiratory rate setting", "Increase the tidal volume", "Decrease the inspiratory flow rate", "Extend the expiratory time by decreasing the respiratory rate"],
      answer: 3,
      explanation: "Auto-PEEP occurs due to incomplete exhalation before the next ventilator breath begins (air trapping), common in COPD or asthma. Extending the expiratory time (by decreasing the respiratory rate, decreasing tidal volume, or increasing inspiratory flow rate) allows the patient to fully exhale."
    },
    {
      id: "p3bq10",
      question: "A patient is admitted with suspected Primary Hyperaldosteronism (Conn's Syndrome). Which constellation of clinical manifestations and laboratory results should the nurse expect?",
      options: ["Hypotension, Hyperkalemia, Metabolic Acidosis", "Hypertension, Hypokalemia, Metabolic Alkalosis", "Hypertension, Hypercalcemia, Hyponatremia", "Hypotension, Hyponatremia, Hypoglycemia"],
      answer: 1,
      explanation: "Conn's syndrome involves excessive secretion of aldosterone from the adrenal cortex. Aldosterone forces the kidneys to conserve sodium and water (causing severe hypertension) and excrete potassium and hydrogen ions (causing hypokalemia and metabolic alkalosis)."
    },
    {
      id: "p3bq11",
      question: "A patient with a suspected pheochromocytoma is experiencing an acute hypertensive crisis. Which medication class is the absolute priority to administer first?",
      options: ["Beta-blocker (e.g., Metoprolol)", "Alpha-adrenergic blocker (e.g., Phentolamine)", "Angiotensin-converting enzyme inhibitor (e.g., Enalapril)", "Calcium channel blocker (e.g., Diltiazem)"],
      answer: 1,
      explanation: "In a pheochromocytoma crisis, an alpha-blocker (like phentolamine or phenoxybenzamine) must be administered *before* giving any beta-blocker. If a beta-blocker is given first, blocking beta-2-mediated vasodilation leaves alpha-1 receptors unopposed, causing catastrophic, life-threatening vasoconstriction and worsening hypertension."
    },
    {
      id: "p3bq12",
      question: "The nurse is interpreting the arterial blood gas (ABG) results of a patient with severe chronic obstructive pulmonary disease (COPD): pH 7.32, PaCO2 68 mmHg, HCO3- 34 mEq/L, PaO2 58 mmHg. How should the nurse classify this acid-base imbalance?",
      options: ["Uncompensated respiratory acidosis with severe hypoxemia", "Partially compensated respiratory acidosis with moderate hypoxemia", "Fully compensated metabolic alkalosis with hypoxemia", "Partially compensated metabolic acidosis"],
      answer: 1,
      explanation: "The pH is acidic (<7.35), driven by a highly elevated PaCO2 (>45 mmHg), indicating a respiratory source. The HCO3- is elevated (>26 mEq/L) because the kidneys have retained bicarbonate over time to compensate. Because the pH has not returned to the normal range, it is partially compensated."
    },
    {
      id: "p3bq13",
      question: "A patient undergoes an emergency open abdominal aortic aneurysm (AAA) repair. Postoperatively, the nurse notes a sudden drop in urine output to <15 mL/hour, a tense, distended abdomen, and a peak airway pressure increase from 28 to 42 cmH2O on the ventilator. What complication is most likely occurring?",
      options: ["Acute tubular necrosis due to intraoperative cross-clamping", "Hypovolemic shock from occult thoracic bleeding", "Abdominal Compartment Syndrome (ACS)", "Anaphylactic reaction to intraoperative antibiotics"],
      answer: 2,
      explanation: "Abdominal Compartment Syndrome (ACS) occurs when intra-abdominal pressure exceeds 20 mmHg. It compresses the vena cava (reducing venous return), upwardly displaces the diaphragm (elevating peak airway pressures on mechanical ventilation), and compresses renal vessels, leading to oliguria."
    },
    {
      id: "p3bq14",
      question: "A patient diagnosed with Myasthenia Gravis is admitted to the intensive care unit with progressive generalized muscle weakness and respiratory distress. To differentiate between a Myasthenic Crisis and a Cholinergic Crisis, the physician plans an Edrophonium (Tensilon) test. What preparation must the nurse ensure before the test?",
      options: ["Atropine sulfate is readily available at the bedside", "The patient is kept completely NPO for 12 hours", "Protamine sulfate is drawn up in a syringe", "Amyl nitrite inhalants are placed in the room"],
      answer: 0,
      explanation: "If the patient is in a cholinergic crisis (excessive acetylcholine), administering edrophonium will worsen the condition, potentially causing severe bradycardia, bronchospasm, and cardiac arrest. Atropine sulfate is the specific antidote for a cholinergic crisis and must be instantly available."
    },
    {
      id: "p3bq15",
      question: "The nurse is caring for a patient who sustained an open pelvic fracture from a motor vehicle accident. The patient's blood pressure is 82/44 mmHg, heart rate is 138 bpm, and skin is cool and clammy. Two large-bore IV lines are established. What is the most appropriate initial fluid resuscitation strategy?",
      options: ["Rapid infusion of 5% Dextrose in Water (D5W)", "Balanced crystalloids (Lactated Ringer's) followed by early activation of a massive transfusion protocol (1:1:1 ratio)", "Continuous infusion of Hetastarch or synthetic colloids", "Intravenous boluses of Normal Saline with 40 mEq/L KCl"],
      answer: 1,
      explanation: "Pelvic fractures cause massive occult retroperitoneal hemorrhage. Early management of hemorrhagic shock involves limiting crystalloids to prevent hemodilution and hypothermia, transitioning rapidly to a massive transfusion protocol utilizing packed red blood cells, fresh frozen plasma, and platelets in a balanced ratio (1:1:1)."
    },
    {
      id: "p3bq16",
      question: "A patient is admitted with a diagnosis of Syndrome of Inappropriate Antidiuretic Hormone (SIADH), secondary to small cell lung carcinoma. The laboratory values indicate a serum sodium of 112 mEq/L. Which neurological risk is paramount if this electrolyte imbalance is corrected too rapidly?",
      options: ["Wernicke's Encephalopathy", "Central Pontine Myelinolysis (Osmotic Demyelination Syndrome)", "Cerebral herniation due to vasogenic edema", "Gillen-Barré syndrome induction"],
      answer: 1,
      explanation: "Rapid correction of severe chronic hyponatremia (>10-12 mEq/L in 24 hours) shifts water rapidly out of brain cells, leading to irreversible destruction of the myelin sheath in the brainstem, known as Central Pontine Myelinolysis or Osmotic Demyelination Syndrome. Correction must be slow and controlled."
    },
    {
      id: "p3bq17",
      question: "A patient with an advanced permanent cardiac pacemaker presents with dizziness and syncope. The electrocardiogram (ECG) shows pacemaker spikes that are not followed by a QRS complex. How should the nurse document and address this finding?",
      options: ["Failure to Pace; check for battery depletion", "Failure to Sense; increase the pacing sensitivity", "Failure to Capture; assess electrode placement, electrolyte balance, or threshold settings", "Oversensing; decrease the pacing sensitivity"],
      answer: 2,
      explanation: "When pacemaker spikes appear on an ECG but are not followed by a myocardial depolarization wave (P wave or QRS complex), the pacemaker is sending the electrical impulse, but the myocardium is not responding. This is termed 'Failure to Capture' and can be caused by lead displacement, fibrosis at the tip, or hyperkalemia."
    },
    {
      id: "p3bq18",
      question: "A patient with severe dilated cardiomyopathy is scheduled for a continuous intravenous home infusion of Milrinone. What is the primary cellular mechanism of action and intended hemodynamic goal of this drug?",
      options: ["Beta-1 agonist that increases intracellular cyclic AMP; increases heart rate", "Phosphodiesterase-3 inhibitor; increases myocardial contractility and decreases systemic vascular resistance (SVR)", "Sodium-potassium ATPase inhibitor; decreases cardiac conduction velocity", "Calcium channel blocker; produces coronary artery vasodilation"],
      answer: 1,
      explanation: "Milrinone is a phosphodiesterase-3 (PDE3) inhibitor. By preventing the breakdown of cAMP in cardiac muscle, it increases intracellular calcium, boosting contractility (positive inotrope). In vascular smooth muscle, increased cAMP causes vasodilation, reducing afterload (inotrope/vasodilator or 'inodilator')."
    },
    {
      id: "p3bq19",
      question: "The nurse is monitoring a patient post-craniotomy for a tumor resection. The nurse notices the hourly urine output has spiked over the last two hours to 450 mL/hour and 500 mL/hour. The urine appears highly dilute. What is the nurse's priority action?",
      options: ["Restrict the patient's oral fluid intake immediately", "Check the urine specific gravity and serum osmolality, and notify the physician", "Administer a dose of Furosemide as a baseline check", "Increase the intravenous infusion rate of Normal Saline"],
      answer: 1,
      explanation: "A massive spike in dilute urine output post-craniotomy strongly points toward Diabetes Insipidus (DI) caused by surgical manipulation or trauma to the hypothalamus or posterior pituitary gland, resulting in a lack of Antidiuretic Hormone (ADH). Confirming urine specific gravity (typically <1.005) and notifying the provider for vasopressin/DDAVP therapy is vital."
    },
    {
      id: "p3bq20",
      question: "A patient is admitted to the cardiac care unit with an acute anterolateral ST-elevation myocardial infarction (STEMI). While monitoring the telemetry, the nurse notes the sudden onset of a type II second-degree AV block (Mobitz II). What immediate clinical risk must the nurse prepare for?",
      options: ["Spontaneous conversion to sinus rhythm", "Progression to complete third-degree heart block and ventricular standstill", "Development of acute respiratory alkalosis", "Development of digitalis toxicity"],
      answer: 1,
      explanation: "Mobitz II AV block usually occurs due to extensive anterior wall infarctions involving the conduction system below the Bundle of His. It has a high rate of sudden progression to complete heart block (3rd degree) and ventricular asystole. The nurse must instantly prepare a transcutaneous pacemaker."
    },
    {
      id: "p3bq21",
      question: "A patient with an acute cervical spinal cord injury (at the level of C5) presents with a blood pressure of 76/38 mmHg and a heart rate of 46 beats/minute. The patient's skin is warm, dry, and flushed below the level of the injury. What is the physiological mechanism responsible for this presentation?",
      options: ["Loss of parasympathetic tone leading to vagal dominance", "Loss of sympathetic nervous system outflow resulting in massive vasodilation and bradycardia", "Hypovolemia from occult hemorrhage within the spinal column", "Release of massive amounts of histamine from damaged spinal cord tissue"],
      answer: 1,
      explanation: "Neurogenic shock occurs with cervical or high thoracic spinal cord injuries due to the disruption of descending sympathetic pathways. This leaves parasympathetic pathways unopposed, leading to loss of vasomotor tone (profound vasodilation, warm skin) and loss of cardiac accelerator impulses (bradycardia)."
    },
    {
      id: "p3bq22",
      question: "A patient with acute respiratory failure is placed on mechanical ventilation using Volume Control mode with a PEEP of 12 cmH2O. During assessment, the nurse notes that the patient's blood pressure drops from 122/74 mmHg to 88/50 mmHg immediately after increasing the PEEP from 5 to 12 cmH2O. What is the reason for this hemodynamic change?",
      options: ["PEEP causes systemic vasodilation via vagal stimulation", "Increased intra-thoracic pressure decreases venous return to the heart, reducing cardiac output", "PEEP induces acute renal artery stenosis", "The ventilator circuit has developed a significant leak"],
      answer: 1,
      explanation: "High levels of Positive End-Expiratory Pressure (PEEP) increase intra-thoracic pressure, which compresses the vena cava and significantly decreases venous return (preload) to the right atrium. This leads to a drop in left ventricular end-diastolic volume and a subsequent reduction in cardiac output and blood pressure."
    },
    {
      id: "p3bq23",
      question: "The nurse is evaluating a patient suspected of having Polycythemia Vera. Which diagnostic finding is most indicative of this primary myeloproliferative disorder rather than secondary polycythemia?",
      options: ["Elevated erythropoietin (EPO) level", "Splenomegaly paired with low or suppressed serum erythropoietin levels", "Isolated elevation of thrombocytes", "Normal arterial oxygen saturation"],
      answer: 1,
      explanation: "Polycythemia vera is a stem cell disorder characterized by autonomous overproduction of RBCs, independent of erythropoietin. Because of the excessive RBC mass, negative feedback suppresses serum EPO levels. Splenomegaly is common due to splenic sequestration of excess cells. In secondary polycythemia (e.g., from hypoxia), EPO levels are high."
    },
    {
      id: "p3bq24",
      question: "A patient with a history of severe alcoholism is admitted with acute esophageal variceal hemorrhage. Following emergency sclerotherapy, a Minnesota tube is inserted. While the tube is in place, the patient suddenly exhibits severe respiratory distress, cyanosis, and a drop in SpO2 to 78%. What is the nurse's immediate priority action?",
      options: ["Increase the oxygen flow rate on the wall meter", "Cut both the gastric and esophageal balloon ports with scissors and extract the entire tube", "Use a syringe to double-check the pressures in the esophageal balloon", "Call the gastroenterologist to reposition the tube via endoscopy"],
      answer: 1,
      explanation: "If a balloon tamponade tube (Sengstaken-Blakemore or Minnesota tube) migrates upward, the inflated gastric or esophageal balloon can completely occlude the patient's airway, causing asphyxiation. The nurse must keep scissors at the bedside at all times to cut the ports and pull out the tube immediately."
    },
    {
      id: "p3bq25",
      question: "A patient with a permanent tracheostomy is undergoing mechanical ventilation. The low-pressure alarm on the ventilator sounds continuously. The nurse performs a quick assessment and notes that the patient is unable to speak or make vocal sounds. What should the nurse check first?",
      options: ["Whether the tracheostomy tube cuff is deflated or ruptured", "Whether a mucus plug is completely blocking the airway", "If the patient is biting down on the tube endotracheally", "If the ventilator circuit has collected excessive water condensation"],
      answer: 0,
      explanation: "A low-pressure alarm indicates a leak or disconnection in the system. If the patient can make vocal sounds or speak, it confirms that air is escaping past the vocal cords because the tracheostomy cuff is deflated, underinflated, or has ruptured, allowing the tidal volume to leak out."
    },
    {
      id: "p3bq26",
      question: "The nurse is caring for a patient on long-term mechanical ventilation who has developed Ventilator-Associated Pneumonia (VAP). Which organism is a highly common multi-drug resistant Gram-negative pathogen responsible for high mortality rates in VAP?",
      options: ["Streptococcus pneumoniae", "Pseudomonas aeruginosa", "Staphylococcus aureus", "Haemophilus influenzae"],
      answer: 1,
      explanation: "Pseudomonas aeruginosa is a common, opportunistic, multi-drug resistant Gram-negative bacillus frequently encountered in intensive care settings. It is a major cause of hospital-acquired infections, especially VAP, requiring aggressive anti-pseudomonal antibiotic regimens."
    },
    {
      id: "p3bq27",
      question: "A patient with suspected heparin-induced thrombocytopenia (HIT) Type II presents with a 55% drop in platelet count within 4 days of starting unfractionated heparin prophylaxis. What is the nurse's priority action?",
      options: ["Discontinue heparin and immediately initiate a direct thrombin inhibitor (e.g., Argatroban)", "Hold the heparin and administer a platelet transfusion", "Switch the patient from Unfractionated Heparin to Enoxaparin (LMWH)", "Continue heparin but monitor the aPTT every 2 hours"],
      answer: 0,
      explanation: "In HIT Type II, antibodies form against the heparin-platelet factor 4 (PF4) complex, causing severe intravascular platelet activation and thrombosis. All heparin must be stopped immediately. Platelet transfusions are contraindicated because they fuel the thrombotic fire. Anticoagulation must be maintained using a non-heparin alternative like Argatroban."
    },
    {
      id: "p3bq28",
      question: "A patient with an intra-arterial blood pressure line (A-line) in the radial artery has a flat waveform appearing on the monitor screen. The blood pressure reading suddenly reads as falsely low. What should the nurse evaluate first?",
      options: ["The leveling of the transducer to the phlebostatic axis", "The pressure bag to ensure it is inflated to 300 mmHg", "The presence of kinks in the tubing or a blood clot at the catheter tip", "The patency of the ulnar artery"],
      answer: 2,
      explanation: "A overdamped or flat waveform on an arterial line monitor indicates a mechanical obstruction, such as a kink in the catheter/tubing, an air bubble, or a small blood clot at the catheter tip. Checking for kinks and flushing the system are initial trouble-shooting steps."
    },
    {
      id: "p3bq29",
      question: "A patient with a permanent dual-chamber pacemaker is evaluated. The ECG shows a pacemaker spike followed immediately by a P wave, a normal PR interval, and then a native QRS complex without a ventricular spike. How should the nurse interpret this finding?",
      options: ["Normal DDD pacing function with ventricular sensing and inhibition", "Malfunction of the ventricular lead sensing circuit", "Failure to capture in the ventricle", "Pacemaker-mediated tachycardia"],
      answer: 0,
      explanation: "In a DDD pacemaker, the device senses and paces both the atria and ventricles. If the pacemaker fires an atrial spike and induces a P wave, but the patient's own conduction system successfully transmits the impulse to the ventricles before the programmed AV interval expires, the ventricular pacing function is safely inhibited. This is normal operation."
    },
    {
      id: "p3bq30",
      question: "The nurse is administering an intravenous infusion of Nitroprusside sodium for a patient in a severe hypertensive crisis. The patient has been on a high-dose infusion for 48 hours and begins to develop confusion, hyperreflexia, tinnitus, and metabolic acidosis. What complication does the nurse suspect?",
      options: ["Methemoglobinemia", "Cyanide or Thiocyanate toxicity", "Acute ischemic stroke", "Severe rebound hyperreninemia"],
      answer: 1,
      explanation: "Nitroprusside contains five cyanide groups per molecule. Metabolism of the drug yields cyanide, which is converted by the liver into thiocyanate and excreted by the kidneys. Prolonged high-dose infusions or renal impairment can cause toxic accumulations, blocking mitochondrial oxidative phosphorylation and resulting in metabolic acidosis, confusion, and tinnitus."
    },
    {
      id: "p3bq31",
      question: "A patient who sustained a crush injury to the lower extremities 24 hours ago presents with dark, tea-colored urine. The urinalysis reveals high levels of myoglobin. Which intervention is the cornerstone of protecting renal function in this patient?",
      options: ["Aggressive intravenous fluid resuscitation with sodium bicarbonate to alkalize the urine", "Strict fluid restriction to prevent fluid overload", "Administration of high-dose loop diuretics every 4 hours", "Immediate hemodialysis initiation"],
      answer: 0,
      explanation: "Myoglobin released from crushed muscle cells casts precipitates within renal tubules, causing acute tubular necrosis (rhabdomyolysis). Massive volume expansion ensures high tubular flow rates to flush out the casts. Adding sodium bicarbonate to alkalize the urine prevents the breakdown of myoglobin into its nephrotoxic metabolites."
    },
    {
      id: "p3bq32",
      question: "A patient with end-stage liver disease is scheduled for a transjugular intrahepatic portosystemic shunt (TIPS) procedure. What is the main structural modification created by this procedure, and what is its primary indication?",
      options: ["A tract between the hepatic vein and portal vein to relieve portal hypertension and refractory ascites", "An anastomosis between the splenic vein and renal vein to treat hepatic encephalopathy", "A permanent stent within the common bile duct to treat obstructive jaundice", "An arterial bypass to improve hepatic perfusion"],
      answer: 0,
      explanation: "A TIPS procedure creates an artificial low-resistance channel between the inflow portal vein and the outflow hepatic vein using a stent. This directly decompresses the portal venous system, reducing the risk of variceal bleeding and decreasing refractory ascites."
    },
    {
      id: "p3bq33",
      question: "A patient with a history of Grave's disease is admitted post-subtotal thyroidectomy. Twelve hours postoperatively, the patient develops a temperature of 40.2°C, tachycardia of 144 bpm, extreme restlessness, and delirium. Which medication should the nurse avoid administering during this acute event?",
      options: ["Propylthiouracil (PTU)", "Aspirin (Acetylsalicylic acid)", "Propanolol", "Hydrocortisone"],
      answer: 1,
      explanation: "The patient is experiencing Thyroid Storm. Aspirin is strictly contraindicated because it displaces thyroid hormones (T3 and T4) from their binding proteins (thyroid-binding globulin), raising free thyroid hormone levels in the blood and worsening the hypermetabolic crisis. Acetaminophen should be used for fever instead."
    },
    {
      id: "p3bq34",
      question: "A patient with chronic kidney disease (CKD) on maintenance hemodialysis presents with severe hyperkalemia (K+ 7.4 mEq/L) accompanied by wide QRS complexes and peaked T waves on the ECG. Which medication should the nurse administer first to protect the patient's heart?",
      options: ["Sodium polystyrene sulfonate (Kayexalate) orally", "Intravenous Calcium Gluconate", "Intravenous regular insulin combined with 50% Dextrose", "Continuous Nebulized Albuterol"],
      answer: 1,
      explanation: "Calcium gluconate does not lower serum potassium levels. Instead, it antagonizes the cardiotoxic effects of hyperkalemia by stabilizing the myocardial cell membrane threshold potential, protecting the heart from lethal arrhythmias. It must be administered immediately before giving drugs that shift or eliminate potassium."
    },
    {
      id: "p3bq35",
      question: "The nurse is analyzing the intracranial pressure (ICP) waveform of a patient with a severe traumatic brain injury. The nurse notices prominent, tall 'A waves' (Plateau waves) that persist for 15 minutes. What does this finding indicate?",
      options: ["Normal compliance and auto-regulation of the cerebral vasculature", "A temporary artifact caused by coughing or turning", "A critical drop in intracranial compliance and dangerous elevations in ICP that compromise cerebral perfusion", "Improved cerebral venous drainage"],
      answer: 2,
      explanation: "ICP waveforms consist of P1, P2, and P3 waves. Pathological 'A waves' or plateau waves are intense elevations in ICP (50-100 mmHg) lasting 5-20 minutes. They signify a critical failure of cerebral compliance, putting the patient at immediate risk of cerebral ischemia and brain herniation."
    },
    {
      id: "p3bq36",
      question: "A patient who is mechanically ventilated on Pressure Support Ventilation (PSV) mode has a sudden drop in respiratory rate to 4 breaths/minute. What action should the nurse take immediately?",
      options: ["Increase the Pressure Support level on the ventilator panel", "Switch the ventilator mode to an assist-control or synchronized intermittent mandatory ventilation (SIMV) mode", "Auscultate the lungs for bilateral chest expansion", "Administer a neuromuscular blocking agent"],
      answer: 1,
      explanation: "Pressure Support Ventilation (PSV) is a purely patient-triggered, spontaneous mode. The ventilator delivers a set pressure boost only when the patient initiates a breath. If the patient becomes apneic or hypoventilates, the machine will not deliver mandatory breaths, making it critical to switch them back to a volume- or pressure-controlled mandatory mode."
    },
    {
      id: "p3bq37",
      question: "A patient with an acute ischemic stroke was treated with intravenous tissue plasminogen activator (tPA). During the infusion, the patient develops a sudden severe headache, vomiting, and an acute increase in blood pressure to 190/110 mmHg. What is the priority nursing action?",
      options: ["Administer an IV antihypertensive medication immediately", "Stop the tPA infusion immediately and prepare for an emergent non-contrast head CT scan", "Slowing the tPA infusion rate while monitoring the neuro status", "Reposition the patient into a flat supine layout"],
      answer: 1,
      explanation: "The most feared complication of tPA therapy in acute ischemic stroke is symptomatic intracranial hemorrhage. Sudden headache, vomiting, acute hypertension, or an altered level of consciousness indicate bleeding. The infusion must be stopped instantly, and an emergent CT scan ordered."
    },
    {
      id: "p3bq38",
      question: "The nurse is reviewing the arterial blood gas (ABG) and electrolyte profile of a patient with severe chronic diarrhea: pH 7.28, PaCO2 32 mmHg, HCO3- 15 mEq/L. The serum sodium is 140 mEq/L, and chloride is 114 mEq/L. Calculate the anion gap and classify the acidosis.",
      options: ["Anion gap of 11 mEq/L; Normal Anion Gap Metabolic Acidosis (Hyperchloremic)", "Anion gap of 18 mEq/L; High Anion Gap Metabolic Acidosis", "Anion gap of 5 mEq/L; Compensated Respiratory Acidosis", "Anion gap of 23 mEq/L; Mixed Metabolic and Respiratory Acidosis"],
      answer: 0,
      explanation: "Anion gap is calculated as: $Na^+ - (Cl^- + HCO_3^-)$. Substituting the values: $140 - (114 + 15) = 140 - 129 = 11\\text{ mEq/L}$. A normal anion gap is typically 8-12 mEq/L. Diarrhea causes a direct loss of bicarbonate, which is replaced by chloride retention, creating a normal anion gap (hyperchloremic) metabolic acidosis."
    },
    {
      id: "p3bq39",
      question: "A patient with acute respiratory distress syndrome (ARDS) is placed in the prone position by the intensive care team. What is the primary physiological benefit of prone positioning in ARDS management?",
      options: ["It reduces the risk of ventilator-associated barotrauma by reducing dead space", "It recruits atelectatic alveoli in the dorsal lung regions and improves ventilation-perfusion (V/Q) matching", "It decreases systemic vascular resistance and increases preload", "It facilitates easier suctioning of upper airway secretions"],
      answer: 1,
      explanation: "In ARDS, fluid accumulates preferentially in dependent (dorsal) lung zones when the patient is supine, causing alveolar collapse. Turning the patient prone relieves the weight of the heart and abdominal contents from the lungs, recruits collapsed dorsal alveoli, and optimizes V/Q matching, significantly improving oxygenation."
    },
    {
      id: "p3bq40",
      question: "The nurse is managing a patient with an esophagojejunostomy following total gastrectomy for gastric cancer. On postoperative day 5, the patient develops sudden severe left shoulder pain, tachypnea, tachycardia, and a temperature of 38.8°C. What complication should the nurse immediately investigate?",
      options: ["Anastomotic leak", "Acute myocardial infarction", "Dumping syndrome", "Subphrenic abscess secondary to atelectasis"],
      answer: 0,
      explanation: "An anastomotic leak is a critical, life-threatening complication following gastrointestinal surgery. Leaking upper GI contents cause chemical irritation of the diaphragm, leading to referred pain to the shoulder (Kehr's sign), alongside systemic inflammatory responses (fever, tachycardia, tachypnea)."
    },
    {
      id: "p3bq41",
      question: "A patient with a history of small cell lung cancer presents with a puffy face, neck vein distension, swelling of both upper extremities, and a prominent collateral venous network across the upper chest wall. What oncological emergency does this represent?",
      options: ["Tumor Lysis Syndrome", "Spinal Cord Compression", "Superior Vena Cava (SVC) Syndrome", "Cardiac Tamponade"],
      answer: 2,
      explanation: "Superior Vena Cava (SVC) Syndrome occurs due to external compression or direct invasion of the SVC by a tumor (commonly lung cancer or lymphoma). This impedes venous drainage from the head, neck, and upper body, causing facial/arm edema and thoracic collateral venous engorgement."
    },
    {
      id: "p3bq42",
      question: "A patient is admitted following a major motor vehicle crash. During chest assessment, the nurse notes a paradoxical movement of a localized segment of the right chest wall—the segment caves inward during inspiration and balloons outward during expiration. What is the immediate priority intervention?",
      options: ["Apply a tight circular chest binder to stabilize the segment", "Stabilize breathing with high-flow oxygen, consider positive pressure ventilation (intubation/CPAP), and optimize pain control", "Place the patient on the unaffected side to splint the ribs", "Perform an emergent needle thoracostomy"],
      answer: 1,
      explanation: "The patient has a flail chest (multiple rib fractures in two or more places). The paradoxical chest wall movement compromises ventilation and causes severe pain and underlying pulmonary contusion. Mechanical positive-pressure ventilation acts as an internal splint to stabilize the chest wall and optimize gas exchange."
    },
    {
      id: "p3bq43",
      question: "The nurse is caring for a patient who is 36 hours post-coronary artery bypass graft (CABG) surgery. The nurse notes a sudden drop in chest tube drainage from 80 mL/hour to 0 mL/hour, accompanied by muffled heart sounds, jugular venous distension (JVD), and a narrowing pulse pressure. What is the priority nursing action?",
      options: ["Milking or aggressively stripping the chest tube to clear any clots", "Notifying the cardiothoracic surgeon immediately for suspected cardiac tamponade", "Increasing the vacuum suction on the chest drainage wall unit", "Placing the patient in a Trendelenburg position"],
      answer: 1,
      explanation: "A sudden cessation of chest tube output in a postoperative cardiac patient often indicates tube occlusion. Fluid or blood then accumulates within the pericardial sac, causing cardiac tamponade. Symptoms include Beck's Triad (JVD, muffled heart sounds, hypotension). This is a surgical emergency."
    },
    {
      id: "p3bq44",
      question: "A patient with chronic heart failure who is taking Digoxin and Furosemide presents with anorexia, nausea, blurred vision with a yellowish-green tint around lights, and an irregular pulse. The nurse obtains an ECG. Which dysrhythmia is highly characteristic of digoxin toxicity?",
      options: ["Sinus tachycardia with frequent premature ventricular contractions", "Atrial tachycardia with variable AV block or accelerated junctional rhythm", "Mobitz Type I second-degree AV block", "Torsades de Pointes"],
      answer: 1,
      explanation: "Digoxin toxicity causes increased automaticity and depressed AV conduction. This unique combination frequently precipitates paroxysmal atrial tachycardia with AV block, or accelerated junctional rhythms. Hypokalemia from furosemide exacerbates this risk."
    },
    {
      id: "p3bq45",
      question: "The nurse is preparing to administer an initial dose of Milrinone to a patient with acute decompensated heart failure. Which baseline assessment parameter is the most critical factor in determining the safety of initiating this infusion?",
      options: ["Serum potassium level", "Blood pressure", "Glomerular filtration rate (GFR)", "Core body temperature"],
      answer: 1,
      explanation: "Milrinone causes profound vascular smooth muscle relaxation, which can lead to severe systemic hypotension. Before initiating an infusion, the nurse must ensure the patient has adequate intravascular volume and that baseline blood pressure is stable enough to tolerate vasodilatory effects."
    },
    {
      id: "p3bq46",
      question: "A patient with a suspected deep vein thrombosis (DVT) is started on a continuous intravenous Unfractionated Heparin infusion. The baseline aPTT is 32 seconds. After 6 hours of infusion, the repeat aPTT is 110 seconds. The patient has no signs of active bleeding. What action should the nurse take next?",
      options: ["Stop the infusion immediately and administer Protamine Sulfate", "Stop the infusion for 30–60 minutes, decrease the infusion rate according to the hospital protocol, and recheck aPTT in 6 hours", "Continue the infusion at the same rate and recheck aPTT in 2 hours", "Administer a dose of Vitamin K intravenously"],
      answer: 1,
      explanation: "An aPTT of 110 seconds is significantly above the standard therapeutic range (typically 60-80 seconds or 1.5-2.5 times control). Because there is no active bleeding, administering the antidote (protamine) is unnecessary and raises thrombotic risk. The correct response is to hold the infusion briefly and decrease the rate per protocol."
    },
    {
      id: "p3bq47",
      question: "A patient is admitted to the intensive care unit with a severe case of Guillain-Barré Syndrome. Which clinical assessment is paramount to track hourly to determine the timing for mechanical ventilation?",
      options: ["Glasgow Coma Scale", "Forced Vital Capacity (FVC) and Negative Inspiratory Force (NIF)", "Deep tendon reflexes in the lower extremities", "Continuous mean arterial pressure (MAP) monitoring"],
      answer: 1,
      explanation: "Guillain-Barré causes progressive ascending demyelination that can paralyze intercostal muscles and the diaphragm. Tracking respiratory muscle strength via bedtime spirometry metrics like Forced Vital Capacity (FVC < 15-20 mL/kg) and Negative Inspiratory Force (NIF < -20 to -30 cmH2O) is critical to catch impending respiratory failure early."
    },
    {
      id: "p3bq48",
      question: "A patient with severe hyperparathyroidism presents with a serum calcium level of 15.4 mg/dL. Which therapeutic intervention sequence should the nurse anticipate first to lower the calcium level safely?",
      options: ["High-dose oral calcium supplements combined with Vitamin D", "Aggressive intravenous infusion of 0.9% Normal Saline followed by loop diuretics", "Intravenous bolus of Protamine sulfate", "Strict fluid restriction combined with thiazide diuretics"],
      answer: 1,
      explanation: "Hypercalcemic crisis (>14 mg/dL) requires rapid volume rehydration with 0.9% Normal Saline to expand intravascular volume and enhance renal calcium excretion. Thiazide diuretics must be avoided because they increase calcium reabsorption; loop diuretics (furosemide) can be given *after* rehydration is accomplished."
    },
    {
      id: "p3bq49",
      question: "The nurse is managing a patient with an active intracranial hemorrhage. The physician orders the mean arterial pressure (MAP) to be maintained between 70 and 90 mmHg, and the patient's current ICP is 18 mmHg. If the patient's blood pressure is 130/80 mmHg, calculate the Cerebral Perfusion Pressure (CPP) and determine if it meets clinical targets.",
      options: ["CPP is 62 mmHg; it is inadequate", "CPP is 79 mmHg; it is within the optimal target range", "CPP is 97 mmHg; it is dangerously high", "CPP is 112 mmHg; it requires immediate reduction"],
      answer: 1,
      explanation: "Mean Arterial Pressure (MAP) = $\\text{Diastolic} + \\frac{1}{3}(\\text{Systolic} - \\text{Diastolic}) = 80 + \\frac{1}{3}(130 - 80) = 80 + 16.6 = 96.6\\text{ mmHg}$ (or $97\\text{ mmHg}$). Cerebral Perfusion Pressure (CPP) = $\\text{MAP} - \\text{ICP} = 97 - 18 = 79\\text{ mmHg}$. The target CPP for brain injury is 60-80 mmHg, so 79 mmHg is optimal."
    },
    {
      id: "p3bq50",
      question: "A patient with severe chronic renal failure presents with severe pruritus, muscle cramping, and a serum phosphorus level of 7.2 mg/dL. Which instruction should the nurse emphasize regarding the administration of prescribed calcium acetate (PhosLo)?",
      options: ["Take the medication 1 hour before breakfast on an empty stomach", "Take the medication precisely with the first bite of each meal and snack", "Take the medication at bedtime with a full glass of water", "Only take the medication if the daily urine output drops below 500 mL"],
      answer: 1,
      explanation: "Calcium acetate is a phosphate binder. It must be taken with meals and snacks so that it can directly bind with dietary phosphorus in the intestinal tract, forming an insoluble complex excreted in feces, preventing systemic absorption."
    },
    {
      id: "p3bq51",
      question: "The nurse is adjusting settings on a patient's temporary transvenous pacemaker. The pacemaker is set to VVI mode. What do these letters represent in clinical sequence?",
      options: ["Paced chamber: Ventricle; Sensed chamber: Ventricle; Response: Inhibited", "Paced chamber: Ventricle; Sensed chamber: Atrium; Response: Dual", "Paced chamber: Atrium; Sensed chamber: Ventricle; Response: Triggered", "Paced chamber: Dual; Sensed chamber: Dual; Response: Inhibited"],
      answer: 0,
      explanation: "The NASPE/BPEG generic pacemaker code sequences denote: 1st letter = Chamber Paced (V = Ventricle); 2nd letter = Chamber Sensed (V = Ventricle); 3rd letter = Response to Sensing (I = Inhibited by native ventricular electrical activity)."
    },
    {
      id: "p3bq52",
      question: "A patient with severe hyperthyroidism (Grave's Disease) is scheduled for a thyroidectomy. The physician prescribes Lugol's solution (strong iodine solution) to be administered for 10 days preoperatively. What is the fundamental goal of this medication before surgery?",
      options: ["To permanently cure hyperthyroidism without surgery", "To decrease the vascularity and size of the thyroid gland, reducing intraoperative bleeding risks", "To stimulate thyroid-stimulating hormone (TSH) production", "To act as a localized anesthetic for the neck musculature"],
      answer: 1,
      explanation: "High doses of iodine temporarily inhibit the synthesis and release of thyroid hormones (the Wolff-Chaikoff effect) and drastically reduce the vascularity and size of the thyroid gland, making the surgical excision significantly safer by minimizing hemorrhage risks."
    },
    {
      id: "p3bq53",
      question: "A patient with an acute upper gastrointestinal hemorrhage is receiving an intravenous infusion of Octreotide (Sandostatin). What is the primary hemodynamic mechanism of action of this drug in managing variceal bleeding?",
      options: ["Direct vasoconstriction of peripheral arteries to raise systemic blood pressure", "Selective splanchnic vasoconstriction, which lowers portal venous pressure and blood flow", "Direct chemical neutralization of gastric acid secretion", "Inhibition of fibrinolysis to stabilize blood clots"],
      answer: 1,
      explanation: "Octreotide is a synthetic somatostatin analogue. It causes selective vasoconstriction of the splanchnic vascular bed, reducing blood inflow to the portal system, directly lowering portal pressures, and effectively stopping or slowing variceal bleeding."
    },
    {
      id: "p3bq54",
      question: "During an assessment of an arterial line setup in the ICU, the nurse conducts a square wave test (flush test). The resulting waveform shows a sharp upstroke followed by a flat top, but no post-flush oscillations or undershoot before returning to the baseline. How should the nurse characterize this system?",
      options: ["Normal, optimally damped system", "Underdamped system (falsely high systolic readings)", "Overdamped system (falsely low systolic readings)", "System air leak present"],
      answer: 2,
      explanation: "An overdamped wave system shows a sluggish response with a lack of oscillations following a flush. This blunts the physiological peaks and troughs, leading to falsely low systolic and falsely high diastolic blood pressure readings. It is usually caused by air bubbles, blood clots, or compliant tubing."
    },
    {
      id: "p3bq55",
      question: "A patient is admitted with a diagnosis of Goodpasture's Syndrome. Which two organ systems are simultaneously targeted by the autoantibodies characteristic of this disease?",
      options: ["Neurological and Musculoskeletal systems", "Pulmonary and Renal systems", "Gastrointestinal and Integumentary systems", "Cardiovascular and Endocrine systems"],
      answer: 1,
      explanation: "Goodpasture's syndrome is a rare autoimmune disorder where circulating antibodies attack the alpha-3 chain of collagen type IV found in the basement membranes of both the pulmonary alveoli and the renal glomeruli, presenting as pulmonary hemorrhage and rapidly progressive glomerulonephritis."
    },
    {
      id: "p3bq56",
      question: "The nurse is monitoring a patient post-carotid endarterectomy. During assessment, the patient exhibits a deviated tongue toward the side of the incision when asked to protrude it, along with slight difficulty swallowing. Which cranial nerve does the nurse suspect was injured intraoperatively?",
      options: ["Cranial Nerve VII (Facial)", "Cranial Nerve X (Vagus)", "Cranial Nerve XII (Hypoglossal)", "Cranial Nerve XI (Spinal Accessory)"],
      answer: 2,
      explanation: "The hypoglossal nerve (CN XII) runs in close proximity to the carotid bifurcation. Intraoperative traction or injury causes ipsilateral tongue weakness, resulting in the tongue deviating *toward* the injured side when protruded, along with dysphagia."
    },
    {
      id: "p3bq57",
      question: "A patient with a massive acute pulmonary embolism is experiencing cardiogenic shock. Which echocardiographic finding is most characteristic of this condition?",
      options: ["Severe left ventricular hypertrophy with outflow obstruction", "Right ventricular dilation and hypokinesis (McConnell's sign) due to acute afterload mismatch", "Mitral valve regurgitation", "Global left ventricular hypokinesis"],
      answer: 1,
      explanation: "A massive pulmonary embolism suddenly occludes the pulmonary arterial bed, causing a severe increase in right ventricular afterload. This leads to acute right ventricular strain, dilation, and hypokinesis, which can be visualized on an echocardiogram as McConnell's sign."
    },
    {
      id: "p3bq58",
      question: "A patient with a history of extensive small bowel resection for Crohn's disease is receiving total parenteral nutrition (TPN) via a central venous catheter. The nurse notes that the TPN solution bag ran out completely, and the replacement bag from the pharmacy will be delayed by two hours. What is the priority nursing action?",
      options: ["Flush the central line with heparin and lock it until the new bag arrives", "Infuse 10% Dextrose in Water (D10W) at the same infusion rate via the central line", "Infuse 0.9% Normal Saline at a keep-vein-open (KVO) rate", "Convert the patient to oral clear fluids temporarily"],
      answer: 1,
      explanation: "TPN contains high concentrations of glucose, which stimulates the pancreas to secrete high levels of insulin. If TPN is abruptly discontinued, the residual high insulin levels can cause severe rebound hypoglycemia. Infusing D10W maintains glucose levels until the new TPN bag is available."
    },
    {
      id: "p3bq59",
      question: "The nurse is caring for a patient with a severe traumatic brain injury who is receiving a continuous intravenous infusion of 3% Hypertonic Saline. Which laboratory value must the nurse monitor every 4–6 hours to prevent neurological damage?",
      options: ["Serum Potassium and Calcium", "Serum Sodium and Serum Osmolality", "Blood Urea Nitrogen (BUN)", "Activated partial thromboplastin time (aPTT)"],
      answer: 1,
      explanation: "Hypertonic saline is used to reduce cerebral edema by creating an osmotic gradient that pulls water out of brain tissue. However, it can cause severe hypernatremia and metabolic acidosis. Serum sodium must be monitored tightly, typically keeping it within a target therapeutic range (e.g., 145-155 mEq/L) and serum osmolality below 320 mOsm/kg."
    },
    {
      id: "p3bq60",
      question: "A patient is admitted with an acute exacerbation of Myasthenia Gravis. The nurse performs a bedside assessment of the patient's cranial nerve function. The nurse notes severe bilateral ptosis and asymmetric diplopia. Damage to which cranial nerves is primarily responsible for these extraocular muscle findings?",
      options: ["CN II and CN VII", "CN III, CN IV, and CN VI", "CN V and CN IX", "CN XI and CN XII"],
      answer: 1,
      explanation: "Myasthenia gravis commonly affects extraocular and facial muscles first. Ptosis (drooping eyelids) and diplopia (double vision) are driven by neuromuscular junction impairment of Cranial Nerves III (Oculomotor), IV (Trochlear), and VI (Abducens), which control eye movement and lid elevation."
    },
    {
      id: "p3bq61",
      question: "A patient with a history of systemic sclerosis (Scleroderma) presents with progressive dyspnea, dry cough, and fine inspiratory crackles at both lung bases. A high-resolution CT scan confirms Pulmonary Arterial Hypertension (PAH). Which class of medications is used specifically to target cellular pathways to vasodilate pulmonary vessels?",
      options: ["Endothelin receptor antagonists (e.g., Bosentan) or Phosphodiesterase-5 inhibitors (e.g., Sildenafil)", "Beta-adrenergic blockers (e.g., Carvedilol)", "Inhaled corticosteroids (e.g., Fluticasone)", "Loop diuretics (e.g., Bumetanide)"],
      answer: 0,
      explanation: "Pulmonary Arterial Hypertension in scleroderma involves overproduction of endothelin (a potent vasoconstrictor) and down-regulation of nitric oxide pathways. Endothelin receptor antagonists (Bosentan) and PDE-5 inhibitors (Sildenafil) specifically counteract these mechanisms to dilate the pulmonary vasculature."
    },
    {
      id: "p3bq62",
      question: "The nurse is preparing to assist with the removal of a chest tube from a patient whose pneumothorax has fully resolved. Which instruction should the nurse provide to the patient during the precise moment the provider extracts the tube?",
      options: ["Inhale deeply and hold your breath while bearing down (Valsalva Maneuver)", "Exhale completely and breathe rapidly via short shallow gasps", "Cough forcefully repeatedly", "Inhale and exhale normally without pausing"],
      answer: 0,
      explanation: "Performing the Valsalva maneuver (deep inspiration followed by bearing down) increases intrathoracic pressure above atmospheric pressure. This prevents ambient air from being sucked into the pleural space through the open wound during extraction, avoiding a recurrent pneumothorax."
    },
    {
      id: "p3bq63",
      question: "A patient is admitted to the ICU with a suspected diagnosis of Toxic Shock Syndrome (TSS). The patient presents with erythroderma (diffuse sunburn-like rash), a temperature of 39.5°C, desquamation of palms and soles, and a blood pressure of 78/42 mmHg. What is the primary underlying pathophysiology driving this presentation?",
      options: ["Massive IgE-mediated histamine release from mast cells", "Superantigen-mediated massive T-cell activation and cytokine storm", "Direct bacterial invasion of endothelial cells causing necrosis", "Type III immune complex deposition in small capillaries"],
      answer: 1,
      explanation: "Toxic Shock Syndrome is caused by exotoxins (like TSST-1 from Staphylococcus aureus) acting as 'superantigens.' Instead of binding normally, they bridge MHC II molecules and T-cell receptors non-specifically, activating up to 20% of T-cells simultaneously. This triggers a catastrophic cytokine storm, causing profound distributive shock."
    },
    {
      id: "p3bq64",
      question: "A patient with chronic kidney disease (CKD) on peritoneal dialysis notes that the effluent drained from the peritoneal cavity during the last cycle appears cloudy and turbid. The patient reports generalized abdominal pain. What is the nurse's priority action?",
      options: ["Flush the peritoneal catheter with 50 mL of warm sterile water", "Obtain a sample of the dialysate effluent for cell count, differential, and culture, and notify the provider", "Instill a double dose of hypertonic (4.25%) dialysate to clear the fluid", "Instruct the patient to increase oral fluid intake and re-evaluate in 24 hours"],
      answer: 1,
      explanation: "Cloudy or turbid peritoneal dialysis effluent is the primary clinical sign of peritonitis, a serious complication of PD. The nurse must obtain an effluent sample for culture and leukocyte count (typically >100 WBC/µL with >50% neutrophils) and initiate intraperitoneal antibiotics promptly."
    },
    {
      id: "p3bq65",
      question: "A patient with an acute myocardial infarction is placed on an Intra-Aortic Balloon Pump (IABP). While assessing the timing of the balloon, the nurse knows that balloon inflation should occur precisely at which point on the hemodynamic waveform?",
      options: ["At the onset of the R-wave on the ECG", "At the dicrotic notch on the arterial pressure waveform", "At the peak systolic pressure point", "During the isometric contraction phase"],
      answer: 1,
      explanation: "The IABP balloon must inflate at the onset of diastole, which correlates precisely with the dicrotic notch (closure of the aortic valve) on the arterial pressure waveform. This enhances coronary artery perfusion via diastolic augmentation. Deflation occurs right before systole to reduce afterload."
    },
    {
      id: "p3bq66",
      question: "The nurse is assessing a patient with suspected Cushing's Syndrome. Which diagnostic evaluation is considered the most reliable outpatient screening test to confirm autonomous cortisol production?",
      options: ["Random morning serum cortisol level", "24-hour urinary free cortisol excretion or an overnight low-dose dexamethasone suppression test", "Single spot urine specific gravity test", "Serum ACTH level test"],
      answer: 1,
      explanation: "Random cortisol levels are unreliable due to diurnal variations. A 24-hour urinary free cortisol measurement directly reflects total daily production, and an overnight low-dose dexamethasone suppression test evaluates whether normal negative feedback mechanisms are intact. Failure to suppress cortisol confirms Cushing's."
    },
    {
      id: "p3bq67",
      question: "A patient is admitted to the emergency department with a history of an acute overdose of Acetaminophen taken 6 hours prior. Which clinical resource or tool should the nurse consult to guide the administration of N-acetylcysteine (Mucomyst)?",
      options: ["The Glasgow Coma Scale template", "The Rumack-Matthew Nomogram", "The Parkland Burn Formula", "The Winter's Equation"],
      answer: 1,
      explanation: "The Rumack-Matthew Nomogram plots plasma acetaminophen concentrations against the hours post-ingestion (starting at 4 hours) to predict the probability of hepatotoxicity and determine if antidote therapy with N-acetylcysteine (NAC) is required."
    },
    {
      id: "p3bq68",
      question: "A patient with severe severe preeclampsia is receiving an intravenous magnesium sulfate infusion. During hourly assessments, the nurse notes that the patient's deep tendon reflexes (DTRs) are completely absent, the respiratory rate has dropped to 9 breaths/minute, and urine output was 15 mL over the past hour. What is the absolute priority intervention?",
      options: ["Increase the intravenous fluid rate to flush out the magnesium", "Stop the magnesium sulfate infusion immediately and administer Calcium Gluconate 1g IV slowly", "Administer a dose of Furosemide to stimulate renal clearance", "Place the patient in a prone layout to improve renal perfusion"],
      answer: 1,
      explanation: "The loss of deep tendon reflexes and respiratory depression are hallmark signs of toxic serum magnesium levels. Magnesium is excreted by the kidneys, so low urine output increases toxicity risks. The infusion must be stopped instantly, and Calcium Gluconate (the antidote) given to counteract neuromuscular blockade."
    },
    {
      id: "p3bq69",
      question: "A patient with a history of severe persistent asthma presents with an acute attack. Despite repeated nebulized albuterol treatments, the patient develops a 'silent chest' with no audible wheezing or breath sounds, along with intercostal retractions and altered mental status. What does this clinical change signal?",
      options: ["Spontaneous improvement and resolution of bronchospasm", "Severe air trapping that has led to immediate pneumothorax", "Critical airway narrowing with minimal to no air movement, indicating impending respiratory arrest", "The development of metabolic alkalosis"],
      answer: 2,
      explanation: "A 'silent chest' in status asthmaticus is an ominous sign indicating that airflow has dropped to critically low levels due to severe bronchoconstriction and mucus plugging. The absence of wheezing means air cannot move enough to produce sound. Emergency intubation is usually imminent."
    },
    {
      id: "p3bq70",
      question: "The nurse is monitoring a patient post-abdominal surgery who has an indwelling urinary catheter. The hourly urine output has dropped from 45 mL/hour to 5 mL/hour over the last two hours. What troubleshooting step should the nurse perform first?",
      options: ["Request an order for a serum creatinine clearance test", "Check the catheter tubing for kinks, loops, or dependent obstructions, and assess for patency", "Administer an emergency bolus of 500 mL Lactated Ringer's", "Irrigate the catheter with 100 mL of sterile water containing antibiotics"],
      answer: 1,
      explanation: "Before concluding that a postoperative patient has developed acute kidney injury or hypovolemic shock, mechanical obstruction of the urinary drainage system must be ruled out. Kinks or clots in the tubing frequently cause sudden cessations in measured output."
    },
    {
      id: "p3bq71",
      question: "A patient who is post-thyroidectomy experiences intermittent muscle twitching, a positive Chvostek's sign, and cramping in both hands. The nurse suspects accidental removal of the parathyroid glands. Which electrocardiogram (ECG) changes are associated with this complication?",
      options: ["Shortened QT interval and peaked T waves", "Prolonged QT interval and ST-segment elongation", "Prominent U waves and depressed ST segments", "Widened QRS complex and prolonged PR interval"],
      answer: 1,
      explanation: "Accidental parathyroidectomy causes hypoparathyroidism, resulting in acute hypocalcemia. Hypocalcemia alters myocardial cell action potentials, causing elongation of the ST segment and a resulting prolongation of the total QT interval, which can predispose patients to arrhythmias."
    },
    {
      id: "p3bq72",
      question: "A patient with a history of deep vein thrombosis is receiving Warfarin (Coumadin) therapy. The patient presents with a therapeutic INR of 2.5 but requires emergency orthopedic surgery for a displaced fracture. Which agent should the nurse anticipate administering to rapidly reverse Warfarin's effects before the procedure?",
      options: ["Protamine Sulfate", "Four-factor Prothrombin Complex Concentrate (PCC) and Vitamin K", "Fresh Frozen Plasma (FFP) only", "Platelet concentrates"],
      answer: 1,
      explanation: "For rapid, urgent reversal of Warfarin due to emergency surgeries or major bleeding, Prothrombin Complex Concentrate (PCC/Kcentra) is preferred over FFP because it works faster and does not carry a risk of volume overload. Vitamin K is co-administered to sustain long-term reversal."
    },
    {
      id: "p3bq73",
      question: "The nurse is caring for a patient with a temporary transvenous pacemaker. The monitor displays pacemaker spikes regularly at a rate of 70 bpm, but none of these spikes are followed by a QRS complex or P wave. The patient's native heart rate is 34 bpm, and they are hypotensive. What pacing problem is occurring?",
      options: ["Failure to Sense", "Failure to Capture", "Failure to Pace", "Oversensing"],
      answer: 1,
      explanation: "Failure to capture occurs when the pacemaker delivers an electrical stimulus (the spike is visible on the ECG) but the current fails to depolarize the myocardium. This requires immediate troubleshooting, such as increasing the output voltage (mA), checking connections, or repositioning the patient."
    },
    {
      id: "p3bq74",
      question: "A patient with chronic liver failure is scheduled to receive Lactulose. The nurse notes that the patient has had 4 loose, soft bowel movements over the past 24 hours. How should the nurse interpret this finding and manage the next scheduled dose?",
      options: ["The drug is ineffective; request a medication change", "The drug is achieving its therapeutic goal; continue administration to maintain 2–3 soft stools per day", "Hold the medication completely as this indicates toxic overdosing", "Switch the administration route from oral to a retention enema"],
      answer: 1,
      explanation: "The therapeutic goal of Lactulose in hepatic encephalopathy is to promote the excretion of ammonia via the GI tract, targeting 2 to 3 soft, loose stools per day. Four stools indicate good efficacy; the dose can be slightly adjusted to hit the exact target but should not be held abruptly."
    },
    {
      id: "p3bq75",
      question: "A patient with severe acute respiratory distress syndrome (ARDS) is undergoing mechanical ventilation. The ventilator is set to high positive end-expiratory pressure (PEEP). During assessment, the nurse notes a sudden drop in SpO2, asymmetrical chest expansion, and a sudden rise in peak airway pressures. What complication does the nurse suspect?",
      options: ["Pulmonary embolism", "Ventilator-associated pneumonia", "Tension Barotrauma / Pneumothorax", "Dislodgement of the endotracheal tube into the stomach"],
      answer: 2,
      explanation: "High PEEP and high peak airway pressures increase the risk of alveolar rupture, leading to pulmonary barotrauma and tension pneumothorax. Sudden asymmetrical chest wall expansion, increased peak pressures, and hypoxemia are hallmark signs."
    },
    {
      id: "p3bq76",
      question: "The nurse is caring for a patient in early septic shock. The patient's blood pressure is 86/42 mmHg after a 30 mL/kg fluid bolus of balanced crystalloids. The central venous oxygen saturation (ScvO2) is measured at 52%. Which class of medication is the priority choice to establish vascular tone and achieve a target MAP > 65 mmHg?",
      options: ["Dopamine infusion", "Norepinephrine infusion", "Epinephrine infusion", "Nitroprusside sodium infusion"],
      answer: 1,
      explanation: "Norepinephrine is the first-choice vasopressor recommended by the Surviving Sepsis Guidelines for fluid-refractory septic shock. It is a potent alpha-1 agonist that causes vasoconstriction to raise MAP, with minimal beta-1-mediated tachyarrhythmia risks compared to dopamine."
    },
    {
      id: "p3bq77",
      question: "A patient with an advanced spinal cord injury at the level of T4 is participating in rehabilitation. The patient suddenly develops a pounding headache, sweating above the level of T4, severe nasal congestion, and a blood pressure reading of 210/110 mmHg. What is the nurse's immediate priority action?",
      options: ["Administer a dose of IV hydralazine", "Elevate the head of the bed to a high-Fowler's position (90 degrees)", "Perform an immediate digital rectal examination to check for impaction", "Check the urinary catheter for kinks or blockages"],
      answer: 1,
      explanation: "The patient is experiencing Autonomic Dysreflexia. The *first* action must always be to sit the patient upright (high-Fowler's) to induce orthostatic pooling of blood and lower the dangerously high blood pressure, before searching for the noxious stimulus (such as a full bladder or fecal impaction)."
    },
    {
      id: "p3bq78",
      question: "The nurse is caring for a patient who is 4 hours post-percutaneous coronary intervention (PCI) via the right femoral artery. The patient reports severe, radiating back and flank pain, and the nurse notes a drop in blood pressure from 118/74 to 88/52 mmHg. The right groin site appears clean without visible hematoma. What complication should the nurse suspect?",
      options: ["Acute myocardial re-infarction", "Retroperitoneal hemorrhage", "Arterial spasm of the femoral artery", "Sciatica secondary to prolonged supine positioning"],
      answer: 1,
      explanation: "Following femoral artery access for PCI, internal bleeding can track backward into the retroperitoneal space. Because it is hidden, a massive amount of blood can accumulate without visible groin swelling, presenting primarily as severe back/flank pain and unexplained hypovolemic shock."
    },
    {
      id: "p3bq79",
      question: "A patient is admitted with a diagnosis of severe Myxedema Coma. Which therapeutic strategy is considered critical for survival during the first 24 hours?",
      options: ["Rapid external warming using high-temperature thermal blankets", "Intravenous administration of high-dose Levothyroxine (T4) or Liothyronine (T3) along with Hydrocortisone", "Fluid restriction to 500 mL/day to manage hyponatremia", "Aggressive administration of beta-adrenergic blockers"],
      answer: 1,
      explanation: "Myxedema coma is life-threatening hypothyroidism. Treatment requires immediate IV thyroid hormone replacement. Hydrocortisone must be administered simultaneously *before* or with the thyroid hormones to treat any co-existing adrenal insufficiency, preventing an adrenal crisis as metabolic rates increase."
    },
    {
      id: "p3bq80",
      question: "The nurse is monitoring a patient with an intra-ventricular catheter (external ventricular drain or EVD) for intracranial pressure tracking. The nurse must align the transducer with which anatomical landmark to ensure accurate readings?",
      options: ["The phlebostatic axis (4th intercostal space, mid-axillary line)", "The external auditory meatus (tragus of the ear), corresponding to the foramen of Monro", "The tip of the mastoid process", "The sternal angle of Louis"],
      answer: 1,
      explanation: "To measure intracranial pressure accurately via an EVD or bolt, the transducer must be zeroed and leveled at the level of the Foramen of Monro, which anatomically correlates with the tragus of the ear or the external auditory meatus."
    },
    {
      id: "p3bq81",
      question: "A patient with acute decompensated heart failure is placed on a continuous infusion of Nesiritide (Natrecor). What is the physiological mechanism of action of this recombinant human peptide?",
      options: ["It mimics brain natriuretic peptide (BNP), causing smooth muscle relaxation, venous and arterial vasodilation, and diuresis", "It acts as a direct inhibitor of the renin-angiotensin-aldosterone system at the pulmonary level", "It enhances calcium entry into cardiac cells to increase contractility", "It slows the sinus rate via sinus node inhibition"],
      answer: 0,
      explanation: "Nesiritide is a recombinant form of human brain natriuretic peptide (BNP). It binds to vascular smooth muscle receptors, increasing cGMP levels, which results in potent venous and arterial vasodilation (reducing both preload and afterload) and promotes renal excretion of sodium and water."
    },
    {
      id: "p3bq82",
      question: "A patient who is 12 hours post-subtotal gastrectomy develops sudden abdominal rigidity, severe generalized pain, and a temperature of 39.2°C. While preparing for emergent diagnostic imaging, which position is safest to minimize the spread of peritoneal contamination?",
      options: ["Supine with legs fully extended", "Semi-Fowler's or Fowler's position with knees slightly flexed", "Left lateral decubitus position", "Trendelenburg position"],
      answer: 1,
      explanation: "Placing a patient with suspected peritonitis or hollow viscus perforation in a Semi-Fowler's position helps localize the leaking peritoneal fluid into the lower pelvis, minimizing subphrenic abscess formation and reducing upward pressure on the diaphragm, which aids breathing."
    },
    {
      id: "p3bq83",
      question: "A patient is admitted to the intensive care unit with severe diabetic ketoacidosis (DKA). The initial laboratory evaluation shows a serum potassium level of 2.9 mEq/L. Which action must the nurse take before initiating the prescribed continuous intravenous insulin infusion?",
      options: ["Administer a bolus of intravenous regular insulin as ordered", "Withhold the insulin infusion and prioritize intravenous potassium replacement until the levels are > 3.3 mEq/L", "Double the rate of the fluid resuscitation with Normal Saline", "Administer a dose of oral potassium polystyrene sulfonate"],
      answer: 1,
      explanation: "Insulin causes an intracellular shift of potassium, which will rapidly lower serum potassium levels even further. If insulin is given to a patient whose baseline potassium is already critically low (<3.3 mEq/L), it can precipitate life-threatening cardiac arrhythmias or cardiovascular collapse. Potassium replacement must come first."
    },
    {
      id: "p3bq84",
      question: "The nurse is evaluating a patient with severe chronic obstructive pulmonary disease (COPD) for signs of cor pulmonale. Which clinical finding relates directly to this secondary complication?",
      options: ["Left ventricular hypertrophy on echocardiography", "Jugular venous distension, hepatomegaly, and peripheral pitting edema", "Hemoptysis and fine inspiratory crackles throughout the lung fields", "An increased forced expiratory volume in 1 second (FEV1)"],
      answer: 1,
      explanation: "Cor pulmonale is right-sided heart failure resulting from chronic pulmonary hypertension caused by underlying lung disease (like COPD). Pulmonary vasoconstriction increases right ventricular workload, leading to right ventricular hypertrophy and systemic venous congestion (JVD, edema, hepatomegaly)."
    },
    {
      id: "p3bq85",
      question: "A patient with a suspected deep vein thrombosis is started on an infusion of Unfractionated Heparin. Three days later, the platelet count drops from 280,000/µL to 110,000/µL. What diagnostic assay is most specific to confirm the diagnosis of Heparin-Induced Thrombocytopenia (HIT)?",
      options: ["Prothrombin time (PT/INR)", "Serotonin Release Assay (SRA) or Heparin-PF4 ELISA", "Activated clotting time (ACT)", "Bleeding time testing"],
      answer: 1,
      explanation: "The Serotonin Release Assay (SRA) is considered the gold-standard functional assay for confirming HIT Type II, while the Heparin-PF4 enzyme-linked immunosorbent assay (ELISA) is a highly sensitive immunoassay used to detect the presence of HIT antibodies."
    },
    {
      id: "p3bq86",
      question: "The nurse is preparing to care for a patient who has just returned from an autologous bone marrow transplant for leukemia. Which isolation environment is required for this patient?",
      options: ["Negative-pressure isolation room with airborne precautions", "Protective Environment (Positive-pressure isolation room with HEPA filtration)", "Standard contact precautions room with a closed door", "Droplet precautions isolation unit"],
      answer: 1,
      explanation: "Patients undergoing bone marrow ablation followed by transplantation experience profound prolonged neutropenia, placing them at extreme risk for opportunistic infections. A protective environment utilizing positive pressure relative to the corridor ensures that air flows out of, rather than into, the patient's room, safeguarding them from airborne fungal spores."
    },
    {
      id: "p3bq87",
      question: "A patient with an acute ST-elevation myocardial infarction (STEMI) undergoes successful emergency percutaneous coronary intervention (PCI) with stent placement. Twenty-four hours post-procedure, the patient develops a sudden onset of a wide-complex rhythm with a rate of 82 beats/minute on the telemetry monitor. The patient's blood pressure is stable at 116/72 mmHg, and they are asymptomatic. What rhythm does the nurse identify?",
      options: ["Ventricular Tachycardia (VT)", "Accelerated Idioventricular Rhythm (AIVR)", "Third-degree complete heart block", "Premature ventricular contractions in bigeminy"],
      answer: 1,
      explanation: "Accelerated Idioventricular Rhythm (AIVR) is a ventricular rhythm with a rate between 40 and 100 bpm (faster than benign idioventricular rhythm but slower than ventricular tachycardia). It is common within 24 hours of myocardial reperfusion and is usually benign and self-limiting, requiring observation rather than antiarrhythmic treatment if hemodynamically stable."
    },
    {
      id: "p3bq88",
      question: "A patient with a traumatic T6 spinal cord injury experiences spinal shock. As spinal shock begins to resolve, which clinical manifestation should the nurse expect to emerge first?",
      options: ["Return of deep tendon reflexes and appearance of muscle spasticity", "Persistent flaccid paralysis below the level of injury", "Total resolution of all sensory and motor deficits", "Immediate stabilization of baseline blood pressure"],
      answer: 0,
      explanation: "Spinal shock involves the immediate loss of all reflex, motor, and sensory function below a spinal injury. As shock resolves (typically over days to weeks), spinal reflex arcs return, manifesting as hyperreflexia, muscle spasticity, and a positive Babinski sign, rather than a return of voluntary control."
    },
    {
      id: "p3bq89",
      question: "The nurse is reviewing laboratory results for a patient with severe acute pancreatitis and notes a serum calcium level of 6.4 mg/dL. What physiological process accounts for hypocalcemia in severe pancreatitis?",
      options: ["Excessive renal excretion of calcium due to loop diuretic use", "Fat necrosis and saponification, where free fatty acids bind with calcium ions in the abdomen", "Decreased parathyroid hormone secretion due to pancreatic inflammation", "Impaired vitamin D absorption in the large intestine"],
      answer: 1,
      explanation: "In acute pancreatitis, enzymatic necrosis of peripancreatic fat releases free fatty acids. These fatty acids bind with ionized calcium to form insoluble calcium soaps (saponification) in the peritoneal cavity, rapidly depleting serum ionized calcium pools."
    },
    {
      id: "p3bq90",
      question: "A patient with a history of severe asthma is admitted with an acute exacerbation. The ABG results on room air reveal: pH 7.46, PaCO2 31 mmHg, HCO3- 23 mEq/L, PaO2 64 mmHg. One hour later, a repeat ABG shows: pH 7.35, PaCO2 44 mmHg, PaO2 58 mmHg. How should the nurse interpret this trend?",
      options: ["The patient's respiratory status is improving as the pH normalizes", "The patient is developing metabolic compensation for respiratory alkalosis", "The patient is tiring, experiencing respiratory muscle fatigue, and heading toward severe respiratory acidosis", "The patient has developed an acute pulmonary infarction"],
      answer: 2,
      explanation: "In early asthma attacks, hyperventilation causes a low PaCO2 (respiratory alkalosis). A rising PaCO2 into the 'normal' range (44 mmHg) accompanied by a falling pH indicates that the patient can no longer maintain hyperventilation due to muscle fatigue. This represents a warning sign of impending respiratory failure."
    },
    {
      id: "p3bq91",
      question: "A patient is admitted to the medical unit with an acute flare-up of Crohn's disease. The patient has been taking high-dose oral prednisone for the past 6 months. The physician schedules the patient for an emergency laparoscopic bowel resection. Which perioperative medication adjustment is critical?",
      options: ["Discontinue the prednisone completely 24 hours before surgery", "Administer stress-dose intravenous hydrocortisone perioperatively", "Halve the prednisone dose on the morning of surgery", "Continue oral prednisone without any modification"],
      answer: 1,
      explanation: "Chronic corticosteroid use suppresses the hypothalamic-pituitary-adrenal (HPA) axis, leaving the adrenal glands unable to produce endogenous cortisol in response to surgical stress. To prevent an acute, life-threatening adrenal (Addisonian) crisis, the patient must receive exogenous stress-dose intravenous corticosteroids."
    },
    {
      id: "p3bq92",
      question: "The nurse is caring for a patient with an endotracheal tube who is undergoing mechanical ventilation. The ventilator's high peak airway pressure alarm sounds. Which condition would cause an increase in peak airway pressure while leaving the plateau pressure unchanged?",
      options: ["Worsening acute respiratory distress syndrome (ARDS)", "Development of a large pneumothorax", "An accumulation of secretions or a kink in the endotracheal tube (increased airway resistance)", "Mainstem bronchus intubation"],
      answer: 2,
      explanation: "Peak airway pressure reflects total resistance and compliance. Plateau pressure reflects static lung compliance alone. An increase in peak pressure *without* a change in plateau pressure indicates a change in airway resistance (e.g., mucous plugs, bronchospasm, or tube biting). If both increase, it indicates a compliance issue (e.g., ARDS or pneumothorax)."
    },
    {
      id: "p3bq93",
      question: "A patient with an open soft-tissue wound has a wound culture positive for Methicillin-Resistant Staphylococcus aureus (MRSA). Which infection control precautions must the nurse implement?",
      options: ["Airborne precautions + negative pressure room", "Droplet precautions + surgical mask", "Contact precautions + private room or cohorting", "Standard precautions only"],
      answer: 2,
      explanation: "MRSA in a wound is transmitted via direct or indirect contact with the patient or contaminated surfaces. Contact precautions—including a private room, gowns, and gloves for all patient interactions—are mandatory to prevent horizontal transmission."
    },
    {
      id: "p3bq94",
      question: "A patient with end-stage renal disease (ESRD) undergoes a hemodialysis session. Two hours into the session, the patient develops a severe headache, nausea, muscle twitching, confusion, and a brief generalized seizure. What syndrome does the nurse identify?",
      options: ["Dialysis Disequilibrium Syndrome (DDS)", "Acute uremic encephalopathy", "Subdural hematoma formation", "Hypokalemic neuromuscular crisis"],
      answer: 0,
      explanation: "Dialysis Disequilibrium Syndrome (DDS) is caused by the rapid removal of urea from the blood during hemodialysis. Urea clears more slowly from brain tissue, creating an osmotic gradient that draws water into brain cells, resulting in acute cerebral edema, headaches, confusion, and seizures."
    },
    {
      id: "p3bq95",
      question: "The nurse is managing an intra-arterial blood pressure monitoring system. The nurse performs a fast-flush test, and the monitor screen displays multiple sharp, rapid oscillations (ringing) after the flush, along with an exaggerated systolic pressure peak. How should the nurse correct this underdamped system?",
      options: ["Remove air bubbles, shorten excess tubing lengths, or add a damping device", "Flush the line with additional heparinized saline", "Reposition the transducer 10 cm above the phlebostatic axis", "Replace the intra-arterial catheter entirely"],
      answer: 0,
      explanation: "An underdamped waveform overestimates systolic blood pressure. It is caused by excessive tubing length, too many stopcocks, or small air bubbles in the line that amplify physiological vibrations. Troubleshooting involves removing air bubbles, shortening lines, and removing unnecessary connections."
    },
    {
      id: "p3bq96",
      question: "A patient with a history of chronic cholecystitis undergoes an endoscopic retrograde cholangiopancreatography (ERCP). Three hours after the procedure, the patient reports severe epigastric pain radiating to the back and has a temperature of 38.5°C. Which laboratory evaluation should the nurse prioritize?",
      options: ["Serum Amylase and Lipase", "Alanine Aminotransferase (ALT) and Aspartate Aminotransferase (AST)", "Serum Bilirubin and Alkaline Phosphatase", "Complete Blood Count (CBC) with differential"],
      answer: 0,
      explanation: "Post-ERCP pancreatitis is the most common major complication of the procedure, occurring due to mechanical irritation, hydrostatic pressure from contrast injection, or thermal injury to the pancreatic duct. Severe epigastric pain radiating to the back warrants immediate serum amylase and lipase testing."
    },
    {
      id: "p3bq97",
      question: "A patient with a severe crush injury to the right lower limb is admitted to the trauma unit. The patient reports escalating, deep, throbbing pain that is entirely unmitigated by opioid analgesics. Passive extension of the right toes elicits excruciating pain. What is the nurse's priority action?",
      options: ["Administer an additional dose of intravenous opioids and elevate the leg above heart level", "Assess peripheral pulses, measure compartment pressures if ordered, and notify the surgeon immediately for an emergent fasciotomy", "Apply a warm compress to the lower limb to relieve muscle spasm", "Instruct the patient to perform active range of motion exercises"],
      answer: 1,
      explanation: "The patient is displaying hallmark signs of acute compartment syndrome (severe pain out of proportion to the injury, pain with passive stretch). Elevating the limb above heart level is contraindicated because it decreases arterial perfusion. The priority is to notify the surgeon immediately for pressure assessment and emergent decompressive fasciotomy to save the limb."
    },
    {
      id: "p3bq98",
      question: "A patient with a central venous catheter develops a sudden onset of dyspnea, chest pain, tachycardia, and a churning 'mill-wheel' murmur heard over the precordium immediately following a line cap change. What is the nurse's immediate positioning priority?",
      options: ["High-Fowler's position to maximize lung expansion", "Left lateral decubitus in a Trendelenburg position (Durant's Maneuver)", "Supine flat layout with legs elevated", "Prone layout with head turned to the right"],
      answer: 1,
      explanation: "The clinical scenario indicates a venous air embolism. Placing the patient on their left side in a head-down position (Durant's maneuver) traps the air bubble in the apex of the right ventricle, preventing it from migrating into the pulmonary artery where it would cause a mechanical outflow tract obstruction."
    },
    {
      id: "p3bq99",
      question: "A patient is admitted with a diagnosis of Primary Hyperparathyroidism. Which bone density risk and metabolic profile should the nurse monitor for?",
      options: ["Osteoporosis, Hypercalcemia, Hypophosphatemia", "Osteopetrosis, Hypocalcemia, Hyperphosphatemia", "Osteoarthritis, Hyperkalemia, Hyponatremia", "Pathological fractures, Hypocalcemia, Hyperphosphatemia"],
      answer: 0,
      explanation: "Excessive secretion of parathyroid hormone (PTH) stimulates osteoclast activity, pulling calcium out of bones into the blood (leading to severe osteoporosis and pathological fractures). It also reduces renal reabsorption of phosphorus, resulting in a classic metabolic profile of hypercalcemia and hypophosphatemia."
    },
    {
      id: "p3bq100",
      question: "The nurse is evaluating the electrocardiogram (ECG) of a patient admitted with a severe acute exacerbation of chronic obstructive pulmonary disease (COPD). The nurse notes tall, peaked P waves (> 2.5 mm in height) in leads II, III, and aVF. What does this ECG morphology indicate?",
      options: ["Left atrial enlargement due to mitral stenosis", "Right atrial enlargement (P-pulmonale) secondary to chronic pulmonary hypertension", "Acute hyperkalemic conduction block", "Left ventricular hypertrophy from systemic hypertension"],
      answer: 1,
      explanation: "Tall, peaked P waves in the inferior leads (II, III, aVF) are termed 'P-pulmonale.' This morphology represents right atrial hypertrophy or dilation, a classic structural consequence of chronic pulmonary hypertension and cor pulmonale seen in severe advanced COPD."
    }
  ]
};

export default phase3B;