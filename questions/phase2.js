// PHASE 2B: Advanced Pharmacology (100 Questions)
// Reference: Katzung Basic & Clinical Pharmacology, Goodman & Gilman's, DHA Exam Blueprint

const phase2Advanced = {
  phase: "2B",
  title: "Advanced Pharmacology (DHA Standard)",
  icon: "💊",
  color: "#9b59b6",
  questions: [
    {
      id: "p2aq1",
      question: "A patient with a mechanical heart valve requires anticoagulation. The patient is confirmed to be a carrier of the HLA-B*15:02 allele and requires concurrent antiepileptic therapy. Which of the following antiepileptics is SAFEST to initiate?",
      options: ["Carbamazepine", "Phenytoin", "Levebiaracetam", "Valproic Acid"],
      answer: 2,
      explanation: "HLA-B*15:02 is strongly associated with SJS/TEN induced by aromatic antiepileptics (carbamazepine, phenytoin). Levetiracetam is non-aromatic, does not cross-react, and has minimal CYP450 drug interactions with warfarin."
    },
    {
      id: "p2aq2",
      question: "Calculate the loading dose of an IV antibiotic required to achieve a target plasma concentration of 20 mg/L in a 70 kg patient, given that the Volume of Distribution (Vd) is 0.6 L/kg.",
      options: ["420 mg", "840 mg", "1400 mg", "1200 mg"],
      answer: 1,
      explanation: "Using the formula: $LD = C_p \\times V_d$. The total $V_d = 0.6\\text{ L/kg} \\times 70\\text{ kg} = 42\\text{ L}$. Therefore, $LD = 20\\text{ mg/L} \\times 42\\text{ L} = 840\\text{ mg}$."
    },
    {
      id: "p2aq3",
      question: "A patient with severe chronic plaque psoriasis is being started on a biological agent but tests positive for latent tuberculosis. Which management strategy must be initiated?",
      options: [
        "Start Infliximab immediately; monitor for active TB symptoms",
        "Begin Isoniazid prophylaxis for 1 month before starting the TNF-alpha inhibitor",
        "Avoid TNF-alpha inhibitors completely and use oral Methotrexate only",
        "Administer BCG vaccine prior to starting biological therapy"
      ],
      answer: 1,
      explanation: "TNF-alpha inhibitors can reactivate latent TB because TNF is essential for maintaining granulomas. Prophylaxis with Isoniazid must be initiated at least 1 to 4 weeks before starting a TNF blocker."
    },
    {
      id: "p2aq4",
      question: "Which of the following is a key pharmacodynamic distinction between Unfractionated Heparin (UFH) and Low Molecular Weight Heparin (LMWH)?",
      options: [
        "UFH selectively inhibits Factor Xa over Factor IIa",
        "LMWH has equal affinity for both Factor Xa and Factor IIa (1:1 ratio)",
        "LMWH preferentially inhibits Factor Xa over Factor IIa (approx 3:1 ratio)",
        "Only UFH requires antithrombin III as a cofactor"
      ],
      answer: 2,
      explanation: "LMWH molecules are too short to efficiently bridge antithrombin to thrombin (Factor IIa), resulting in a higher ratio of anti-Xa to anti-IIa activity (3:1 to 4:1). UFH bridges both equally (1:1 ratio)."
    },
    {
      id: "p2aq5",
      question: "An oncology patient experiences severe hemorrhagic cystitis following a high-dose Cyclophosphamide regimen. Which agent should have been co-administered to prevent this?",
      options: ["Leucovorin", "Mesna", "Dexrazoxane", "Amifostine"],
      answer: 1,
      explanation: "Cyclophosphamide produces a toxic metabolite called acrolein, which causes sterile hemorrhagic cystitis. Mesna (2-mercaptoethane sulfonate) binds to and neutralizes acrolein in the urinary bladder."
    },
    {
      id: "p2aq6",
      question: "A patient with HFrEF is transitioned from Lisinopril to Sacubitril/Valsartan (ARNI). What is the mandatory washout period required between stopping Lisinopril and starting the ARNI?",
      options: ["No washout period needed", "12 hours", "36 hours", "72 hours"],
      answer: 2,
      explanation: "A 36-hour washout period is mandatory when switching from an ACE inhibitor to an ARNI to minimize the risk of severe angioedema caused by dual inhibition of bradykinin degradation."
    },
    {
      id: "p2aq7",
      question: "Which mechanism explains why patients taking SGLT2 inhibitors (e.g., Empagliflozin) are at risk of developing Euglycemic Diabetic Ketoacidosis (DKA)?",
      options: [
        "Severe insulin resistance induced directly by the drug",
        "Glucosuria decreases plasma glucose, reducing insulin secretion and stimulating glucagon release",
        "Direct toxicity to pancreatic beta cells",
        "Inhibition of renal ketone clearance channels"
      ],
      answer: 1,
      explanation: "SGLT2 inhibitors lower blood glucose via glucosuria, which triggers a decrease in endogenous insulin secretion and an increase in counter-regulatory glucagon. This alters the insulin/glucagon ratio, promoting lipolysis and ketogenesis while glucose remains near-normal."
    },
    {
      id: "p2aq8",
      question: "A patient experiencing a severe hypertensive crisis is given IV Sodium Nitroprusside. After 48 hours of continuous infusion, the patient develops altered mental status, metabolic acidosis, and a mousy odor on their breath. Which antidote is indicated?",
      options: ["N-acetylcysteine", "Sodium Thiosulfate", "Physostigmine", "Deferoxamine"],
      answer: 1,
      explanation: "Nitroprusside metabolism releases cyanide ions. Prolonged infusions can cause cyanide toxicity. Sodium Thiosulfate acts as a sulfur donor to the enzyme rhodanese, converting cyanide into non-toxic thiocyanate."
    },
    {
      id: "p2aq9",
      question: "A 45-year-old male with a history of severe acute gouty arthritis is found to have an under-excreting pattern of uric acid. He is initiated on Allopurinol. What screening should be prioritized in patients of Han Chinese or Thai descent before starting Allopurinol?",
      options: ["G6PD enzyme level", "HLA-B*58:01 allele testing", "TPMT genotype profiling", "CYP2C19 metabolizer status"],
      answer: 1,
      explanation: "The HLA-B*58:01 allele is strongly linked to Allopurinol-induced Severe Cutaneous Adverse Reactions (SCAR), including SJS/TEN, particularly in Han Chinese, Thai, and Korean populations."
    },
    {
      id: "p2aq10",
      question: "Which of the following describes the mechanism of action of Sugammadex?",
      options: [
        "Competitive antagonist at the post-synaptic nicotinic receptor",
        "Acetylcholinesterase inhibitor that decreases acetylcholine degradation",
        "Selective relaxant binding agent that encapsulates steroidal neuromuscular blockers",
        "Allosteric modulator of the ryanodine receptor"
      ],
      answer: 2,
      explanation: "Sugammadex reverses neuromuscular blockade by forming a water-soluble guest-host complex that encapsulates steroidal NMBAs (Rocuronium > Vecuronium) in plasma, creating a concentration gradient that pulls the drug away from the NMJ."
    },
    {
      id: "p2aq11",
      question: "A patient develops deep vein thrombosis (DVT) while taking Phenytoin. Warfarin therapy is initiated. How will Phenytoin affect the Warfarin dose requirement?",
      options: [
        "It will decrease the Warfarin dose requirement due to CYP2C9 inhibition",
        "It will increase the Warfarin dose requirement due to CYP2C9/CYP3A4 induction",
        "It will have no effect since both are highly protein-bound",
        "It will double the half-life of Warfarin"
      ],
      answer: 1,
      explanation: "Phenytoin is a potent inducer of hepatic CYP450 enzymes (including CYP2C9 and CYP3A4), which increases the metabolism of Warfarin. This necessitates a significantly higher dose of Warfarin to maintain a therapeutic INR."
    },
    {
      id: "p2aq12",
      question: "What is the biological target of Denosumab, a monoclonal antibody used in the treatment of severe osteoporosis?",
      options: ["Sclerostin", "RANK Ligand (RANKL)", "Cathepsin K", "TNF-alpha"],
      answer: 1,
      explanation: "Denosumab binds with high affinity to RANKL, mimicking the natural effect of osteoprotegerin. This blocks the interaction of RANKL with RANK receptors on osteoclasts, inhibiting osteoclast formation, function, and survival."
    },
    {
      id: "p2aq13",
      question: "A patient with chronic myeloid leukemia (CML) experiences treatment failure on Imatinib due to a T315I mutation. Which second/third-generation tyrosine kinase inhibitor is specifically engineered to overcome this mutation?",
      options: ["Dasatinib", "Nilotinib", "Ponatinib", "Bosutinib"],
      answer: 2,
      explanation: "The T315I 'gatekeeper' mutation creates steric hindrance that prevents most first- and second-generation TKIs from binding. Ponatinib is uniquely designed to bypass this mutation structure."
    },
    {
      id: "p2aq14",
      question: "Which parameter is most reliable for monitoring the therapeutic efficacy and safety of Low Molecular Weight Heparin (LMWH) in a pregnant patient with a mechanical heart valve?",
      options: ["Activated Partial Thromboplastin Time (aPTT)", "Prothrombin Time (PT/INR)", "Anti-Factor Xa activity assay", "Bleeding time"],
      answer: 2,
      explanation: "LMWH does not significantly prolong aPTT. Routine monitoring is not required for most patients, but in pregnant women, obese patients, or those with renal impairment, Anti-Factor Xa levels must be checked (drawn 4 hours post-dose)."
    },
    {
      id: "p2aq15",
      question: "A 28-year-old psychiatric patient is brought to the ER with hyperthermia ($40^\\circ\\text{C}$), severe 'lead-pipe' muscle rigidity, autonomic instability, and elevated creatine kinase (CK). He was recently started on Haloperidol. Which drug is preferred to treat this condition?",
      options: ["Physostigmine", "Dantrolene", "Flumazenil", "Cyproheptadine"],
      answer: 1,
      explanation: "The patient is presenting with Neuroleptic Malignant Syndrome (NMS). Dantrolene (a ryanodine receptor antagonist that reduces calcium release from the sarcoplasmic reticulum) or Bromocriptine (a dopamine agonist) are used for management."
    },
    {
      id: "p2aq16",
      question: "A patient undergoes an emergency CT scan with iodinated contrast media. The patient takes Metformin 1000 mg BID for Type 2 Diabetes. What is the correct management strategy regarding Metformin?",
      options: [
        "Continue Metformin without interruption if baseline eGFR is $>60\\text{ mL/min/1.73m}^2$",
        "Discontinue Metformin 48 hours before the procedure only",
        "Withhold Metformin at the time of the procedure, and restart 48 hours later provided renal function is re-evaluated and stable",
        "Switch to insulin permanently"
      ],
      answer: 2,
      explanation: "Iodinated contrast can cause acute contrast-induced nephropathy. If renal failure occurs, Metformin can accumulate, leading to fatal lactic acidosis. It must be held at the time of or prior to the procedure and withheld for 48 hours until renal stability is verified."
    },
    {
      id: "p2aq17",
      question: "Which of the following loop diuretics does NOT carry a cross-reactivity risk in patients with a confirmed severe sulfonamide (sulfa) allergy?",
      options: ["Furosemide", "Bumetanide", "Torsemide", "Ethacrynic Acid"],
      answer: 3,
      explanation: "Ethacrynic acid is a phenoxyacetic acid derivative, not a sulfonamide. It is the only loop diuretic that can be safely administered to a patient with a documented anaphylactic reaction to sulfa drugs."
    },
    {
      id: "p2aq18",
      question: "A patient with generalized anxiety disorder is initiated on Buspirone. Which statement accurately describes its mechanism and onset of action?",
      options: [
        "GABA-A receptor positive allosteric modulator; immediate onset",
        "5-HT1A receptor partial agonist; requires 2-4 weeks for therapeutic effect",
        "Alpha-2 adrenergic agonist; immediate onset",
        "Dopamine D2 receptor antagonist; requires 6 weeks for effect"
      ],
      answer: 1,
      explanation: "Buspirone acts as a partial agonist at serotonin 5-HT1A receptors. Unlike benzodiazepines, it lacks muscle relaxant, anticonvulsant, and sedative properties, and its therapeutic effects require several weeks to develop."
    },
    {
      id: "p2aq19",
      question: "An HIV-positive patient is being screened before starting Abacavir therapy. Testing for which genetic biomarker is required to prevent life-threatening hypersensitivity reactions?",
      options: ["HLA-B*57:01", "HLA-B*15:02", "CYP2D6 *4 allele", "CCR5 coreceptor expression"],
      answer: 0,
      explanation: "Carrying the HLA-B*57:01 allele is highly predictive of an Abacavir hypersensitivity reaction (characterized by rash, fever, and GI distress). Screening is mandatory prior to prescription."
    },
    {
      id: "p2aq20",
      question: "What is the primary mechanism of action of the antiarrhythmic drug Amiodarone, and what class does it belong to under the Vaughan Williams classification?",
      options: [
        "Sodium channel blockade; Class I",
        "Beta-adrenergic receptor blockade; Class II",
        "Potassium channel blockade (prolonging repolarization); Class III",
        "Calcium channel blockade; Class IV"
      ],
      answer: 2,
      explanation: "Amiodarone is primarily categorized as a Class III antiarrhythmic because it blocks potassium channels, prolonging action potential duration and effective refractory period. However, it also possesses Class I, II, and IV characteristics."
    },
    {
      id: "p2aq21",
      question: "A patient with severe major depressive disorder fails to respond to an SSRI and an SNRI. The psychiatrist decides to switch the patient to Phenelzine (an MAOI). How long must the washout period be after stopping Fluoxetine before starting Phenelzine?",
      options: ["24 hours", "7 days", "14 days", "5 weeks"],
      answer: 3,
      explanation: "Fluoxetine has an exceptionally long half-life (and an active metabolite, norfluoxetine). A minimum washout period of 5 weeks is required to prevent Serotonin Syndrome when transitioning to an MAOI. Other SSRIs require only 14 days."
    },
    {
      id: "p2aq22",
      question: "Which of the following descriptions matches the mechanism of action of Aliskiren?",
      options: [
        "Inhibits angiotensin-converting enzyme in the lungs",
        "Competitively blocks AT1 receptors in vascular smooth muscle",
        "Directly inhibits renin, preventing the conversion of angiotensinogen to angiotensin I",
        "Antagonizes aldosterone binding in the collecting duct"
      ],
      answer: 2,
      explanation: "Aliskiren is a direct renin inhibitor (DRI). By blocking renin at the top of the RAAS cascade, it prevents the rate-limiting conversion of angiotensinogen to angiotensin I."
    },
    {
      id: "p2aq23",
      question: "A chronic kidney disease patient with an eGFR of 15 mL/min develops deep vein thrombosis. Which oral anticoagulant is CONTRAINDICATED for monotherapy/maintenance in this patient?",
      options: ["Warfarin", "Rivaroxaban", "Apixaban", "Unfractionated Heparin"],
      answer: 1,
      explanation: "Direct Oral Anticoagulants (DOACs) like Rivaroxaban are heavily cleared by the kidneys. Rivaroxaban is contraindicated for DVT treatment if CrCl/eGFR is $<15\\text{ mL/min}$ due to high accumulation and bleeding risks. Warfarin remains the preferred oral agent in severe CKD."
    },
    {
      id: "p2aq24",
      question: "Which of the following side effects is uniquely associated with the use of the antiplatelet drug Ticagrelor compared to Clopidogrel?",
      options: ["Dyspnea", "Thrombocytopenia", "Neutropenia", "Hyperuricemia only"],
      answer: 0,
      explanation: "Ticagrelor inhibits adenosine reuptake in addition to blocking P2Y12 receptors. Increased extracellular adenosine levels can trigger transient, self-limiting dyspnea (shortness of breath)."
    },
    {
      id: "p2aq25",
      question: "A premature neonate develops severe respiratory depression and hypotonia. The mother received a continuous IV infusion during labor for pre-eclampsia. Which drug cross-over is responsible?",
      options: ["Labetalol", "Hydralazine", "Magnesium Sulfate", "Methyldopa"],
      answer: 2,
      explanation: "Hypermagnesemia in neonates occurs when the mother receives high-dose IV Magnesium Sulfate for pre-eclampsia/eclampsia. Magnesium crosses the placenta and causes neuromuscular blockade, manifesting as hypotonia and respiratory depression."
    },
    {
      id: "p2aq26",
      question: "A patient on digoxin therapy develops a cardiac arrhythmia. The serum digoxin level is found to be 3.2 ng/mL. Which of the following acute electrolyte shifts is a marker of severe, life-threatening digoxin toxicity?",
      options: ["Hypokalemia", "Hyperkalemia", "Hyponatremia", "Hypocalcemia"],
      answer: 1,
      explanation: "While hypokalemia predisposes a patient to digoxin toxicity, acute massive digoxin overdose causes *hyperkalemia* by poisoning the Na+/K+ ATPase pump globally, preventing potassium entry into cells. Serum potassium $>5.5\\text{ mEq/L}$ is an indication for Digoxin Immune Fab (Digibind)."
    },
    {
      id: "p2aq27",
      question: "What is the mechanism of action of the lipid-lowering agent Ezetimibe?",
      options: [
        "Inhibits the enzyme PCSK9, preventing LDL receptor degradation",
        "Activates PPAR-alpha receptors to increase fatty acid oxidation",
        "Selectively inhibits cholesterol absorption at the brush border of the small intestine via Niemann-Pick C1-Like 1 (NPC1L1) transporter",
        "Binds bile acids in the intestinal lumen, preventing enterohepatic recirculation"
      ],
      answer: 2,
      explanation: "Ezetimibe localizes to the brush border of the small intestine, where it selectively inhibits the NPC1L1 transporter. This reduces the delivery of intestinal cholesterol to the liver, upregulating hepatic LDL receptors."
    },
    {
      id: "p2aq28",
      question: "A patient is brought to the ER following an overdose of a tricyclic antidepressant (TCA). The ECG reveals a QRS duration of 140 ms and right axis deviation. What is the immediate first-line pharmaceutical intervention?",
      options: ["Physostigmine IV", "Sodium Bicarbonate IV (hypertonic)", "Amiodarone IV", "Flumazenil IV"],
      answer: 1,
      explanation: "TCAs block fast sodium channels in the myocardium, causing QRS widening and life-threatening ventricular arrhythmias. Hypertonic Sodium Bicarbonate ($NaHCO_3$) increases extracellular sodium concentrations and alters serum pH to decrease drug binding to the sodium channel."
    },
    {
      id: "p2aq29",
      question: "Which of the following agents is classified as a calcineurin inhibitor and requires routine therapeutic drug monitoring (TDM) to prevent nephrotoxicity?",
      options: ["Sirolimus", "Tacrolimus", "Mycophenolate Mofetil", "Azathioprine"],
      answer: 1,
      explanation: "Tacrolimus and Cyclosporine are calcineurin inhibitors used in transplant medicine. Both are highly nephrotoxic and undergo variable CYP3A4 metabolism, requiring careful TDM of whole blood trough levels."
    },
    {
      id: "p2aq30",
      question: "A patient with advanced prostate cancer is prescribed Leuprolide. Why must Flutamide or Bicalutamide be co-administered during the first two weeks of therapy?",
      options: [
        "To accelerate the down-regulation of GnRH receptors",
        "To prevent the transient 'testosterone flare' and associated bone pain or spinal cord compression",
        "To mitigate Leuprolide-induced hepatotoxicity",
        "To prevent severe hot flashes"
      ],
      answer: 1,
      explanation: "Leuprolide is a GnRH agonist. Initially, it stimulates GnRH receptors, causing a transient surge (flare) in LH, FSH, and testosterone before down-regulating receptors. An anti-androgen like Flutamide blocks receptors to prevent clinical worsening during this flare."
    },
    {
      id: "p2aq31",
      question: "Which characteristic of Linezolid makes it a high-risk choice for a patient concurrently taking a high-dose Selective Serotonin Reuptake Inhibitor (SSRI)?",
      options: [
        "It is a potent CYP2D6 inhibitor",
        "It possesses non-selective, weak monoamine oxidase inhibitor (MAOI) activity",
        "It causes severe QT interval prolongation",
        "It enhances the renal clearance of the SSRI"
      ],
      answer: 1,
      explanation: "Linezolid is a synthetic oxazolidinone antibiotic that has weak, reversible MAO inhibition properties. Concomitant use with serotonergic drugs (like SSRIs) can precipitate Serotonin Syndrome."
    },
    {
      id: "p2aq32",
      question: "An elderly patient with Parkinson's disease is experiencing severe visual hallucinations due to dopaminergic therapy. Which antipsychotic is the preferred choice in this scenario due to its low affinity for dopamine D2 receptors?",
      options: ["Haloperidol", "Risperidone", "Pimavanserin or Quetiapine", "Olanzapine"],
      answer: 2,
      explanation: "Quetiapine has a rapid dissociation rate from D2 receptors and low binding affinity, minimizing motor side effects in Parkinson's. Pimavanserin is an inverse agonist at 5-HT2A with no D2 blocking activity, making it highly specific for Parkinson's disease psychosis."
    },
    {
      id: "p2aq33",
      question: "A patient presents with high intraocular pressure and is prescribed Latanoprost ophthalmic drops. What is the mechanism of action of this drug?",
      options: [
        "Alpha-2 adrenergic receptor agonist decreasing aqueous humor production",
        "Beta-adrenergic receptor antagonist decreasing aqueous humor secretion",
        "Prostaglandin F2-alpha analog increasing uveoscleral outflow",
        "Carbonic anhydrase inhibitor reducing ciliary body secretion"
      ],
      answer: 2,
      explanation: "Latanoprost is a synthetic prostaglandin F2-alpha analog. It lowers intraocular pressure by increasing the uveoscleral outflow of aqueous humor from the eye."
    },
    {
      id: "p2aq34",
      question: "Which of the following statements regarding the pharmacokinetics of Phenytoin is TRUE?",
      options: [
        "It follows first-order elimination kinetics across all serum concentrations",
        "It switches from first-order to zero-order (saturation) kinetics within the therapeutic range",
        "Its clearance increases proportionally with an increase in dose",
        "It is minimally protein-bound ($<10\\%$)"
      ],
      answer: 1,
      explanation: "Phenytoin exhibits Michaelis-Menten (capacity-limited) kinetics. At low doses, elimination is first-order. At therapeutic ranges ($10\\text{--}20\\text{ mg/L}$), metabolic enzymes become saturated, and elimination switches to zero-order, where small dose increases cause disproportionate rises in plasma levels."
    },
    {
      id: "p2aq35",
      question: "A patient with severe persistent asthma is found to have elevated serum IgE levels. Which targeted monoclonal antibody therapy is indicated?",
      options: ["Mepolizumab", "Omalizumab", "Dupilumab", "Reslizumab"],
      answer: 1,
      explanation: "Omalizumab is a recombinant DNA-derived humanized IgG1k monoclonal antibody that selectively binds to human immunoglobulin E (IgE), preventing it from binding to mast cells and basophils."
    },
    {
      id: "p2aq36",
      question: "A patient presents with severe bradycardia and hypotension following an overdose of Metoprolol. After failing to respond to IV Atropine, which medication is considered the gold-standard antidote to bypass the beta-adrenergic receptor blockade?",
      options: ["Epinephrine infusion", "High-Dose Insulin Euglycemia Therapy (HDIE) + Glucagon", "Naloxone", "Calcium chloride bolus"],
      answer: 1,
      explanation: "Glucagon stimulates adenylate cyclase via specific G-protein coupled receptors independent of beta-adrenergic receptors, increasing intracellular cAMP and exerting positive inotropic and chronotropic effects."
    },
    {
      id: "p2aq37",
      question: "Which mechanism accounts for the development of tolerance to sublingual Nitroglycerin when used continuously without a drug-free interval?",
      options: [
        "Rapid down-regulation of vascular beta-2 receptors",
        "Depletion of intracellular sulfhydryl (-SH) groups required for nitric oxide conversion",
        "Upregulation of phosphodiesterase-5 enzymes",
        "Reflex activation of the sympathetic nervous system"
      ],
      answer: 1,
      explanation: "Organic nitrates require reduced sulfhydryl groups to be converted into active nitric oxide by mitochondrial aldehyde dehydrogenase. Continuous exposure depletes these tissue sulfhydryl donors, causing tolerance."
    },
    {
      id: "p2aq38",
      question: "A patient is prescribed Methotrexate for rheumatoid arthritis. The physician orders a once-weekly dosing regimen alongside daily Folic Acid supplementation. What is the purpose of the Folic Acid?",
      options: [
        "To increase the gastrointestinal absorption of Methotrexate",
        "To reduce Methotrexate-induced systemic toxicity, including stomatitis and bone marrow suppression",
        "To act synergistically against joint inflammation",
        "To prevent Methotrexate-induced nephrolithiasis"
      ],
      answer: 1,
      explanation: "Folic acid (or folinic acid) supplementation reduces the incidence of common adverse effects like oral mucosal ulcers, GI distress, and hepatic transaminase elevations without compromising the anti-inflammatory efficacy of low-dose Methotrexate."
    },
    {
      id: "p2aq39",
      question: "Which of the following direct oral anticoagulants (DOACs) acts as a direct Thrombin (Factor IIa) inhibitor?",
      options: ["Rivaroxaban", "Apixaban", "Dabigatran", "Edoxaban"],
      answer: 2,
      explanation: "Dabigatran etexilate is an oral prodrug that is converted into a potent, competitive, direct inhibitor of both free and clot-bound thrombin. Rivaroxaban, Apixaban, and Edoxaban are direct Factor Xa inhibitors."
    },
    {
      id: "p2aq40",
      question: "What is the specific antidote used to reverse life-threatening bleeding complications associated with Dabigatran therapy?",
      options: ["Andexanet Alfa", "Idarucizumab", "Protamine Sulfate", "Phytonadione"],
      answer: 1,
      explanation: "Idarucizumab (Praxbind) is a humanized monoclonal antibody fragment ($Fab$) that binds specifically to dabigatran with an affinity 350 times higher than that of thrombin, neutralizing its anticoagulant effect immediately."
    },
    {
      id: "p2aq41",
      question: "Which statement best describes the mechanism of action of the newer antiviral agent Remdesivir?",
      options: [
        "Inhibition of viral M2 ion channels",
        "Protease inhibitor preventing polyprotein cleavage",
        "Adenosine nucleotide analog that acts as a delayed chain terminator of viral RNA-dependent RNA polymerase (RdRp)",
        "Inhibitor of viral neuraminidase"
      ],
      answer: 2,
      explanation: "Remdesivir is an adenosine nucleotide prodrug. Once metabolized into its active triphosphate form, it competes with ATP for incorporation into viral RNA via RdRp, leading to delayed chain termination."
    },
    {
      id: "p2aq42",
      question: "A patient requires continuous therapy with Valproic Acid. Which of the following structural birth defects is highly associated with first-trimester exposure to this drug?",
      options: ["Phocomelia", "Neural tube defects (e.g., Spina Bifida)", "Clear cell adenocarcinoma of the vagina", "Gray baby syndrome"],
      answer: 1,
      explanation: "Valproic acid interferes with folate metabolism, causing an approximately 10-fold increase in the risk of neural tube defects (e.g., spina bifida aperta) when taken during the first trimester of pregnancy."
    },
    {
      id: "p2aq43",
      question: "A patient with a history of severe calcium oxalate renal calculi requires a diuretic for hypertension management. Which class is preferred due to its ability to decrease urinary calcium excretion?",
      options: ["Loop diuretics", "Thiazide diuretics", "Carbonic anhydrase inhibitors", "Osmotic diuretics"],
      answer: 1,
      explanation: "Thiazides enhance calcium reabsorption in the distal convoluted tubule, reducing hypercalciuria and lowering the recurrence of calcium oxalate kidney stones. Loop diuretics increase calcium excretion ('loops lose calcium')."
    },
    {
      id: "p2aq44",
      question: "Which of the following multi-drug regimens represents standard first-line 'triple therapy' for the eradication of Helicobacter pylori infection?",
      options: [
        "PPI + Amoxicillin + Azithromycin",
        "PPI + Clarithromycin + Amoxicillin",
        "PPI + Metronidazole + Tetracycline",
        "H2 Blocker + Clarithromycin + Ciprofloxacin"
      ],
      answer: 1,
      explanation: "Standard clarithromycin-based triple therapy consists of a Proton Pump Inhibitor (PPI), Clarithromycin 500 mg BID, and Amoxicillin 1 g BID (or Metronidazole 500 mg BID if penicillin-allergic) for 10-14 days."
    },
    {
      id: "p2aq45",
      question: "A clinical pharmacist notices a prescription for Clopidogrel and Omeprazole for a patient post-coronary stent placement. Why is this specific combination clinically problematic?",
      options: [
        "Omeprazole induces CYP2C19, causing toxic accumulation of Clopidogrel",
        "Omeprazole competitively inhibits CYP2C19, preventing the bioactivation of Clopidogrel and increasing stent thrombosis risk",
        "Clopidogrel decreases the absorption of Omeprazole",
        "The combination increases the risk of severe hyperkalemia"
      ],
      answer: 1,
      explanation: "Clopidogrel is a prodrug requiring activation by the hepatic CYP2C19 enzyme. Omeprazole is a moderate-to-potent CYP2C19 inhibitor. Co-administration reduces active metabolite levels of clopidogrel, compromising its antiplatelet efficacy."
    },
    {
      id: "p2aq46",
      question: "An elderly patient taking Lithium Carbonate for bipolar disorder is started on Hydrochlorothiazide for blood pressure control. What is the expected outcome of this drug interaction?",
      options: [
        "Decreased serum Lithium levels due to enhanced diuresis",
        "Increased serum Lithium levels, predisposing the patient to severe neurological toxicity",
        "Development of profound hypokalemia with no change in Lithium kinetics",
        "Precipitation of acute lithium-induced nephrogenic diabetes insipidus"
      ],
      answer: 1,
      explanation: "Thiazide diuretics cause sodium and water depletion in the distal tubule. This prompts the proximal tubule to increase the reabsorption of both sodium and lithium (which the kidney handles similarly), leading to a 25-40% increase in serum lithium levels and potential toxicity."
    },
    {
      id: "p2aq47",
      question: "What is the primary mechanism of action of the muscle relaxant Baclofen?",
      options: [
        "GABA-A receptor positive allosteric modulator",
        "GABA-B receptor agonist in the spinal cord",
        "Alpha-2 adrenergic agonist",
        "Direct inhibitor of calcium release from the ryanodine channel"
      ],
      answer: 1,
      explanation: "Baclofen acts as an agonist at metabotropic GABA-B receptors. Activation leads to hyperpolarization via increased potassium conductance, restricting calcium influx in presynaptic terminals and reducing spasticity."
    },
    {
      id: "p2aq48",
      question: "Which of the following biological agents targets the Interleukin-6 (IL-6) receptor and is used in severe rheumatoid arthritis and cytokine release syndrome (CRS)?",
      options: ["Adalimumab", "Tocilizumab", "Rituximab", "Ustekinumab"],
      answer: 1,
      explanation: "Tocilizumab is a humanized monoclonal antibody that binds to both soluble and membrane-bound IL-6 receptors, blocking the pro-inflammatory signaling cascade. It is a cornerstone therapy for CAR-T cell-induced CRS."
    },
    {
      id: "p2aq49",
      question: "A patient with diabetes is initiated on Pramlintide injections. Which physiological mechanism defines this medication?",
      options: [
        "GLP-1 receptor agonist maximizing incretin pathways",
        "Amylin analog that slows gastric emptying, suppresses glucagon, and enhances satiety",
        "DPP-4 inhibitor delaying native incretin breakdown",
        "Alpha-glucosidase inhibitor slowing carbohydrate breakdown"
      ],
      answer: 1,
      explanation: "Pramlintide is a synthetic analog of amylin, a neuroendocrine hormone co-secreted with insulin by pancreatic beta cells. It works via centrally mediated pathways to slow gastric transit and lower postprandial glucagon levels."
    },
    {
      id: "p2aq50",
      question: "Which of the following specialized antimicrobial agents is known to cause a severe, dose-dependent, or idiosyncratic aplastic anemia (bone marrow suppression) when given systemically?",
      options: ["Chloramphenicol", "Azithromycin", "Ceftriaxone", "Metronidazole"],
      answer: 0,
      explanation: "Chloramphenicol carries a black-box warning for serious bone marrow depression. It can cause dose-dependent reversible suppression, or an unpredictable, idiosyncratic, irreversible aplastic anemia with a high mortality rate."
    },
    {
      id: "p2aq51",
      question: "A patient on a high-dose infusion of Amphotericin B deoxycholate develops muscle weakness and ECG changes (U-waves). Which electrolyte disturbance is most likely responsible?",
      options: ["Hyperkalemia", "Hypokalemia and Hypomagnesemia", "Hypercalcemia", "Hypernatremia"],
      answer: 1,
      explanation: "Amphotericin B binds to ergosterol in fungal membranes but also interacts with cholesterol in human renal tubular cells. This induces membrane pore formation, leading to severe renal tubular wasting of potassium and magnesium."
    },
    {
      id: "p2aq52",
      question: "What is the primary mechanism by which Cilostazol improves walking distance in patients experiencing intermittent claudication due to peripheral arterial disease?",
      options: [
        "Inhibition of thromboxane A2 synthesis",
        "Phosphodiesterase-3 (PDE3) inhibition, increasing cAMP, causing vasodilation and antiplatelet effects",
        "Direct activation of endothelial nitric oxide synthase",
        "Antagonism of serotonin 5-HT2 receptors"
      ],
      answer: 1,
      explanation: "Cilostazol is a PDE3 inhibitor. By preventing cAMP breakdown, it leads to increased protein kinase A activation, resulting in smooth muscle relaxation (vasodilation) and inhibition of platelet aggregation."
    },
    {
      id: "p2aq53",
      question: "A patient with stable chronic angina is initiated on Ranolazine. What unique mechanism sets this drug apart from traditional antianginal agents (like beta-blockers or nitrates)?",
      options: [
        "It acts as a high-affinity blocker of L-type calcium channels",
        "It selectively inhibits the late inward sodium current ($I_{Na}$), reducing intracellular calcium overload",
        "It acts as a central alpha-2 agonist reducing sympathetic outflow",
        "It opens ATP-sensitive potassium channels in myocardial cells"
      ],
      answer: 1,
      explanation: "Ranolazine exerts antianginal and anti-ischemic effects without altering heart rate or blood pressure. It selectively inhibits the late inward sodium current, preventing downstream intracellular calcium overload via the Na+/Ca2+ exchanger."
    },
    {
      id: "p2aq54",
      question: "Which of the following features characterizes the mechanism of action of Mifepristone when used for medical termination of pregnancy?",
      options: [
        "Progesterone receptor antagonist",
        "Synthetic prostaglandin E1 analog inducing uterine contractions",
        "Oxytocin receptor agonist",
        "Competitive inhibitor of aromatase enzymes"
      ],
      answer: 0,
      explanation: "Mifepristone is a potent competitive antagonist at progesterone receptors. In the absence of progesterone, the decidua degenerates, leading to uterine lining shedding and detachment of the blastocyst."
    },
    {
      id: "p2aq55",
      question: "A patient with severe hypertriglyceridemia (Triglycerides $>600\\text{ mg/dL}$) is initiated on Fenofibrate. What is the molecular target of fibrate medications?",
      options: ["HMG-CoA Reductase enzyme", "Peroxisome Proliferator-Activated Receptor Alpha (PPAR-alpha)", "Cholesteryl Ester Transfer Protein (CETP)", "Niemann-Pick C1-Like 1 transporter"],
      answer: 1,
      explanation: "Fibrates activate the nuclear transcription factor PPAR-alpha. This upregulates the expression of lipoprotein lipase (LPL), downregulates apolipoprotein C-III, and increases fatty acid oxidation, sharply reducing VLDL and triglycerides."
    },
    {
      id: "p2aq56",
      question: "A patient presenting to the clinic is found to have a high serum level of Methemoglobin ($>30\\%$) following the usage of topical benzocaine spray. Which antidote should be administered immediately?",
      options: ["Deberoxamine", "Methylene Blue", "Dimercaprol", "Dimercaptosuccinic acid (DMSA)"],
      answer: 1,
      explanation: "Methylene blue is the specific antidote for drug-induced methemoglobinemia. It acts as an electron donor to NADPH-methemoglobin reductase, reducing ferric iron ($Fe^{3+}$) back to its functional ferrous state ($Fe^{2+}$) within hemoglobin."
    },
    {
      id: "p2aq57",
      question: "Which of the following is a classic toxic side effect of the chemotherapeutic drug Doxorubicin (Adriamycin), and what cardioprotective agent can mitigate it?",
      options: [
        "Pulmonary fibrosis; Dexrazoxane",
        "Dilated cardiomyopathy; Dexrazoxane",
        "Peripheral neuropathy; Leucovorin",
        "Hemorrhagic cystitis; Mesna"
      ],
      answer: 1,
      explanation: "Doxorubicin generates iron-dependent free radicals that induce oxidative damage in myocardial tissues, causing cumulative dilated cardiomyopathy. Dexrazoxane is an intracellular iron chelator given to minimize this risk."
    },
    {
      id: "p2aq58",
      question: "A patient with multiple sclerosis is prescribed Fingolimod. What is the mechanism of action of this oral immunomodulatory drug?",
      options: [
        "Inhibition of dihydroorotate dehydrogenase",
        "Sphingosine 1-phosphate (S1P) receptor modulator, sequestering lymphocytes in lymph nodes",
        "Monoclonal antibody targeting CD20 on B-cells",
        "Interferon beta-1a receptor agonist"
      ],
      answer: 1,
      explanation: "Fingolimod binds to S1P receptors on lymphocytes, causing internalization of the receptor. Without functional S1P receptors, lymphocytes cannot follow the gradient to exit lymph nodes, preventing them from entering the CNS to cause auto-immune damage."
    },
    {
      id: "p2aq59",
      question: "A patient with refractory schizophrenia is being considered for Clozapine therapy. Which mandatory laboratory parameter must be checked baseline and monitored regularly due to risk of agranulocytosis?",
      options: [
        "Serum Creatinine and Blood Urea Nitrogen",
        "Absolute Neutrophil Count (ANC)",
        "Alanine Aminotransferase (ALT) and Aspartate Aminotransferase (AST)",
        "Hemoglobin A1c"
      ],
      answer: 1,
      explanation: "Clozapine carries a strict black-box warning for severe neutropenia/agranulocytosis. In many jurisdictions, dispensing is conditional on an ANC registration system. If ANC drops below $1500/\\mu\\text{L}$ ($1000/\\mu\\text{L}$ for BEN patients), therapy must generally be interrupted."
    },
    {
      id: "p2aq60",
      question: "Which of the following second-generation antihistamines undergoes minimal hepatic metabolism and is primarily eliminated unchanged in the urine, making it a preferred option to avoid CYP450 drug interactions?",
      options: ["Loratadine", "Cetirizine or Fexofenadine", "Ebastine", "Rupatadine"],
      answer: 1,
      explanation: "Cetirizine and Fexofenadine do not undergo extensive hepatic metabolism via the CYP450 system. Cetirizine is eliminated largely unchanged in urine, while fexofenadine is cleared primarily via biliary/fecal pathways. Loratadine undergoes heavy CYP3A4/2D6 transformation."
    },
    {
      id: "p2aq61",
      question: "What is the primary pharmacological mechanism behind the development of gingival hyperplasia in patients taking long-term Nifedipine or Phenytoin?",
      options: [
        "Direct systemic induction of collagenase expression",
        "Altered calcium influx in gingival fibroblasts leading to decreased collagen degradation",
        "Local bacterial accumulation due to immunosuppression",
        "Direct mechanical irritation of dental tissues"
      ],
      answer: 1,
      explanation: "Gingival hyperplasia from Calcium Channel Blockers (CCBs) and Phenytoin is thought to stem from reduced intracellular calcium uptake by gingival fibroblasts. This decreases regular collagenase synthesis and activation, leading to excessive extracellular matrix accumulation."
    },
    {
      id: "p2aq62",
      question: "A patient with type 2 diabetes and chronic kidney disease is initiated on a GLP-1 receptor agonist. Which of the following agents does NOT require any renal dose adjustment even in advanced renal impairment?",
      options: ["Exenatide", "Liraglutide or Dulaglutide", "Lixisenatide", "None of the above"],
      answer: 1,
      explanation: "Liraglutide, Dulaglutide, and Semaglutide are cleared via endogenous proteolytic degradation and do not rely on renal clearance paths, unlike Exenatide, which is contraindicated in severe renal impairment ($CrCl < 30\\text{ mL/min}$)."
    },
    {
      id: "p2aq63",
      question: "Which of the following anti-HIV agents is classified as a Non-Nucleoside Reverse Transcriptase Inhibitor (NNRTI)?",
      options: ["Zidovudine", "Efavirenz", "Ritonavir", "Dolutegravir"],
      answer: 1,
      explanation: "Efavirenz, Nevirapine, and Rilpivirine are NNRTIs that bind non-competitively to an allosteric pocket on the HIV reverse transcriptase enzyme. Zidovudine is an NRTI; Ritonavir is a Protease Inhibitor; Dolutegravir is an INSTI."
    },
    {
      id: "p2aq64",
      question: "A patient presenting with acute decompensated heart failure is administered an IV infusion of Nesiritide. What is the identity and mechanism of this drug?",
      options: [
        "Recombinant human B-type natriuretic peptide (BNP) activating guanylyl cyclase",
        "Phosphodiesterase-5 inhibitor increasing cGMP",
        "Synthetic continuous loop diuretic acting on Henle's loop",
        "Calcium sensitizer increasing troponin-C affinity"
      ],
      answer: 0,
      explanation: "Nesiritide is a purified recombinant form of human BNP. It binds to natriuretic peptide receptors on vascular smooth muscle and endothelial cells, activating guanylyl cyclase to increase cGMP, resulting in smooth muscle relaxation and diuresis."
    },
    {
      id: "p2aq65",
      question: "A patient on long-term Amiodarone therapy requires thyroid surgery due to severe hyperthyroidism. Why does Amiodarone alter thyroid function assays?",
      options: [
        "It directly destroys follicular thyroid cells",
        "It contains high concentrations of iodine within its molecular structure and inhibits peripheral 5'-deiodinase activity",
        "It stimulates pituitary TSH expression via active metabolites",
        "It causes autoimmune lymphocytic thyroiditis"
      ],
      answer: 1,
      explanation: "Each molecule of amiodarone contains two iodine atoms, making up roughly 37% of its molecular weight. It blocks the peripheral conversion of T4 to T3 by inhibiting 5'-deiodinase, and the high iodine load can trigger either the Wolff-Chaikoff effect or the Jod-Basedow phenomenon."
    },
    {
      id: "p2aq66",
      question: "Which structural class of antibiotics is associated with an elevated risk of causing tendonitis and tendon rupture (particularly the Achilles tendon)?",
      options: ["Macrolides", "Fluoroquinolones", "Glycopeptides", "Aminoglycosides"],
      answer: 1,
      explanation: "Fluoroquinolones (e.g., Ciprofloxacin, Levofloxacin) carry a class wide black-box warning for tendonitis and tendon rupture. The risk is elevated in patients over 60, those taking concurrent corticosteroids, and organ transplant recipients."
    },
    {
      id: "p2aq67",
      question: "What is the biological pathway targeted by Ivacaftor, a specialized drug used in cystic fibrosis management?",
      options: [
        "Inhibition of mucus-secreting submucosal glands",
        "Potentiation of the CFTR (Cystic Fibrosis Transmembrane Conductance Regulator) protein gating channel",
        "Antagonism of epithelial sodium channels (ENaC)",
        "Direct lysis of extracellular DNA in sputum"
      ],
      answer: 1,
      explanation: "Ivacaftor is a CFTR potentiator. It targets specific mutations (such as G551D) where the CFTR channel reaches the cell surface but fails to open properly, increasing the gating probability of the channel to normalize chloride transport."
    },
    {
      id: "p2aq68",
      question: "A patient with advanced breast cancer overexpressing the HER2/neu receptor is initiated on Trastuzumab. What is the primary serious adverse effect associated with this monoclonal antibody that requires regular echocardiograms?",
      options: ["Pulmonary fibrosis", "Cardiotoxicity (declining LVEF without anthracycline-like structural changes)", "Severe nephrotic syndrome", "Ototoxicity"],
      answer: 1,
      explanation: "Trastuzumab is associated with a high risk of cardiotoxicity, manifesting as a decline in Left Ventricular Ejection Fraction (LVEF) and potential heart failure. Unlike anthracyclines, this effect is typically not dose-cumulative and is reversible upon discontinuation."
    },
    {
      id: "p2aq69",
      question: "Which of the following statements represents the mechanism of action of the anti-obesity drug Orlistat?",
      options: [
        "Central serotonin 5-HT2C receptor agonist promoting satiety",
        "Reversible inhibitor of gastric and pancreatic lipases, preventing dietary fat breakdown",
        "GLP-1 receptor agonist delaying gastric transport",
        "Sympathomimetic agent increasing systemic metabolic rate"
      ],
      answer: 1,
      explanation: "Orlistat works locally in the lumen of the stomach and small intestine by forming a covalent bond with the active serine site of gastric and pancreatic lipases. This inactivates the enzymes, preventing them from hydrolyzing dietary fat into absorbable free fatty acids."
    },
    {
      id: "p2aq70",
      question: "A patient develops severe hyperuricemia during a chemotherapy induction regimen for acute lymphoblastic leukemia. To prevent tumor lysis syndrome, the clinician prescribes Rasburicase. What is the mechanism of this agent?",
      options: [
        "Inhibits xanthine oxidase completely",
        "Recombinant urate oxidase enzyme that converts poorly soluble uric acid into highly soluble allantoin",
        "Uricosuric agent blocking renal URAT1 channels",
        "Direct inhibitor of purine synthesis pathways"
      ],
      answer: 1,
      explanation: "Rasburicase is a recombinant urate oxidase enzyme. Humans lack this native enzyme. It catalyzes the oxidation of uric acid into allantoin, an inactive and highly soluble metabolite easily excreted by the kidneys."
    },
    {
      id: "p2aq71",
      question: "Which of the following sedative-hypnotic agents acts as a high-affinity melatonin receptor agonist ($MT_1$ and $MT_2$) located within the suprachiasmatic nucleus of the hypothalamus?",
      options: ["Zolpidem", "Ramelteon", "Eszopiclone", "Suvorexant"],
      answer: 1,
      explanation: "Ramelteon is a selective melatonin receptor agonist with high affinity for MT1 and MT2 receptors. It has no affinity for GABA receptors and is indicated for insomnia characterized by difficulty with sleep onset."
    },
    {
      id: "p2aq72",
      question: "A patient is prescribed the azole antifungal Voriconazole. Which unique, transient side effect must the patient be warned about regarding their vision?",
      options: [
        "Irreversible optic nerve atrophy",
        "Transient visual disturbances, including altered light perception, blurred vision, and color changes (photopsia)",
        "Sudden development of closed-angle glaucoma",
        "Development of early-onset cataracts"
      ],
      answer: 1,
      explanation: "Voriconazole causes unique, reversible visual disturbances (photopsia) in about 30% of patients, typically occurring within 30 minutes of dosing during the first week of treatment due to local effects on retinal function."
    },
    {
      id: "p2aq73",
      question: "What is the primary molecular target of the anti-platelet medication Prasugrel, and how does it compare to Clopidogrel?",
      options: [
        "Irreversible P2Y12 adenosine diphosphate (ADP) receptor antagonist; requires less complex activation than clopidogrel",
        "Reversible P2Y12 antagonist; does not require activation",
        "Glycoprotein IIb/IIIa receptor blocker; administered intravenously",
        "Phosphodiesterase inhibitor"
      ],
      answer: 0,
      explanation: "Prasugrel is a thienopyridine prodrug that irreversibly blocks P2Y12 receptors. Compared to clopidogrel, its bioactivation is single-step and more efficient, resulting in more consistent platelet inhibition and fewer non-responder issues."
    },
    {
      id: "p2aq74",
      question: "A patient experiences an absolute contraindication to both ACE inhibitors and Angiotensin Receptor Blockers (ARBs) due to a history of severe bilateral renal artery stenosis. Which combination is a validated alternative for reducing mortality in HFrEF patients?",
      options: [
        "Amlodipine + Metoprolol succinate",
        "Isosorbide Dinitrate + Hydralazine",
        "Spironolactone + Ivabradine",
        "Clonidine + Furosemide"
      ],
      answer: 1,
      explanation: "The combination of Hydralazine (an arterial vasodilator) and Isosorbide Dinitrate (a venodilator) reduces cardiac preload and afterload. It is a proven alternative for patients with HFrEF who cannot tolerate ACE inhibitors or ARBs due to renal failure or angioedema."
    },
    {
      id: "p2aq75",
      question: "Which of the following biological molecules is an inhibitor of the PCSK9 enzyme, used to aggressively lower LDL-C levels in refractory familial hypercholesterolemia?",
      options: ["Evolocumab", "Mipomersen", "Lomitapide", "Bempedoic Acid"],
      answer: 0,
      explanation: "Evolocumab and Alirocumab are monoclonal antibodies that bind to PCSK9. By blocking PCSK9, they prevent the degradation of LDL receptors, increasing receptor recycling to clear more LDL-C from the blood."
    },
    {
      id: "p2aq76",
      question: "A patient under intensive care for a severe systemic infection develops sudden neuromuscular paralysis after receiving a high dose of IV Gentamicin concurrently with Vecuronium. What mechanism explains this interaction?",
      options: [
        "Gentamicin accelerates the degradation of Vecuronium",
        "Aminoglycosides inhibit pre-synaptic acetylcholine release and decrease post-synaptic sensitivity, potentiating neuromuscular blockers",
        "Gentamicin causes profound hyperkalemia that inactivates the NMJ",
        "Vecuronium blocks the renal clearance of Gentamicin"
      ],
      answer: 1,
      explanation: "Aminoglycosides can inhibit pre-synaptic voltage-gated calcium channels, reducing acetylcholine release at the motor endplate. They can also stabilize the post-synaptic membrane, which potentiates the effects of non-depolarizing neuromuscular blocking drugs."
    },
    {
      id: "p2aq77",
      question: "What is the primary mechanism of action of the anticonvulsant Vigabatrin?",
      options: [
        "Irreversible inhibition of GABA transaminase (GABA-T), increasing synaptic GABA levels",
        "Blockade of T-type calcium channels in the thalamus",
        "Allosteric enhancement of the GAT-1 GABA transporter",
        "Binding to the synaptic vesicle protein SV2A"
      ],
      answer: 0,
      explanation: "Vigabatrin is a structural analog of GABA that irreversibly inhibits GABA transaminase, the enzyme responsible for breaking down GABA. This leads to a substantial increase in interstitial brain concentrations of GABA."
    },
    {
      id: "p2aq78",
      question: "Vigabatrin treatment is restricted under special monitoring programs due to which high-risk, irreversible adverse effect?",
      options: ["Severe progressive hepatotoxicity", "Permanent concentric visual field loss (retinopathy)", "Aplastic anemia", "Severe acute pancreatitis"],
      answer: 1,
      explanation: "Vigabatrin causes progressive, permanent, concentric visual field loss (outer retinal damage) in 30-50% of patients. Regular visual field testing is mandatory before and during treatment."
    },
    {
      id: "p2aq79",
      question: "A patient with heavy chronic alcohol dependence undergoes acute withdrawal. Which benzodiazepines are preferred if the patient has underlying advanced hepatic cirrhosis?",
      options: ["Diazepam and Chlordiazepoxide", "Lorazepam, Oxazepam, or Temazepam", "Alprazolam and Midazolam", "Clonazepam only"],
      answer: 1,
      explanation: "Lorazepam, Oxazepam, and Temazepam (the 'LOT' drugs) undergo direct phase II glucuronidation conjugation rather than phase I oxidation via CYP450. Their clearance is less affected by severe hepatic cirrhosis."
    },
    {
      id: "p2aq80",
      question: "Which of the following descriptions defines the mechanism of action of the antiarrhythmic drug Adenosine when given for paroxysmal supraventricular tachycardia (PSVT)?",
      options: [
        "Blocks potassium channels to increase phase 3 repolarization time",
        "Activates A1 receptors, opening acetylcholine-sensitive potassium channels and inhibiting calcium influx in the AV node",
        "Acts as a powerful beta-receptor blocker",
        "Directly poisons the Na+/K+ ATPase pump"
      ],
      answer: 1,
      explanation: "Adenosine binds to A1 Gi-protein coupled receptors in the AV node. This suppresses adenylyl cyclase, decreases cAMP, inhibits L-type calcium channels, and opens K-ACh channels, hyperpolarizing the nodal tissue and temporarily slowing AV conduction."
    },
    {
      id: "p2aq81",
      question: "A patient is initiated on Tolvaptan for the management of hypervolemic hyponatremia secondary to SIADH. What is the mechanism of this medication?",
      options: [
        "Aldosterone receptor antagonist",
        "Selective oral vasopressin V2 receptor antagonist",
        "Inhibitor of the Na+/H+ exchanger",
        "V1a receptor agonist"
      ],
      answer: 1,
      explanation: "Tolvaptan is an oral selective vasopressin V2 receptor antagonist. By blocking V2 receptors in the renal collecting ducts, it promotes aquaresis (excretion of free water without electrolyte loss) to raise serum sodium levels."
    },
    {
      id: "p2aq82",
      question: "What is the physiological role of Cilgavimab and Tixagevimab (Evusheld) when utilized during viral pandemics?",
      options: [
        "Small-molecule inhibitors of viral proteases",
        "Long-acting monoclonal antibodies targeting the viral spike protein for pre-exposure prophylaxis",
        "Nucleoside reverse transcriptase chain terminators",
        "Inducers of host interferon production cascades"
      ],
      answer: 1,
      explanation: "Tixagevimab and Cilgavimab are long-acting human monoclonal antibodies directed against non-overlapping epitopes of the spike protein receptor-binding domain of SARS-CoV-2, used to provide passive immunity for pre-exposure prophylaxis."
    },
    {
      id: "p2aq83",
      question: "A psychiatric patient on Haloperidol experiences acute, severe dystonia (sustained muscle contractions of the neck). Which medication should be given immediately to reverse this extrapyramidal symptom?",
      options: ["Bromocriptine", "Benztropine or Diphenhydramine", "Dantrolene", "Propropanol"],
      answer: 1,
      explanation: "Acute dystonia stems from a functional excess of cholinergic output relative to blocked dopamine pathways in the striatum. Centrally acting anticholinergics like Benztropine or Diphenhydramine restore the dopamine-acetylcholine balance."
    },
    {
      id: "p2aq84",
      question: "Which of the following classes of oral antidiabetic agents carries a unique warning for increasing the risk of distal lower extremity amputations and bone fractures?",
      options: ["GLP-1 receptor agonists", "SGLT2 inhibitors (specifically Canagliflozin)", "Sulfonylureas", "Thiazolidinediones"],
      answer: 1,
      explanation: "Canagliflozin (an SGLT2 inhibitor) was flagged in clinical trials (CANVAS) for a significantly elevated risk of lower limb amputations and reductions in bone mineral density leading to fractures."
    },
    {
      id: "p2aq85",
      question: "A patient is prescribed Methyldopa for the management of gestational hypertension. What is the molecular mechanism of action of this drug?",
      options: [
        "Direct peripheral alpha-1 receptor antagonist",
        "Central alpha-2 adrenergic receptor agonist via conversion to alpha-methylnorepinephrine",
        "Direct relaxant of vascular smooth muscle endothelial walls",
        "Calcium channel blocker selective for vascular tissue"
      ],
      answer: 1,
      explanation: "Methyldopa is an alpha-2 adrenergic agonist. It is converted to alpha-methylnorepinephrine in central neurons, where it stimulates central alpha-2 receptors, reducing sympathetic outflow to the peripheral vasculature."
    },
    {
      id: "p2aq86",
      question: "Which of the following compounds is an inhibitor of the enzyme DOPA decarboxylase, co-formulated with Levodopa to maximize its entry into the central nervous system?",
      options: ["Entacapone", "Carbidopa", "Selegiline", "Pramipexole"],
      answer: 1,
      explanation: "Carbidopa inhibits peripheral DOPA decarboxylase. It does not cross the blood-brain barrier. This prevents the premature peripheral conversion of Levodopa to Dopamine, reducing systemic side effects (nausea, arrhythmias) and ensuring more levodopa reaches the brain."
    },
    {
      id: "p2aq87",
      question: "What is the primary mechanism of action of the immunosuppressant Mycophenolate Mofetil (MMF)?",
      options: [
        "Inhibition of calcineurin pathways via immunophilins",
        "Selective, reversible inhibition of inosine monophosphate dehydrogenase (IMPDH), blocking de novo purine synthesis in T and B lymphocytes",
        "Alkylating DNA strands in rapidly replicating bone marrow lines",
        "Competitive antagonism of dihydrofolate reductase"
      ],
      answer: 1,
      explanation: "MMF is a prodrug of mycophenolic acid, which selectively inhibits IMPDH. Since T and B lymphocytes rely entirely on the de novo pathway for purine synthesis (unlike other cells that can use salvage pathways), MMF selectively suppresses lymphocyte proliferation."
    },
    {
      id: "p2aq88",
      question: "A patient is admitted following a severe overdose of the drug Phenobarbital. To enhance the renal elimination of this weak acid drug, which intravenous intervention is recommended?",
      options: [
        "Continuous infusion of Ammonium Chloride to acidify the urine",
        "Continuous infusion of Sodium Bicarbonate to alkalinize the urine (urinary ion trapping)",
        "Administration of high-dose Loop diuretics only",
        "IV infusion of normal saline at 300 mL/hr"
      ],
      answer: 1,
      explanation: "Phenobarbital is a weak acid ($pK_a \\approx 7.4$). Alkalinizing the urine with IV Sodium Bicarbonate converts the drug into its ionized form ($A^-$) within the renal tubules. Ionized molecules cannot easily diffuse back across the tubular epithelium, trapping them in the urine for excretion."
    },
    {
      id: "p2aq89",
      question: "Which of the following properties differentiates standard Heparin (UFH) from Fondaparinux?",
      options: [
        "Fondaparinux is a synthetic pentasaccharide that exclusively and indirectly accelerates Factor Xa inhibition without binding to Thrombin",
        "Fondaparinux directly binds to the active site of Thrombin",
        "Fondaparinux carries a much higher risk of causing HIT",
        "Fondaparinux must be monitored daily using the aPTT assay"
      ],
      answer: 0,
      explanation: "Fondaparinux is a synthetic pentasaccharide sequence that binds selectively to antithrombin III, causing a conformational change that amplifies the neutralization of Factor Xa. It lacks the longer saccharide chains required to bind and neutralize Thrombin, and it does not cross-react with HIT antibodies."
    },
    {
      id: "p2aq90",
      question: "A patient treated with Gefitinib or Erlotinib for Non-Small Cell Lung Cancer (NSCLC) targets which molecular pathway?",
      options: [
        "Vascular Endothelial Growth Factor (VEGF) receptor",
        "Epidermal Growth Factor Receptor (EGFR) tyrosine kinase activity",
        "Anaplastic Lymphoma Kinase (ALK) translocation",
        "B-Raf proto-oncogene serine/threonine kinase"
      ],
      answer: 1,
      explanation: "Gefitinib and Erlotinib are small-molecule inhibitors that bind reversibly to the adenosine triphosphate (ATP) binding site of the EGFR intracellular tyrosine kinase domain, blocking downstream signaling that drives tumor growth."
    },
    {
      id: "p2aq91",
      question: "What is the primary therapeutic rationale for combining Cilastatin with Imipenem?",
      options: [
        "Cilastatin acts synergistically by binding to a different penicillin-binding protein site",
        "Cilastatin inhibits renal dehydropeptidase I, preventing the metabolic breakdown of Imipenem and avoiding nephrotoxic metabolites",
        "Cilastatin blocks the biliary excretion of Imipenem",
        "Cilastatin lowers the seizure risk associated with high-dose Imipenem"
      ],
      answer: 1,
      explanation: "Imipenem is rapidly hydrolyzed by the brush border enzyme dehydropeptidase I in the proximal renal tubules. Cilastatin is a specific inhibitor of this enzyme; its co-administration prevents degradation, maintaining therapeutic drug levels in the urinary tract."
    },
    {
      id: "p2aq92",
      question: "Which of the following medications is a specialized potassium binder that exchanges calcium for potassium in the gastrointestinal tract, used to treat hyperkalemia?",
      options: ["Sodium Polystyrene Sulfonate", "Patiromer or Sodium Zirconium Cyclosilicate", "Lanthanum Carbonate", "Sevelamer"],
      answer: 1,
      explanation: "Patiromer is a non-absorbed polymer that binds potassium in exchange for calcium in the colon. Sodium Zirconium Cyclosilicate exchanges sodium and hydrogen for potassium. These newer agents are safer alternatives to Sodium Polystyrene Sulfonate (Kayexalate), which carries a risk of intestinal necrosis."
    },
    {
      id: "p2aq93",
      question: "A patient with refractory chronic gout is initiated on Pegloticase. What is the mechanism of action of this agent?",
      options: [
        "Xanthine oxidase suicide inhibitor",
        "Pegylated recombinant uricase enzyme that breaks down uric acid into allantoin",
        "URAT1 and OAT4 selective renal transport inhibitor",
        "Inhibitor of neutrophil spindle formation"
      ],
      answer: 1,
      explanation: "Pegloticase is a pegylated recombinant uricase enzyme that metabolizes uric acid into the highly soluble substance allantoin. It is reserved for severe, treatment-refractory tophaceous gout due to its risk of inducing anti-drug antibodies and infusion reactions."
    },
    {
      id: "p2aq94",
      question: "Which statement accurately describes the mechanism of action of the direct renin inhibitor (DRI) Aliskiren regarding its impact on plasma renin activity (PRA)?",
      options: [
        "It decreases renin concentration and increases PRA",
        "It directly blocks the catalytic activity of renin, leading to a decrease in PRA despite an increase in total renin concentration",
        "It has no effect on PRA",
        "It irreversibly destroys renin storage vesicles in juxtaglomerular cells"
      ],
      answer: 1,
      explanation: "Aliskiren binds to the catalytic site of renin, blocking the conversion of angiotensinogen to Angiotensin I. This direct inhibition causes a drop in PRA. The resulting loss of negative feedback loops leads to a reactive increase in total plasma renin concentration, but the circulating renin remains inactive."
    },
    {
      id: "p2aq95",
      question: "A patient requires an injection of a localized anesthetic. Epinephrine is added to the Lidocaine solution. What is the primary pharmacological objective of this co-formulation?",
      options: [
        "To prevent lidocaine-induced cardiac conduction delays",
        "To induce localized vasoconstriction, reducing systemic absorption, extending duration of action, and lowering systemic toxicity",
        "To adjust the pH of the solution for less burning upon injection",
        "To act synergistically on local nerve sodium channels"
      ],
      answer: 1,
      explanation: "Epinephrine stimulates alpha-1 receptors locally, causing vasoconstriction. This restricts local blood flow, slowing the systemic absorption and clearance of Lidocaine. This keeps the anesthetic at the surgical site longer and minimizes systemic toxicity risks."
    },
    {
      id: "p2aq96",
      question: "Which of the following parameters describes the primary route of elimination and a major side effect of the antibiotic Daptomycin?",
      options: [
        "Biliary clearance; Severe hepatotoxicity",
        "Renal clearance; Myopathy and rhabdomyolysis requiring regular creatine kinase (CK) monitoring",
        "Hepatic metabolism; Severe aplastic anemia",
        "Fecal excretion; Pulmonary fibrosis"
      ],
      answer: 1,
      explanation: "Daptomycin is eliminated primarily unchanged by the kidneys and requires dose adjustment in renal impairment. Its most notable toxicity is skeletal muscle myopathy/rhabdomyolysis. Regular monitoring of weekly CK levels is recommended."
    },
    {
      id: "p2aq97",
      question: "Why is the antibiotic Daptomycin completely ineffective in the treatment of Gram-positive Methicillin-Resistant Staphylococcus aureus (MRSA) pulmonary infections (pneumonia)?",
      options: [
        "It does not achieve adequate tissue penetration in the lungs",
        "It is bound to and inactivated by pulmonary surfactant",
        "The acidic environment of the lungs neutralizes its structure",
        "MRSA strains in the lung down-regulate the daptomycin target receptor"
      ],
      answer: 1,
      explanation: "Daptomycin binds to and is inactivated by human pulmonary surfactant. Consequently, it should never be used to treat respiratory infections like MRSA pneumonia."
    },
    {
      id: "p2aq98",
      question: "A patient on regular maintenance Methadone therapy is prescribed Rifampin for tuberculosis. What clinical outcome should the pharmacist anticipate?",
      options: [
        "Severe methadone toxicity (respiratory depression) due to CYP3A4 inhibition",
        "Precipitation of acute opioid withdrawal symptoms due to Rifampin's potent induction of CYP3A4",
        "No interactive effect because methadone undergoes renal clearance",
        "Loss of therapeutic efficacy of Rifampin due to structural chelation"
      ],
      answer: 1,
      explanation: "Rifampin is a potent inducer of hepatic CYP3A4, the primary enzyme responsible for metabolizing methadone. Co-administration accelerates methadone clearance, which can precipitate acute withdrawal symptoms unless the methadone dose is adjusted upward."
    },
    {
      id: "p2aq99",
      question: "Which of the following loop diuretics acts via a non-sulfonamide mechanism, making it the choice for a patient with a history of anaphylactic shock to sulfamethoxazole?",
      options: ["Torsemide", "Bumetanide", "Ethacrynic Acid", "Furosemide"],
      answer: 2,
      explanation: "Ethacrynic acid is an unsaturated ketone derivative of phenoxyacetic acid. It contains no sulfonamide group, rendering it safe for patients with severe allergies to sulfa-containing drugs."
    },
    {
      id: "p2aq100",
      question: "A patient with Parkinson's disease experiences severe 'off-episodes' (acute immobilization). Which rescue medication administered subcutaneously acts as a potent dopamine receptor agonist to reverse this state immediately?",
      options: ["Bromocriptine", "Pramipexole", "Apomorphine", "Ropinirole"],
      answer: 2,
      explanation: "Apomorphine (Apokyn) is a high-affinity, non-ergoline dopamine D2-like receptor agonist injected subcutaneously as an acute rescue treatment for 'off' episodes in advanced Parkinson's disease. It causes severe emesis, requiring pre-treatment with an antiemetic like Trimethobenzamide."
    }
  ]
};

export default phase2Advanced;