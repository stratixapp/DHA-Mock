// PHASE 4-B: Advanced Obstetrics & Gynecology Nursing (100 Questions)
// Reference: Williams Obstetrics, Lowdermilk Maternal-Newborn Nursing, DHA Exam Blueprints

const phase4B = {
  phase: "4-B",
  title: "Advanced Obstetrics & Gynecology (DHA Standard)",
  icon: "🤰",
  color: "#d35400",
  questions: [
    {
      id: "p4bq1",
      question: "A multiparous patient at 39 weeks gestation is in active labor and receiving an oxytocin (Pitocin) infusion. The nurse notes a pattern of 6 contractions within a 10-minute window, with each contraction lasting 85 seconds. The fetal heart rate baseline is 140 bpm with moderate variability. What is the nurse's priority action?",
      options: ["Increase the oxytocin infusion rate slightly", "Turn off the oxytocin infusion immediately", "Administer a 500 mL bolus of Lactated Ringer's solution", "Prepare for an emergency cesarean section"],
      answer: 1,
      explanation: "The patient is experiencing uterine tachysystole (>5 contractions in 10 minutes over a 30-minute window). Tachysystole reduces uteroplacental blood flow because the uterus does not relax long enough between contractions to allow adequate fetal oxygenation. The immediate priority is to stop the oxytocin infusion."
    },
    {
      id: "p4bq2",
      question: "A patient at 34 weeks gestation presents to the emergency department reporting a sudden gush of clear fluid from her vagina. To confirm premature rupture of membranes (PROM), the nurse performs a sterile speculum examination. Which diagnostic finding unequivocally confirms the presence of amniotic fluid?",
      options: ["A vaginal fluid pH of 4.5 on Nitrazine paper", "Microscopic evaluation of the fluid showing a distinct ferning pattern as it dries", "The presence of squamous epithelial cells under high-power fields", "A negative white blood cell count in the vaginal pool"],
      answer: 1,
      explanation: "A structural 'ferning' pattern under a microscope is caused by the crystallization of salts and glycoproteins in amniotic fluid and is highly specific for PROM. Nitrazine paper can give false positives if blood, semen, or antiseptic soap is present because it simply measures alkalinity (amniotic fluid is pH 7.0–7.5, while normal vaginal discharge is 3.8–4.5)."
    },
    {
      id: "p4bq3",
      question: "The nurse is monitoring a fetal heart rate (FHR) tracing during active labor. The baseline is 145 bpm. The nurse observes a pattern of gradual, smooth decreases in FHR that begin *after* the peak of the uterine contraction and return to baseline well after the contraction has fully concluded. How should the nurse interpret this pattern and what is the underlying cause?",
      options: ["Early decelerations caused by fetal head compression; require no intervention", "Variable decelerations caused by umbilical cord compression; require position changes", "Late decelerations caused by uteroplacental insufficiency; require immediate intrauterine resuscitation", "Accelerations caused by fetal movement; indicate excellent oxygenation"],
      answer: 2,
      explanation: "Late decelerations are characterized by a gradual decrease and return to baseline FHR associated with a contraction, where the nadir occurs after the peak of the contraction. This indicates uteroplacental insufficiency (hypoxia) and requires immediate clinical steps: stopping oxytocin, turning the mother to her side, applying oxygen, and increasing IV fluids."
    },
    {
      id: "p4bq4",
      question: "A patient at 38 weeks gestation with severe preeclampsia is receiving an intravenous magnesium sulfate infusion at 2 g/hour. During the hourly assessment, the nurse notes: respiratory rate 8 breaths/minute, deep tendon reflexes (DTRs) 0/4 (absent), and urine output 10 mL over the last hour. What is the sequence of immediate actions?",
      options: ["Increase the magnesium dose, notify the physician, and draw a stat serum magnesium level", "Stop the magnesium infusion instantly, maintain airway, and prepare to administer 1 gram of 10% Calcium Gluconate IV slowly over 5–10 minutes", "Administer a 20 mg bolus of IV Furosemide to clear the magnesium through the kidneys", "Administer oxygen via nasal cannula and document the findings as a normal therapeutic response"],
      answer: 1,
      explanation: "The patient is showing clear signs of magnesium toxicity (respiratory depression, loss of reflexes, oliguria). Magnesium is cleared solely by the kidneys; thus, oliguria accelerates toxicity. The infusion must be stopped instantly, and its direct antagonist, Calcium Gluconate, administered to prevent respiratory or cardiac arrest."
    },
    {
      id: "p4bq5",
      question: "A G1P0 patient at 32 weeks gestation presents with painless, bright-red vaginal bleeding. The nurse notes the uterus is soft, relaxed, and non-tender on palpation. Fetal heart rate is reassuring. Which clinical intervention is strictly CONTRAINDICATED?",
      options: ["Continuous external fetal monitoring", "Performing a digital vaginal examination to assess cervical dilation", "Administering intramuscular Betamethasone", "Establishing large-bore intravenous access"],
      answer: 1,
      explanation: "The presentation is classic for placenta previa (painless, bright-red bleeding with a soft uterus). Performing a digital vaginal examination is strictly contraindicated because inserting a finger into the cervix can puncture or detach the placenta, leading to catastrophic, life-threatening maternal and fetal hemorrhage."
    },
    {
      id: "p4bq6",
      question: "The nurse is preparing to administer Methylergonovine (Methergine) intramuscularly to a patient experiencing postpartum hemorrhage due to uterine atony. Which baseline assessment value would prompt the nurse to immediately withhold the medication and notify the provider?",
      options: ["Maternal temperature of 38.2°C", "Blood pressure reading of 152/96 mmHg", "Heart rate of 114 beats/minute", "Platelet count of 110,000/mm³"],
      answer: 1,
      explanation: "Methylergonovine is an ergot alkaloid that induces smooth muscle contraction to treat uterine atony. However, it causes significant generalized arterial vasoconstriction. It is strictly contraindicated in patients with gestational hypertension, preeclampsia, or any pre-existing cardiovascular disease due to the high risk of triggering a hypertensive crisis or stroke."
    },
    {
      id: "p4bq7",
      question: "During the delivery of a macrosomic fetus, the infant's head emerges over the perineum but then immediately retracts tightly back against the maternal perineum (the 'turtle sign'). The anterior shoulder is impacted behind the maternal symphysis pubis. Which initial physical maneuver should the nurse perform immediately?",
      options: ["Apply strong, downward fundal pressure over the top of the maternal abdomen", "Instruct the patient to flex her thighs sharply against her abdomen (McRoberts Maneuver) and apply suprapubic pressure downwards", "Perform a high forceps-assisted extraction pull", "Instruct the mother to push as hard as possible without pausing"],
      answer: 1,
      explanation: "This is a shoulder dystocia emergency. Fundal pressure is strictly contraindicated because it further wedges the shoulder behind the symphysis pubis and risks uterine rupture. The correct initial response is the McRoberts maneuver (hyperflexing the maternal legs to widen the pelvis) combined with downward suprapubic pressure to dislodge the anterior shoulder."
    },
    {
      id: "p4bq8",
      question: "A patient at 36 weeks gestation is admitted with severe abruptio placentae. The nurse notes the sudden onset of generalized oozing of blood from the patient's IV insertion sites, bleeding gums, and petechiae across her chest. Which secondary hematological complication does this clinical state represent?",
      options: ["Idiopathic Thrombocytopenic Purpura (ITP)", "Disseminated Intravascular Coagulation (DIC)", "Von Willebrand's Disease flare-up", "Aplastic Anemia"],
      answer: 1,
      explanation: "Placental abruption releases massive amounts of tissue thromboplastin into the maternal circulation, triggering the extrinsic coagulation cascade. This consumes clotting factors and platelets rapidly, resulting in Disseminated Intravascular Coagulation (DIC), characterized by simultaneous widespread micro-thrombosis and severe systemic bleeding."
    },
    {
      id: "p4bq9",
      question: "A patient is 2 hours postpartum following a difficult forceps-assisted vaginal delivery of a 4.2 kg infant. She reports severe, unremitting rectal and perineal pressure and localized pain that is completely unresponsive to maximum ordered doses of oral analgesics. On inspection, the nurse notes a tense, fluctuant, purplish mass swelling on the left side of the perineum. What is the underlying cause?",
      options: ["Normal postpartum perineal edema and bruising", "A vulvar or vaginal hematoma", "Uterine inversion", "Incomplete placental separation fragments"],
      answer: 1,
      explanation: "A vulvar or vaginal hematoma occurs when blood collects in the pelvic soft tissues due to damage to a blood vessel during delivery (especially with macrosomia or operative deliveries like forceps). The classic signs are severe, deep, throbbing pain and a feeling of intense rectal/perineal pressure that pain medications cannot relieve, accompanied by a visible, tense bluish mass."
    },
    {
      id: "p4bq10",
      question: "A patient with type 1 diabetes mellitus at 36 weeks gestation is undergoing a contraction stress test (CST). The resulting tracing shows uterine contractions occurring every 3 minutes, with no late or significant variable decelerations noted anywhere on the monitor strip. How should the nurse interpret and document this test outcome?",
      options: ["Positive CST; indicating a need for an immediate cesarean section", "Negative CST; indicating a healthy fetus with adequate placental respiratory reserve", "Equivocal CST; requiring the test to be repeated within 2 hours", "Unsatisfactory CST; indicating insufficient contraction frequency"],
      answer: 1,
      explanation: "A negative contraction stress test is a reassuring result. It means that the fetus tolerated the stress of uterine contractions (which transiently reduce blood flow) without exhibiting signs of hypoxia (late decelerations). This implies the placenta has adequate respiratory reserve to sustain the fetus for another week."
    },
    {
      id: "p4bq11",
      question: "The nurse is reviewing the laboratory panel of a patient at 34 weeks gestation who was admitted for severe preeclampsia. The results indicate: Platelets 64,000/mm³, AST 180 U/L, ALT 165 U/L, and a peripheral blood smear showing fragmented red blood cells (schistocytes). What syndrome is this patient experiencing?",
      options: ["Atypical Hemolytic Uremic Syndrome", "HELLP Syndrome", "Acute Fatty Liver of Pregnancy", "Antiphospholipid Antibody Syndrome"],
      answer: 1,
      explanation: "HELLP syndrome is a severe variant of preeclampsia characterized by **H**emolysis (fragmented RBCs/schistocytes on blood smear), **E**levated **L**iver enzymes (AST/ALT), and **L**ow **P**latelets (<100,000/mm³). It is an obstetric emergency that carries high maternal and neonatal morbidity."
    },
    {
      id: "p4bq12",
      question: "A G2P1 patient at 39 weeks gestation is in the second stage of labor. Suddenly, during a contraction, she screams out in severe abdominal pain, stating that 'something tore inside me.' The nurse notes that the fetal head, which was previously at +2 station, has retracted back up out of the pelvis and can no longer be felt. The fetal heart rate drops to 50 bpm. What complication has occurred?",
      options: ["Amniotic fluid embolism", "Uterine inversion", "Uterine rupture", "Precipitous delivery acceleration"],
      answer: 2,
      explanation: "Uterine rupture is a catastrophic event, most common in patients with a history of a prior cesarean scar. Classic signs include a sudden sharp 'tearing' abdominal pain, a cessation of uterine contractions, loss of fetal station (the fetus slips out of the pelvis into the peritoneal cavity), and severe fetal distress/bradycardia."
    },
    {
      id: "p4bq13",
      question: "The nurse is evaluating an infant immediately after a vaginal delivery. At 1 minute of life, the infant is completely blue, has a heart rate of 92 bpm, displays a weak cry with minimal grimace when stimulated, and exhibits flaccid muscle tone with slow, irregular respirations. Calculate the 1-minute Apgar score for this newborn.",
      options: ["Apgar 2", "Apgar 3", "Apgar 4", "Apgar 5"],
      answer: 1,
      explanation: "The Apgar scoring breakdown is: Color: all blue = 0; Heart Rate: <100 bpm = 1; Reflex Irritability: grimace/weak cry = 1; Muscle Tone: flaccid = 0; Respiratory Effort: slow, irregular = 1. Total score = 0 + 1 + 1 + 0 + 1 = 3."
    },
    {
      id: "p4bq14",
      question: "A patient at 30 weeks gestation is admitted to the antenatal unit with confirmed preterm premature rupture of membranes (PPROM). The nurse tracks maternal vitals closely. Which clinical trending parameters are early indicators that the patient is developing chorioamnionitis?",
      options: ["Maternal bradycardia paired with a decrease in white blood cell counts", "Maternal tachycardia, elevated temperature (>38°C), uterine tenderness, and foul-smelling amniotic fluid", "Decreased blood pressure and increased deep tendon reflexes", "Sudden-onset generalized maculopapular rash"],
      answer: 1,
      explanation: "Chorioamnionitis is an intra-amniotic bacterial infection. Early clinical signs include maternal and fetal tachycardia, maternal fever (>38°C), localized uterine tenderness upon palpation, and foul-smelling or purulent amniotic fluid discharge."
    },
    {
      id: "p4bq15",
      question: "A multiparous patient has just delivered a 4.5 kg infant. The placenta is delivered intact 15 minutes later. Upon assessing the patient's fundus 10 minutes post-delivery, the nurse notes it is boggy, located 3 cm above the umbilicus, and displaced to the right side. What is the nurse's priority action?",
      options: ["Perform vigorous fundal massage for 15 minutes straight", "Administer a repeat dose of intravenous oxytocin", "Assist the patient to empty her bladder, or insert a straight catheter if she is unable to void", "Notify the physician to check for retained placental fragments"],
      answer: 2,
      explanation: "A fundus that is boggy, high up, and displaced to the right is a classic sign of uterine displacement caused by a distended bladder. A full bladder prevents the uterus from contracting efficiently, leading to uterine atony and hemorrhage. Emptying the bladder must be prioritized before re-evaluating uterine tone."
    },
    {
      id: "p4bq16",
      question: "A patient at 28 weeks gestation is diagnosed with gestational diabetes mellitus (GDM) following a 3-hour oral glucose tolerance test. Which underlying hormonal dynamic is primary in driving insulin resistance during pregnancy?",
      options: ["Insufficient maternal pancreatic beta-cell insulin secretion capacities", "Placental production of counter-regulatory hormones, mainly Human Placental Lactogen (hPL), cortisol, and progesterone", "Decreased maternal renal clearance of glucose molecules", "Direct destruction of insulin receptor sites by placental antibodies"],
      answer: 1,
      explanation: "Pregnancy is inherently a diabetogenic state. The placenta secretes high amounts of hormones—primarily Human Placental Lactogen (hPL), along with cortisol, progesterone, and prolactin—which act as insulin antagonists, decreasing maternal insulin sensitivity to ensure an abundant glucose supply for the growing fetus."
    },
    {
      id: "p4bq17",
      question: "During a routine prenatal appointment at 36 weeks gestation, a patient in a supine position on the exam table suddenly complains of dizziness, lightheadedness, nausea, and her skin becomes cool and clammy. The nurse notes a blood pressure drop from 120/78 to 90/54 mmHg. What is the immediate nursing action?",
      options: ["Place the patient in a high-Fowler's position", "Turn the patient onto her left side immediately", "Call for an emergent crash cart and establish an IV line", "Administer a quick dose of oral sublingual glucose paste"],
      answer: 1,
      explanation: "The patient is experiencing supine hypotensive syndrome (vena cava syndrome). When a pregnant woman lies flat on her back, the heavy uterus compresses the inferior vena cava, decreasing venous return to the heart, which drops cardiac output and blood pressure. Turning the patient onto her left side instantly removes the pressure and resolves the symptoms."
    },
    {
      id: "p4bq18",
      question: "A G1P0 patient at 38 weeks gestation is in active labor. An artificial rupture of membranes (ARM) is performed by the physician. Immediately following the rupture, the nurse notes the sudden onset of deep, prolonged variable decelerations on the fetal heart rate monitor down to 60 bpm. What should the nurse inspect for first?",
      options: ["Signs of maternal hyperventilation", "Umbilical cord prolapse through the cervix", "An abrupt change in maternal blood pressure parameters", "Presence of meconium-stained amniotic fluid"],
      answer: 1,
      explanation: "When membranes rupture while the fetal presenting part is not fully engaged, the umbilical cord can wash out ahead of or alongside the head, resulting in an umbilical cord prolapse. The sudden, severe compression of the cord produces immediate, deep variable decelerations or bradycardia. A visual and sterile manual check for a prolapsed cord is the priority action."
    },
    {
      id: "p4bq19",
      question: "The nurse is caring for a Rh-negative pregnant patient at 28 weeks gestation who has a negative indirect Coombs test. The physician orders the administration of Rho(D) Immune Globulin (RhoGAM). What is the therapeutic purpose of administering this medication at this point in the pregnancy?",
      options: ["To provide passive immunity to the fetus against Rh-positive blood cells", "To prevent the mother from forming active antibodies against Rh-positive fetal red blood cells that may cross the placenta", "To directly neutralize any Rh-negative antibodies present in the fetal circulation", "To stimulate the maternal bone marrow to produce safe Rh-negative antibodies"],
      answer: 1,
      explanation: "RhoGAM provides passive immunity by coating any Rh-positive fetal red blood cells that enter the maternal circulation, preventing the Rh-negative mother's immune system from recognizing them and forming active antibodies (sensitization). This protects future pregnancies from hemolytic disease of the newborn."
    },
    {
      id: "p4bq20",
      question: "A patient at 31 weeks gestation is admitted in confirmed preterm labor. The physician orders an intramuscular injection of 12 mg of Betamethasone, to be repeated in 24 hours. What is the primary clinical rationale for administering this corticosteroid?",
      options: ["To halt uterine contractions and extend the gestational period", "To stimulate fetal surfactant synthesis, reducing the incidence and severity of Neonatal Respiratory Distress Syndrome (RDS)", "To treat underlying subclinical maternal intra-amniotic infections", "To accelerate the closure of the fetal ductus arteriosus"],
      answer: 1,
      explanation: "Antenatal corticosteroids like Betamethasone or Dexamethasone are administered to women at risk for preterm delivery between 24 and 34 weeks gestation. Corticosteroids cross the placenta and stimulate the synthesis and release of surfactant in fetal lungs, accelerating lung maturation and lowering the risk of RDS."
    },
    {
      id: "p4bq21",
      question: "The nurse is reviewing a fetal heart rate tracing and notes a baseline of 140 bpm with a 'sinusoidal' pattern—a smooth, undulating, wave-like variation that repeats regularly at 3–5 cycles per minute and persists for over 30 minutes. What does this ominous pattern typically indicate?",
      options: ["Normal fetal sleep cycle variations", "Severe fetal anemia, fetal hydrops, or severe chronic asphyxia", "Maternal narcotic administration effect", "Umbilical cord entanglement that resolves spontaneously"],
      answer: 1,
      explanation: "A true sinusoidal fetal heart rate pattern is a Category III tracing and is an ominous sign. It represents severe fetal hypoxia, central nervous system derangement, or severe fetal anemia (such as from Rh isoimmunization or fetomaternal hemorrhage). It requires immediate delivery."
    },
    {
      id: "p4bq22",
      question: "A patient who is 1 day postpartum following a normal vaginal delivery is preparing for discharge. The nurse assesses her rubella immunity status, and the chart indicates a rubella titer of 1:6 (non-immune). The nurse prepares to administer the subcutaneous Measles-Mumps-Rubella (MMR) vaccine. Which discharge education instruction is critical?",
      options: ["Avoid breastfeeding the infant for the next 14 days", "The patient must strictly avoid becoming pregnant for at least 28 days (1 month) following vaccination", "Isolate from elderly individuals for 48 hours", "Report any transient localized arm soreness as an emergency drug allergy"],
      answer: 1,
      explanation: "The MMR vaccine is a live attenuated virus vaccine. Because live viruses can theoretically cross the placenta and cause congenital rubella syndrome, it is strictly contraindicated during pregnancy, and non-immune postpartum women who receive it must be strongly counseled to avoid pregnancy for at least 28 days."
    },
    {
      id: "p4bq23",
      question: "A patient at 35 weeks gestation presents with severe, sudden-onset epigastric pain, headache, and visual blurring. Her blood pressure is 174/112 mmHg. Urinalysis shows 3+ proteinuria. While assessing her, she suddenly loses consciousness and exhibits generalized tonic-clonic seizure movements. What is the nurse's immediate priority action during the active seizure phase?",
      options: ["Force a plastic padded tongue blade into her mouth to protect her tongue", "Turn the patient onto her side, clear the airway, protect her from trauma, and prepare to administer intravenous Magnesium Sulfate once the seizure stops", "Perform an immediate emergency bedside vacuum extraction delivery", "Administer 10 mg of intravenous Diazepam as quickly as possible"],
      answer: 1,
      explanation: "This is eclampsia. During an active seizure, the priority is maternal safety: turn her to her side to prevent aspiration, maintain an open airway, protect her from injury, and do not leave her side. Once the seizure concludes, oxygen should be applied, and a magnesium sulfate bolus administered to prevent recurrent seizures. Prying the mouth open is contraindicated."
    },
    {
      id: "p4bq24",
      question: "A patient at 8 weeks gestation presents to the clinic with severe, intractable nausea and vomiting. She has lost 6% of her pre-pregnancy body weight. Laboratory values reveal ketonuria, elevated blood urea nitrogen (BUN), and mild hypokalemia. What condition does the nurse suspect?",
      options: ["Normal physiologic morning sickness of first trimester", "Hyperemesis Gravidarum", "Gestational Trophoblastic Disease (Hydatidiform mole)", "Acute viral gastroenteritis outbreak"],
      answer: 1,
      explanation: "Hyperemesis gravidarum is severe, persistent nausea and vomiting during pregnancy that leads to significant dehydration, electrolyte imbalances (hypokalemia), ketonuria, and a weight loss of more than 5% of pre-pregnancy body weight, requiring intravenous hydration and antiemetic therapy."
    },
    {
      id: "p4bq25",
      question: "The nurse is assisting with a pelvic examination of a patient who has reached 41 weeks gestation. The physician calculates the Bishop score to evaluate cervical readiness for induction. Which five clinical parameters are measured in a Bishop score?",
      options: ["Cervical dilation, effacement, station, consistency, and position", "Fetal heart rate baseline, variability, accelerations, decelerations, and contractions", "Maternal age, parity, pelvic inlet diameter, interspinous diameter, and weight gain", "Amniotic fluid volume, fetal presentation, placental grading, fundal height, and lie"],
      answer: 0,
      explanation: "The Bishop score assesses cervical favorability for induction. It evaluates 5 components: cervical dilation, effacement, station of the presenting part, consistency of the cervix (firm, medium, soft), and position of the cervix (posterior, intermediate, anterior). A score of 8 or more suggests a high likelihood of a successful vaginal delivery."
    },
    {
      id: "p4bq26",
      question: "A multiparous patient in the second stage of labor is pushing effectively. Suddenly, the fetal heart rate monitor documents an abrupt, sharp decrease in FHR that drops below 70 bpm, lasts for 45 seconds, and has a characteristic 'U' shape with rapid downstrokes and upstrokes, accompanied by distinct pre- and post-deceleration accelerations ('shoulders'). What is the etiology?",
      options: ["Fetal head compression against the pelvic floor structure", "Umbilical cord compression", "Placental abruption with internal bleeding", "Maternal drug-induced bradycardia"],
      answer: 1,
      explanation: "Variable decelerations are characterized by an abrupt decrease in FHR below baseline, with a rapid return. They are variable in shape and timing relative to contractions and are caused by umbilical cord compression. Brief accelerations or 'shoulders' before and after the drop are reassuring signs of compensatory fetal mechanisms."
    },
    {
      id: "p4bq27",
      question: "The nurse is assessing a patient who is 12 hours postpartum following a prolonged labor and prolonged rupture of membranes. The patient reports pelvic pain and foul-smelling lochia. Her temperature is 38.6°C, and her uterus is soft, boggy, and exquisitely tender to palpation. What complication does the nurse suspect?",
      options: ["Pelvic thrombophlebitis", "Endometritis", "Mastitis", "Postpartum urinary tract infection"],
      answer: 1,
      explanation: "Endometritis is an infection of the inner uterine lining, most commonly occurring post-delivery after prolonged labor or rupture of membranes. Classic signs include a maternal fever (>38°C) starting after the first 24 hours, lower abdominal/pelvic pain, uterine tenderness, and foul-smelling or purulent lochia."
    },
    {
      id: "p4bq28",
      question: "A patient at 37 weeks gestation is admitted with a diagnosis of severe preeclampsia. The physician orders a continuous intravenous infusion of Hydralazine (Apresoline) to manage acute severe hypertension. What is the nurse's primary monitoring parameter during and immediately following the administration of this medication?",
      options: ["Maternal temperature patterns", "Hourly urine specific gravity changes", "Frequent blood pressure monitoring to catch acute maternal hypotension which can compromise fetal perfusion", "Deep tendon reflex grading"],
      answer: 2,
      explanation: "Hydralazine is a direct-acting smooth muscle vasodilator used to lower dangerously elevated blood pressure in preeclampsia. The nurse must monitor blood pressure closely (e.g., every 2–5 minutes during administration) because rapid drops can cause maternal hypotension, severely compromising uterine blood flow and causing acute fetal distress."
    },
    {
      id: "p4bq29",
      question: "A G1P0 patient at 10 weeks gestation presents with cramping, lower abdominal pain, and moderate vaginal bleeding. On speculum examination, the physician notes that the cervical os is open, and tissue is visible within the cervical canal. How should the nurse classify this type of spontaneous abortion?",
      options: ["Threatened abortion", "Inevitable abortion", "Complete abortion", "Missed abortion"],
      answer: 1,
      explanation: "An inevitable abortion is characterized by moderate-to-severe cramping, vaginal bleeding, and an **open** cervical os, indicating that miscarriage cannot be prevented. In a threatened abortion, bleeding occurs but the cervical os remains strictly closed."
    },
    {
      id: "p4bq30",
      question: "The nurse is caring for a patient who delivered a healthy newborn 6 hours ago. The nurse notes that the patient's lochia is bright red, contains a few small clots, and saturates one perineal pad every 3 hours. How should the nurse document this finding?",
      options: ["Abnormal postpartum hemorrhage; notify the doctor", "Normal Lochia Rubra", "Normal Lochia Serosa", "Normal Lochia Alba"],
      answer: 1,
      explanation: "Lochia rubra is the normal discharge seen during the first 1 to 3 days postpartum. It is characterized by dark-red or bright-red blood, decimal debris, and small clots. Saturating a pad in 3 hours is within normal limits; saturating a pad in less than 1 hour would indicate hemorrhage."
    },
    {
      id: "p4bq31",
      question: "A patient at 35 weeks gestation presents with sudden, agonizing abdominal pain that is continuous, accompanied by dark vaginal bleeding. On physical assessment, the nurse finds that the patient's abdomen is rigid, board-like, and extremely tender to touch. Fetal heart monitoring shows a baseline bradycardia of 80 bpm. What is the emergency scenario?",
      options: ["Placenta previa rupture", "Abruptio Placentae", "Preterm labor progression", "Acute appendicitis during pregnancy"],
      answer: 1,
      explanation: "Abruptio placentae involves the premature separation of a normally implanted placenta from the uterine wall. The classic triad of signs includes dark vaginal bleeding (can be concealed), severe continuous abdominal pain, and a rigid, 'board-like' hypertonic uterus, often paired with rapid fetal distress due to lack of oxygenation."
    },
    {
      id: "p4bq32",
      question: "The nurse is reviewing the charting of a laboring patient and notes the fetal position is documented as Left Occiput Posterior (LOP). What primary clinical manifestation should the nurse expect, and what nursing intervention is most helpful for this position?",
      options: ["Rapid, painless labor progression; keep the patient supine", "Severe, constant lower back pain ('back labor'); assist the patient into a hands-and-knees position and apply firm counter-pressure to the sacrum", "Inability to palpate contractions; apply an internal scalp electrode", "High risk of umbilical cord prolapse; keep the patient strictly flat"],
      answer: 1,
      explanation: "In an occiput posterior (OP) position, the fetal occiput presses directly against the maternal sacrum with every contraction, causing intense, agonizing 'back labor.' Assisting the patient into a hands-and-knees position helps the fetus rotate to an anterior position, and applying firm sacral counter-pressure helps alleviate the bone-on-bone pain."
    },
    {
      id: "p4bq33",
      question: "A patient at 36 weeks gestation with a history of recurrent genital Herpes Simplex Virus (HSV) Type 2 presents to the labor and delivery unit in early active labor. Which assessment is the absolute priority to determine the route of delivery?",
      options: ["Drawing serum HSV antibody titers", "Inspecting the vulva, perineum, and vagina for the presence of active herpetic lesions", "Asking the patient when her last outbreak occurred", "Checking if the membranes are intact"],
      answer: 1,
      explanation: "If a patient with a history of HSV has active genital lesions or prodromal symptoms (tingling, burning) at the time of labor, a cesarean delivery is mandatory to prevent neonatal transmission during birth, which can cause severe, life-threatening neonatal herpes encephalitis. Visual inspection is the priority."
    },
    {
      id: "p4bq34",
      question: "A patient who is 24 hours postpartum following a cesarean section reports localized warmth, tenderness, and swelling in her left calf muscle. The nurse notes asymmetric calf circumference measurements and a slight erythema. What is the nurse's priority action?",
      options: ["Vigorously massage the left calf muscle to break up any stagnation", "Place the patient on strict bed rest and notify the healthcare provider immediately for a suspected deep vein thrombosis (DVT)", "Assist the patient to ambulate immediately to improve circulatory return", "Apply a cold ice pack tightly around the left lower extremity"],
      answer: 1,
      explanation: "The clinical signs are highly indicative of a deep vein thrombosis (DVT), a high risk post-cesarean due to hypercoagulability and immobility. The patient must be placed on bed rest immediately, and the leg must **never** be massaged, as this can dislodge the clot and precipitate a fatal pulmonary embolism."
    },
    {
      id: "p4bq35",
      question: "The nurse is monitoring a patient who has just received an epidural block for pain relief in labor. Ten minutes after the injection, the patient's blood pressure drops from 124/80 to 88/46 mmHg, and she complains of feeling nauseated. What is the immediate sequence of interventions?",
      options: ["Place the patient in a Trendelenburg position and slow down the main IV fluids", "Turn the patient to a lateral side position, increase the intravenous crystalloid infusion rate rapidly, administer oxygen via face mask, and prepare to give IV Ephedrine if ordered", "Administer an oral antiemetic dose and keep her supine", "Prepare for immediate emergency forceps delivery"],
      answer: 1,
      explanation: "Epidural anesthesia blocks sympathetic nerve fibers, causing widespread vasodilation and a common side effect of maternal hypotension. This reduces uterine blood flow. The correct management involves lateral positioning (to maximize vena cava flow), open fluid lines to expand intravascular volume, oxygen, and vasopressors (like Ephedrine) if fluids fail."
    },
    {
      id: "p4bq36",
      question: "A G3P0 patient at 8 weeks gestation presents with sharp, one-sided lower abdominal pain and slight vaginal spotting. Her serum beta-hCG levels are elevated, but a transvaginal ultrasound reveals an empty uterine cavity. Which life-threatening complication must the nurse prepare for?",
      options: ["Hydatidiform mole", "Ruptured Ectopic Pregnancy", "Choriocarcinoma", "Incompetent cervix failure"],
      answer: 1,
      explanation: "One-sided lower abdominal pain, vaginal spotting, and an empty uterus on ultrasound with a positive pregnancy test point toward an ectopic pregnancy. If it ruptures, it can cause massive, hidden intra-abdominal hemorrhage and hypovolemic shock, making it an absolute medical emergency."
    },
    {
      id: "p4bq37",
      question: "The nurse is evaluating a newborn infant 12 hours after birth. The nurse notes that the infant has a localized swelling on the scalp that does not cross the cranial suture lines. How should the nurse document this finding and advise the parents?",
      options: ["Caput succedaneum; it will disappear spontaneously within a few days", "Cephalohematoma; it is a collection of blood between the periosteum and the skull bone that does not cross suture lines and will resolve in a few weeks", "Subgaleal hemorrhage; it requires an immediate blood transfusion", "Craniosynostosis; it requires urgent neurosurgical intervention"],
      answer: 1,
      explanation: "A cephalohematoma is a collection of blood between a skull bone and its periosteum, caused by pressure against the maternal pelvis or operative delivery. Because it is bounded by the bone's periosteum, it never crosses cranial suture lines. It resolves on its own within a few weeks but increases the risk of hyperbilirubinemia as the RBCs break down."
    },
    {
      id: "p4bq38",
      question: "A patient at 16 weeks gestation presents to the antenatal clinic with a history of painless cervical dilation in her second trimester during a previous pregnancy, which resulted in a loss. The physician schedules an elective cervical cerclage. What is the key educational point regarding this procedure?",
      options: ["The cerclage will remain in place permanently and requires a C-section for all future deliveries", "The cerclage string is a purse-string suture placed around the cervix to keep it closed, and it is typically removed at 36–37 weeks gestation to allow vaginal delivery", "The procedure prevents the development of gestational diabetes", "The patient must maintain absolute bed rest for the remainder of the pregnancy"],
      answer: 1,
      explanation: "A cervical cerclage is used to treat cervical insufficiency (an incompetent cervix). It is a suture placed around the cervix to prevent premature dilation. It is safely snipped at around 36–37 weeks gestation in an outpatient setting so the patient can undergo a normal vaginal labor when term is reached."
    },
    {
      id: "p4bq39",
      question: "A patient at 36 weeks gestation with chronic hypertension is admitted in suspected labor. Which assessment finding is most indicating an early, concealed placental abruption rather than normal labor progression?",
      options: ["An increase in the baseline fetal heart rate variability", "A progressive increase in resting uterine tone measured by an internal pressure catheter (IUPC), alongside unremitting abdominal pain", "The presence of a mucous plug discharge", "Contractions occurring every 4 minutes and lasting 45 seconds"],
      answer: 1,
      explanation: "In a concealed placental abruption, blood pools behind the placenta, causing the myometrium to become engorged and irritated. This presents as an elevated resting uterine tone (the uterus never fully relaxes between contractions, visible on IUPC as >20 mmHg) paired with constant, unremitting abdominal pain."
    },
    {
      id: "p4bq40",
      question: "The nurse is performing a newborn assessment 2 hours after a difficult breech delivery. The nurse notes that when the infant's crib is bumped, the infant symmetrical extends and abducts his left arm, but the right arm remains flaccidly adducted and internally rotated with the wrist flexed (the 'waiter's tip' position). What injury has occurred?",
      options: ["Fracture of the right clavicle bone", "Erb-Duchenne Paralysis (Brachial Plexus injury)", "Cerebral palsy secondary to intrapartum anoxia", "Congenital dislocation of the right shoulder"],
      answer: 1,
      explanation: "Erb's palsy is a brachial plexus injury involving the C5–C6 nerve roots, frequently caused by stretching of the neck during difficult deliveries (breech or shoulder dystocia). It manifests as an asymmetrical Moro reflex where the affected arm hangs limply in an adducted, internally rotated layout with a flexed wrist ('waiter's tip')."
    },
    {
      id: "p4bq41",
      question: "A G2P1 patient at 39 weeks gestation is undergoing an induction of labor using an intravenous oxytocin infusion. Her contractions are monitored via an intra-uterine pressure catheter (IUPC). The nurse notes that the baseline uterine resting tone is 28 mmHg, and contractions are peaking at 95 mmHg, occurring every 90 seconds. The fetal heart rate monitor shows recurrent late decelerations. What complication is occurring?",
      options: ["Normal hypertonic labor pattern", "Uterine hyperstimulation with hypertonus and fetal distress", "Inadequate uterine activity requiring more oxytocin", "Cervical dystonia"],
      answer: 1,
      explanation: "A normal resting tone between contractions should be 5–15 mmHg. A resting tone of 28 mmHg indicates uterine hypertonus (the muscle cannot relax), which constricts blood vessels and cuts off fetal oxygenation, causing the recurrent late decelerations. The oxytocin must be stopped immediately."
    },
    {
      id: "p4bq42",
      question: "A patient at 20 weeks gestation undergoes an ultrasound that reveals a large, multi-lobulated mass within the uterine cavity resembling a 'cluster of grapes,' and her serum beta-hCG levels are extraordinarily elevated for her gestational age. No fetal poles or heart activity are detected. What condition is present?",
      options: ["Choriocarcinoma development", "Hydatidiform Mole (Gestational Trophoblastic Disease)", "Multiple gestation pregnancy", "Advanced uterine fibroid degeneration"],
      answer: 1,
      explanation: "A hydatidiform mole is an abnormal proliferation of trophoblastic villi, which swell into fluid-filled fluid vesicles that look like a 'bunch of grapes' or a 'snowstorm' on ultrasound. It produces extremely high levels of beta-hCG, which often triggers severe hyperemesis gravidarum and early-onset preeclampsia."
    },
    {
      id: "p4bq43",
      question: "The nurse is providing discharge instructions to a postpartum mother who is breastfeeding her 2-week-old newborn. The mother calls the clinic reporting a painful, hard, reddened area on her left breast, accompanied by a fever of 38.9°C and severe chills. What should the nurse advise?",
      options: ["Stop breastfeeding immediately from both breasts and switch to formula permanently", "The symptoms suggest mastitis; she should contact her provider for antibiotics, continue to breastfeed frequently from both breasts (or pump) to maintain drainage, apply warm compresses, and rest", "Restrict her fluid intake to reduce breast milk production and engorgement", "Massage the area forcefully with an ice pack until the redness disappears"],
      answer: 1,
      explanation: "Mastitis is an infection of the breast tissue, usually caused by a blocked milk duct and bacterial entry. Treatment includes antibiotics and, crucially, completely emptying the breast through continued, frequent breastfeeding or pumping. The milk is safe for the infant, and stopping breastfeeding abruptly would worsen stagnation and could lead to a breast abscess."
    },
    {
      id: "p4bq44",
      question: "A patient at 32 weeks gestation is admitted with preterm labor. The physician prescribes intravenous Magnesium Sulfate for fetal neuroprotection. What is the primary clinical benchmark that this therapy achieves for the preterm infant?",
      options: ["It significantly accelerates fetal surfactant production in the alveoli", "It reduces the risk and severity of cerebral palsy and gross motor dysfunction in early childhood", "It prevents the development of neonatal hyperbilirubinemia", "It shortens the duration of neonatal transitional tachypnea"],
      answer: 1,
      explanation: "When given to women at risk for imminent preterm birth before 32–34 weeks gestation, magnesium sulfate acts as a neuroprotective agent for the fetus. It stabilizes neural membranes and reduces the risk of cerebral palsy and severe motor delays in the infant."
    },
    {
      id: "p4bq45",
      question: "During a delivery assessment, the nurse notices that the amniotic fluid is thick, green, and resembles 'pea soup.' After the infant's head is delivered but before the chest emerges over the perineum, what is the current gold-standard protocol for managing a vigorous newborn with meconium-stained fluid?",
      options: ["Perform deep endotracheal suctioning immediately on the perineum before the baby breathes", "Deliver the infant fully, dry and stimulate normally, and only perform airway suctioning with a bulb syringe if the infant exhibits signs of airway obstruction or is non-vigorous", "Perform an immediate gastric lavage on the infant", "Administer intra-amniotic amnioinfusion of normal saline immediately"],
      answer: 1,
      explanation: "Current neonatal resuscitation (NRP) guidelines state that if a baby born with meconium-stained amniotic fluid is vigorous (strong cry, good muscle tone), routine endotracheal suctioning on the perineum or immediately after birth is no longer recommended. Standard drying, stimulation, and basic bulb syringe suctioning of the mouth and nose are sufficient."
    },
    {
      id: "p4bq46",
      question: "A patient at 34 weeks gestation with severe preeclampsia complains of a sudden, sharp, intense epigastric pain that radiates to her back, accompanied by nausea and a sudden spike in blood pressure. What life-threatening hepatic complication must the nurse immediately evaluate for?",
      options: ["Acute viral hepatitis flare", "Subcapsular hepatic hematoma or liver rupture", "Choledocholithiasis obstruction", "Acute biliary colic"],
      answer: 1,
      explanation: "In severe preeclampsia and HELLP syndrome, microvascular thrombi and obstruction can cause hepatic ischemia, leading to subcapsular liver hemorrhage and hematoma formation. Severe epigastric or right upper quadrant pain is a key warning sign of a stretching hepatic capsule, which carries a risk of catastrophic liver rupture."
    },
    {
      id: "p4bq47",
      question: "The nurse is monitoring a patient in labor who is at 4 cm dilation. The external fetal monitor strip shows a fetal heart rate baseline of 135 bpm. During each contraction, the FHR exhibits a gradual, smooth decrease that mirrors the contraction exactly—beginning when the contraction starts, reaching its lowest point (nadir) at the exact peak of the contraction, and returning to baseline as the contraction ends. What does this indicate?",
      options: ["Late decelerations; indicating myocardial hypoxia", "Early decelerations; representing a benign vagal reflex due to fetal head compression during contractions", "Variable decelerations; indicating cord entanglement", "Sinusoidal pattern; indicating fetal anemia"],
      answer: 1,
      explanation: "Early decelerations are benign, symmetrical decreases in FHR that mirror uterine contractions. They are caused by transient fetal head compression, which triggers a vagal reflex that slows the heart rate. They do not require any clinical intervention or intrauterine resuscitation."
    },
    {
      id: "p4bq48",
      question: "A multiparous patient at 42 weeks gestation is undergoing induction of labor. Following an amniotomy, the nurse notes that the fetal heart rate has dropped to 85 bpm and remains low for 3 minutes. On vaginal examination, the nurse feels a pulsating loop of cord ahead of the fetal head. What is the nurse's immediate emergency action?",
      options: ["Call the physician and wait at the nurse's desk for instructions", "Keep the examining gloved hand in the vagina, applying upward manual pressure against the fetal presenting part to lift it off the cord, and call for an emergency cesarean section", "Attempt to push the umbilical cord back up through the cervix into the uterus", "Turn the patient into a flat supine layout and start an oxytocin infusion"],
      answer: 1,
      explanation: "This is a prolapsed umbilical cord emergency. The nurse must never remove their hand from the vagina; instead, they must maintain continuous upward pressure on the fetal presenting part to relieve compression on the cord, keeping the blood supply flowing. The patient should be placed in a knee-chest or Trendelenburg position, and rushed directly to an emergency cesarean section."
    },
    {
      id: "p4bq49",
      question: "A patient at 32 weeks gestation is hospitalized for preterm labor. The physician prescribes oral Nifedipine (Procardia) for tocolysis. Which physiologic baseline parameter must the nurse check before administering each dose of this medication?",
      options: ["Deep tendon reflexes", "Maternal blood pressure", "Serum potassium levels", "Blood glucose concentrations"],
      answer: 1,
      explanation: "Nifedipine is a calcium channel blocker used off-label as a tocolytic to suppress preterm uterine contractions by inhibiting calcium influx into myometrial cells. Because it is a potent systemic vasodilator, it can cause maternal hypotension. Blood pressure must be verified before each dose."
    },
    {
      id: "p4bq50",
      question: "The nurse is performing an assessment on a patient who is 2 hours postpartum following a rapid, precipitous 2-hour labor. The nurse notes that the patient's uterine fundus is firm, midline, and located at the level of the umbilicus. However, there is a continuous, steady trickle of bright-red blood flowing from her vagina. What is the most likely cause of this bleeding?",
      options: ["Uterine atony", "Retained placental fragments", "Cervical or vaginal lacerations", "Disseminated intravascular coagulation"],
      answer: 2,
      explanation: "When postpartum bleeding occurs as a continuous trickle of bright-red blood despite a **firm, well-contracted** uterine fundus, the source of the hemorrhage is almost always a laceration of the cervix, vagina, or perineum. This is common after rapid, precipitous deliveries."
    },
    {
      id: "p4bq51",
      question: "A patient at 26 weeks gestation undergoes a routine screening 1-hour oral glucose challenge test (GCT) with a 50-gram glucose load. Her resulting blood glucose level is 155 mg/dL. What should the nurse explain to the patient regarding the next clinical step?",
      options: ["She is diagnosed with gestational diabetes and must start insulin therapy immediately", "The result is normal; no further testing is required", "The result is elevated (>140 mg/dL), meaning she must undergo a definitive 3-hour oral glucose tolerance test (OGTT) using a 100-gram glucose load to confirm or rule out GDM", "She must repeat the 1-hour test after fasting for 24 hours"],
      answer: 2,
      explanation: "The 1-hour glucose challenge test is a screening tool. A blood glucose value $\\ge 140\\text{ mg/dL}$ (or sometimes $\\ge 130\\text{ mg/dL}$ depending on the protocol) is abnormal but not diagnostic of GDM. It requires a follow-up diagnostic 3-hour fasting OGTT to confirm the diagnosis."
    },
    {
      id: "p4bq52",
      question: "The nurse is assessing a patient who is 3 days postpartum and breastfeeding. She reports that her breasts are bilaterally swollen, firm, warm, throbbing, and extremely painful, making it difficult for the infant to latch. What condition is present, and what is the best initial intervention?",
      options: ["Bilateral breast abscess; stop breastfeeding", "Breast engorgement; apply warm compresses or take a warm shower right before feedings to stimulate let-down, use cold compresses between feedings to reduce swelling, and ensure frequent, complete breast emptying", "Early-onset mastitis; start immediate prophylactic antibiotics", "Galactocele formation; prepare for needle aspiration"],
      answer: 1,
      explanation: "Breast engorgement is a common physiological response around day 3–5 postpartum as mature milk comes in, caused by increased vascularity and milk accumulation. Management focuses on frequent feeding, using warmth before feeding to improve milk flow, and cold packs between feedings to compress blood vessels and reduce edema."
    },
    {
      id: "p4bq53",
      question: "A G1P0 patient at 39 weeks gestation is in active labor. The fetal head is engaged at 0 station. The physician decides to perform an operative vaginal delivery using vacuum extraction due to prolonged maternal exhaustion. What is the maximum number of vacuum pop-offs or detachments allowed before the procedure must be abandoned?",
      options: ["1 pop-off", "2 pop-offs", "3 pop-offs", "5 pop-offs"],
      answer: 2,
      explanation: "Obstetric standards limit vacuum-assisted extraction to a maximum of 3 cup detachments ('pop-offs') or a maximum duration of 15–20 minutes. Exceeding this significantly escalates the risk of severe neonatal cranial trauma, including subgaleal hemorrhage or cephalohematomas."
    },
    {
      id: "p4bq54",
      question: "A patient at 36 weeks gestation with severe preeclampsia is receiving a maintenance infusion of Magnesium Sulfate. The nurse reviews her morning laboratory results and notes a serum magnesium level of 11.5 mEq/L. Which physical assessment finding is most likely present at this specific serum concentration?",
      options: ["Hyperactive deep tendon reflexes (4+ clonus)", "Loss or absence of deep tendon reflexes (patellar hyporeflexia)", "Acute generalized tonic-clonic seizures", "Complete cardiac arrest in asystole"],
      answer: 1,
      explanation: "The therapeutic range for magnesium sulfate to prevent eclamptic seizures is 4–7 mEq/L. At levels between 8–10 mEq/L, deep tendon reflexes are lost. Respiratory depression occurs around 12–15 mEq/L, and cardiac arrest can occur if levels exceed 20 mEq/L."
    },
    {
      id: "p4bq55",
      question: "A patient at 35 weeks gestation presents with sudden abdominal pain and mild vaginal bleeding. The nurse applies an external electronic fetal monitor, which documents a uterine contraction pattern of very frequent, low-amplitude contractions occurring every 1 to 2 minutes with an elevated baseline resting tone between them. What does this high-frequency, hypertonic pattern indicate?",
      options: ["Normal Braxton Hicks contractions", "Incipient placental abruption", "Cervical insufficiency", "Excellent uterine efficiency"],
      answer: 1,
      explanation: "Uterine tachysystole paired with a high baseline resting tone (hypertonicity) and persistent abdominal pain is a hallmark clinical presentation of an underlying placental abruption. The blood pooling within the uterine walls irritates the myometrium, preventing full relaxation."
    },
    {
      id: "p4bq56",
      question: "The nurse is reviewing the prenatal record of a pregnant patient at 12 weeks gestation. The chart states she has a android pelvic shape. How should the nurse interpret this structural assessment regarding its impact on labor progression?",
      options: ["It is the ideal pelvic shape for a smooth, rapid vaginal birth", "It resembles a typical male pelvis, which features a narrow pubic arch and creates a high risk for cephalopelvic disproportion (CPD) and operative intervention", "It is wide and flat, favoring rapid transverse positions", "It ensures a guaranteed breech presentation delivery"],
      answer: 1,
      explanation: "The four classic pelvic classifications are gynecoid (ideal for childbirth), android (male-type), anthropoid (oval), and platypelloid (flat). An android pelvis has a narrow, heart-shaped inlet and a restricted pubic arch, which frequently impedes fetal rotation and descent, leading to a high rate of cesarean sections."
    },
    {
      id: "p4bq57",
      question: "A patient at 39 weeks gestation is admitted to the labor and delivery unit. During the initial assessment, the nurse performs Leopold's maneuvers. What is the fundamental clinical objective of conducting these four specific abdominal palpation steps?",
      options: ["To estimate the total volume of amniotic fluid present", "To determine fetal presentation, position, lie, and the degree of descent into the pelvis", "To measure the structural dimensions of the pelvic outlet", "To directly locate the site of placental implantation"],
      answer: 1,
      explanation: "Leopold's maneuvers are a systematic method of abdominal palpation used to determine: 1) what is in the uterine fundus (breech or head), 2) which side the fetal back is on, 3) what the presenting part is in the pelvic inlet, and 4) the location of the fetal brow/cephalic prominence to gauge engagement."
    },
    {
      id: "p4bq58",
      question: "A patient who is 2 days postpartum following a cesarean section develops sudden-onset severe dyspnea, sharp pleuritic chest pain, tachypnea, and an oxygen saturation of 82% on room air. She appears highly anxious. What life-threatening postpartum complication does this represent?",
      options: ["Amniotic fluid embolism", "Pulmonary Embolism (PE)", "Postpartum cardiomyopathy failure", "Bacterial pneumonia consolidation"],
      answer: 1,
      explanation: "Postpartum patients are in a hypercoagulable state for several weeks after birth, and a cesarean delivery further increases the risk of a deep vein thrombosis dislodging. A sudden onset of dyspnea, chest pain, and severe hypoxia is a classic presentation for a pulmonary embolism."
    },
    {
      id: "p4bq59",
      question: "The nurse is preparing to administer Terbutaline (Brethine) subcutaneously to a patient in preterm labor to temporarily halt contractions. Which maternal assessment parameter must the nurse evaluate immediately before pushing this medication?",
      options: ["Urine protein concentrations", "Maternal heart rate", "Core body temperature", "Deep tendon reflex grading"],
      answer: 1,
      explanation: "Terbutaline is a beta-2 adrenergic agonist used as a tocolytic. A prominent side effect of beta-1 receptor cross-stimulation is significant maternal tachycardia and palpitations. The nurse must check the maternal pulse before administration and hold the dose if the heart rate exceeds 120 bpm."
    },
    {
      id: "p4bq60",
      question: "A G1P0 patient at 40 weeks gestation has been pushing in the second stage of labor for 3 hours. The fetal head remains at a +1 station in an occiput posterior position. The nurse notes the emergence of a soft, edematous swelling across the infant's scalp that crosses the sagittal and coronal suture lines. What is this condition?",
      options: ["Cephalohematoma formation", "Caput Succedaneum", "Intracranial subdural hematoma", "Subgaleal laceration bleed"],
      answer: 1,
      explanation: "Caput succedaneum is a localized, benign area of edema on the scalp caused by sustained pressure from the cervix or vaginal walls during a prolonged labor. Because the fluid collects in the subcutaneous tissue outside the periosteum, it **crosses** suture lines. It requires no treatment and resolves within a few days."
    },
    {
      id: "p4bq61",
      question: "A patient at 38 weeks gestation is admitted to the high-risk unit with severe preeclampsia. Her physician orders a continuous intravenous infusion of Magnesium Sulfate for seizure prophylaxis. What is the standard loading dose regimen and maintenance dose sequence the nurse should prepare?",
      options: ["1–2 g bolus over 5 minutes; 4 g/hour maintenance", "4–6 g IV loading dose over 15–30 minutes; followed by a 1–2 g/hour continuous maintenance infusion", "10 g intramuscularly into each gluteal muscle every 2 hours", "0.5 g/hour continuous titration matching urine output metrics"],
      answer: 1,
      explanation: "The standard evidence-based regimen for magnesium sulfate administration in preeclampsia involves an initial intravenous loading dose of 4 to 6 grams administered slowly over 15 to 30 minutes, followed by a continuous maintenance infusion of 1 to 2 grams per hour to maintain stable therapeutic blood levels."
    },
    {
      id: "p4bq62",
      question: "The nurse is reviewing a fetal heart rate (FHR) monitor strip during active labor. The baseline FHR is 150 bpm. The nurse notes that the FHR drops abruptly down to 105 bpm, taking less than 15 seconds to reach its lowest point, and remains down for 30 seconds before returning rapidly to baseline. The shapes of the drops vary wildly and show no fixed timing relation to contractions. How should the nurse classify these decelerations?",
      options: ["Early decelerations", "Late decelerations", "Variable decelerations", "Prolonged decelerations"],
      answer: 2,
      explanation: "Variable decelerations are defined by an abrupt decrease (onset to nadir <30 seconds) in the fetal heart rate baseline. They are often associated with umbilical cord compression and show variability in their timing and shape relative to uterine contractions."
    },
    {
      id: "p4bq63",
      question: "A patient is 4 hours postpartum following an emergency cesarean section for a placental abruption. The nurse notes that the patient's abdominal dressing is saturated with bright-red blood, there is continuous moderate vaginal bleeding, and blood is oozing from her indwelling Foley catheter port. What immediate complication does this raise?",
      options: ["Severe uterine atony recurrence", "Disseminated Intravascular Coagulation (DIC)", "Normal postoperative oozing variations", "Unligated uterine artery branches"],
      answer: 1,
      explanation: "Placental abruption is a major trigger for DIC due to the systemic release of tissue thromboplastin. Simultaneous bleeding from the surgical incision, the vagina, and the urinary tract (hematuria via the catheter) indicates a severe consumption of clotting factors and platelets characteristic of DIC."
    },
    {
      id: "p4bq64",
      question: "A pregnant patient at 32 weeks gestation with pre-existing Type 1 Diabetes Mellitus undergoes a biophysical profile (BPP) for fetal surveillance. Which five specific parameters are scored during a comprehensive BPP ultrasound and monitoring session?",
      options: ["Fetal heart rate reactivity, fetal breathing movements, fetal body movements, fetal tone, and amniotic fluid volume", "Maternal blood pressure, maternal weight gain, fetal heart rate, cervical effacement, and dilation", "Fetal biparietal diameter, femur length, abdominal circumference, head circumference, and estimated weight", "Placental calcification grade, umbilical artery doppler flow, fetal gender, presentation, and lie"],
      answer: 0,
      explanation: "A Biophysical Profile (BPP) combines an external non-stress test (NST) with ultrasound visualization to score 5 biophysical variables: 1) Fetal heart rate reactivity (via NST), 2) Fetal breathing movements, 3) Gross fetal body movements, 4) Fetal muscle tone, and 5) Amniotic fluid volume. Each parameter receives a score of 0 or 2, for a maximum score of 10."
    },
    {
      id: "p4bq65",
      question: "The nurse is conducting a postpartum assessment on a patient who delivered vaginally 36 hours ago. On palpating the abdomen, where should the nurse expect to locate the top of the uterine fundus?",
      options: ["3 cm above the umbilicus", "At the level of the symphysis pubis", "Approximately 1 to 2 centimeters below the umbilicus, and firm in texture", "It should be completely unpalpable abdominally by day 2"],
      answer: 2,
      explanation: "Following delivery, the fundus sinks to the level of the umbilicus within the first 12 hours. Thereafter, it undergoes involution, descending at a rate of approximately 1 to 2 centimeters (or one fingerbreadth) every 24 hours. By 36 hours postpartum, it should be located 1–2 cm below the umbilicus and remain firm."
    },
    {
      id: "p4bq66",
      question: "A G1P0 patient at 39 weeks gestation is admitted to the labor suite. The nurse performs a sterile vaginal examination and records the following data: 6 cm / 80% / +1 station. How should the nurse interpret these three values in standard clinical sequence?",
      options: ["Cervix is 6% effaced, 80 cm dilated, and the head is 1 inch above the spines", "Cervix is 6 cm dilated, 80% effaced, and the fetal presenting part is 1 centimeter below the maternal ischial spines", "Cervical canal length is 6 inches, 80 mm open, and 1 station above the pelvic inlet", "The fetus is in a breech layout with a 6-minute contraction cycle"],
      answer: 1,
      explanation: "The standard sequence for recording a sterile vaginal exam is: **Dilation** (0 to 10 cm), **Effacement** (0% to 100% thinned out), and **Station** (position of the presenting part relative to the ischial spines, measured in centimeters from −5 to +5, where positive numbers indicate descent below the spines)."
    },
    {
      id: "p4bq67",
      question: "A patient at 20 weeks gestation is diagnosed with a complete hydatidiform mole. Following a successful suction curettage evacuation, which diagnostic follow-up protocol is critical for the nurse to emphasize to the patient to monitor for malignant transformations?",
      options: ["Weekly transvaginal ultrasounds for 2 years straight", "Serial monitoring of serum beta-hCG levels weekly until they reach zero, then monthly for 6 to 12 months, while strictly avoiding pregnancy during this time", "Annual endometrial biopsies", "Prophylactic pelvic radiation therapy sessions"],
      answer: 1,
      explanation: "Gestational trophoblastic disease carries a risk of transforming into choriocarcinoma, a highly malignant cancer. Tracking serial serum beta-hCG levels ensures that any rising levels (which would indicate persistent trophoblastic tissue or malignancy) are caught early. Pregnancy must be avoided during this time because a new pregnancy would raise hCG levels, making it impossible to accurately monitor for cancer recurrence."
    },
    {
      id: "p4bq68",
      question: "The nurse is monitoring a laboring patient whose fetus is in a frank breech presentation. The membranes rupture spontaneously. Which immediate risk must the nurse prioritize evaluating for?",
      options: ["Rapid precipitate acceleration of labor velocity", "Umbilical cord prolapse due to the poor fit of the breech presentation in the cervix", "An sudden change in maternal blood sugar levels", "Development of immediate maternal deep vein thrombosis"],
      answer: 1,
      explanation: "In a breech presentation (frank, complete, or footling), the fetal buttocks or feet do not seal the cervix as effectively as a hard, rounded head. When the membranes rupture, air or fluid currents can easily wash the umbilical cord down ahead of the fetus, causing a cord prolapse. Immediate assessment of fetal heart rates and inspection for cord visualization is mandatory."
    },
    {
      id: "p4bq69",
      question: "A patient at 33 weeks gestation presents with a blood pressure of 165/105 mmHg, severe frontal headache, and hyperreflexia with 4+ patellar reflexes and 3 beats of ankle clonus. Which medication should the nurse anticipate administering to prevent the onset of eclamptic seizures?",
      options: ["Diazepam (Valium)", "Phenytoin (Dilantin)", "Magnesium Sulfate", "Labetalol (Normodyne)"],
      answer: 2,
      explanation: "Magnesium sulfate is the drug of choice for preventing and treating eclamptic seizures in patients with severe preeclampsia. It acts centrally to block neuromuscular transmission and decrease CNS hyper-excitability. Antihypertensives like Labetalol lower blood pressure but do not prevent seizures as effectively as magnesium."
    },
    {
      id: "p4bq70",
      question: "During a postpartum home visit on day 5 after delivery, a patient reports that her vaginal discharge has changed from a bright-red color to a pinkish-brown, watery consistency. How should the nurse categorize this lochia type?",
      options: ["Normal Lochia Rubra prolongation", "Normal Lochia Serosa", "Normal Lochia Alba transition", "Abnormal postpartum secondary hemorrhage indicators"],
      answer: 1,
      explanation: "Lochia serosa is the normal second stage of postpartum uterine discharge, typically occurring from day 4 to day 10. It is composed of serous exudate, erythrocytes, leukocytes, and cervical mucus, giving it a characteristic pinkish-brown or serosanguinous appearance."
    },
    {
      id: "p4bq71",
      question: "A patient at 38 weeks gestation is admitted for an emergency induction of labor due to severe oligohydramnios. During the induction, the external fetal monitor displays repetitive, deep variable decelerations. The physician decides to initiate an amnioinfusion. What is the primary clinical objective of this procedure?",
      options: ["To directly dilute thick meconium patterns to prevent aspiration", "To instill warm sterile fluid into the uterine cavity to cushion the umbilical cord and relieve severe compression", "To chemically stimulate the cervix to expand faster", "To replace lost fetal urine output volumes directly"],
      answer: 1,
      explanation: "Oligohydramnios (low amniotic fluid) leaves the umbilical cord vulnerable to compression by the fetus or uterine walls, resulting in variable decelerations. An amnioinfusion infuses warm sterile saline or Lactated Ringer's into the uterus via an IUPC to restore fluid volume, cushioning the cord and relieving compression."
    },
    {
      id: "p4bq72",
      question: "A G1P0 patient at 39 weeks gestation has been in active labor for 14 hours. Her cervix has been stuck at 5 cm dilation for the past 4 hours despite having strong contractions every 3 minutes. The nurse notes that the fetal head is at a −2 station and is badly molded. What complication is preventing labor progression?",
      options: ["Precipitous labor arrest", "Cephalopelvic Disproportion (CPD)", "Normal transitional phase stalling", "Uterine inertia atony"],
      answer: 1,
      explanation: "Cephalopelvic disproportion (CPD) occurs when the fetal head is too large or positioned abnormally to pass through the maternal pelvis. Failure of the fetal head to descend (remaining at a high −2 station) despite prolonged, strong contractions, combined with an arrest in cervical dilation, is a classic presentation of CPD, requiring a cesarean section."
    },
    {
      id: "p4bq73",
      question: "The nurse is teaching a prenatal class about the warning signs of preterm labor. Which symptom profile should the nurse instruct the patients to report immediately if noticed between 20 and 37 weeks gestation?",
      options: ["Occasional painless tightening of the uterus once or twice a day", "Dull lower backache, pelvic pressure, menstrual-like abdominal cramps, an increase or change in vaginal discharge, and regular contractions occurring every 10 minutes or less", "Mild dependent ankle edema at the end of the day", "Increased frequency of urination without burning or pain"],
      answer: 1,
      explanation: "Preterm labor warning signs can be subtle. They include a dull, constant lower backache, a feeling of heavy pelvic pressure, intestinal-like cramping, a change in vaginal discharge (watery, mucus, or bloody), and rhythmic, regular uterine contractions occurring every 10 minutes or less, even if they are painless."
    },
    {
      id: "p4bq74",
      question: "A patient is 1 hour postpartum following a rapid vaginal delivery of twins. The nurse notes that her uterus is soft, flaccid, and bleeding heavily. Which medication would be contraindicated for this patient if she has a documented history of severe asthma?",
      options: ["Oxytocin (Pitocin)", "Carboprost Tromethamine (Hemabate)", "Methylergonovine (Methergine)", "Misoprostol (Cytotec)"],
      answer: 1,
      explanation: "Carboprost Tromethamine (Hemabate) is a prostaglandin F2-alpha analogue used to treat refractory postpartum hemorrhage by inducing intense uterine contractions. However, it also stimulates smooth muscle constriction in the bronchial tree, which can precipitate severe, life-threatening bronchospasm in patients with asthma."
    },
    {
      id: "p4bq75",
      question: "The nurse is monitoring a fetal heart rate tracing and notes that the baseline is 115 bpm. Over the last 20 minutes, the nurse records 3 distinct episodes where the FHR increases by 15 bpm above baseline, with each increase lasting exactly 15 seconds from start to return. How should the nurse interpret this tracing?",
      options: ["Reactive, reassuring Non-Stress Test (NST)", "Non-reactive NST requiring a contraction stress evaluation", "Fetal tachycardia indicating maternal infection", "Variable deceleration recovery pattern"],
      answer: 0,
      explanation: "A reactive Non-Stress Test (NST) at 32 weeks gestation or beyond requires at least 2 fetal heart rate accelerations of at least 15 bpm above baseline, lasting for at least 15 seconds (the 15x15 rule) within a 20-minute monitoring window. This is a reassuring sign of fetal well-being and central nervous system oxygenation."
    },
    {
      id: "p4bq76",
      question: "A patient at 36 weeks gestation with type 1 diabetes mellitus is scheduled for an amniocentesis. The primary clinical goal of this late-gestation procedure is to evaluate fetal lung maturity. Which laboratory ratio from the amniotic fluid sample indicates mature fetal lungs?",
      options: ["An Alpha-Fetoprotein (AFP) level below 2.5 MoM", "A Lecithin-to-Sphingomyelin (L/S) ratio greater than 2:1, along with the presence of Phosphatidylglycerol (PG)", "A high bilirubin optical density profile", "A creatinine clearance concentration > 2.0 mg/dL"],
      answer: 1,
      explanation: "Lecithin and sphingomyelin are lung phospholipids that make up surfactant. An L/S ratio greater than 2:1 typically signals fetal lung maturity. In diabetic pregnancies, however, lung maturation can be delayed despite a 2:1 ratio; therefore, the presence of phosphatidylglycerol (PG) is also verified to confirm that the lungs are fully mature and reduce the risk of neonatal RDS."
    },
    {
      id: "p4bq77",
      question: "The nurse is caring for a patient in labor who has reached 8 cm dilation. The patient suddenly becomes extremely irritable, loses focus, begins shivering, and complains of severe nausea and vomiting. How should the nurse categorize this phase of labor?",
      options: ["Early latent phase", "Active phase transition", "The Transition Phase of the first stage of labor", "The second stage expulsive phase"],
      answer: 2,
      explanation: "The transition phase occurs between 8 and 10 cm dilation during the first stage of labor. It is characterized by intense, frequent contractions and classic systemic signs of hormonal shifts, including shivering, irritability, loss of control, and nausea/vomiting. It indicates that full cervical dilation is imminent."
    },
    {
      id: "p4bq78",
      question: "A multiparous patient at 38 weeks gestation with an unengaged fetal presentation undergoes an artificial rupture of membranes. The nurse instantly notices that the fetal heart rate monitor documents a sudden drop to 65 bpm that persists for over 2 minutes. What is the nurse's priority action?",
      options: ["Increase the oxytocin infusion rate to accelerate the delivery velocity", "Perform an immediate sterile vaginal examination to evaluate for a prolapsed umbilical cord", "Apply a high-flow non-rebreather mask at 4 L/min to the mother", "Document the deceleration as a normal vagal reflex response to an ARM procedure"],
      answer: 1,
      explanation: "An unengaged fetus leaves space in the cervix for the umbilical cord to slip downward when membranes rupture. A sudden, severe, and prolonged deceleration immediately following amniotomy is highly suggestive of a cord prolapse. An immediate sterile vaginal exam must be performed to check for a cord and lift the fetal head if compression is present."
    },
    {
      id: "p4bq79",
      question: "The nurse is assessing a patient who is 6 hours postpartum following a long labor. The patient has been unable to void since birth. On palpation, the nurse notes a firm, rounded mass just above the symphysis pubis, and the uterine fundus is boggy and displaced to the right of the midline. What is the nurse's priority action?",
      options: ["Administer an ordered dose of methylergonovine to firm up the uterus", "Perform a vigorous fundal massage for 10 minutes", "Encourage the patient to ambulate to the bathroom, use warm water over her perineum, or perform a sterile straight catheterization if she is unable to void immediately", "Notify the physician of a suspected uterine inversion emergency"],
      answer: 2,
      explanation: "The presentation indicates postpartum urinary retention. A full bladder displaces the uterus upward and to the right, preventing effective myometrial contraction and increasing the risk of uterine atony and hemorrhage. Emptying the bladder is the priority to allow the uterus to return to the midline and contract normally."
    },
    {
      id: "p4bq80",
      question: "A patient at 35 weeks gestation presents with a blood pressure of 172/114 mmHg, 3+ proteinuria, and a severe headache. The physician diagnoses her with severe preeclampsia and initiates an intravenous magnesium sulfate infusion. Which clinical assessment parameter is the most sensitive early sign of developing magnesium toxicity?",
      options: ["A decrease or complete loss of deep tendon reflexes (patellar hyporeflexia)", "A drop in maternal core body temperature below 36°C", "The appearance of diffuse petechiae across the lower limbs", "An acute increase in the maternal respiratory rate to 28 breaths/minute"],
      answer: 0,
      explanation: "The loss of deep tendon reflexes is the earliest and most reliable clinical indicator of rising, toxic serum magnesium levels (typically occurring at 8–10 mEq/L). This precedes more dangerous signs like respiratory depression (<12 breaths/min) and cardiac conduction blocks, making hourly DTR assessments a critical nursing responsibility."
    },
    {
      id: "p4bq81",
      question: "The nurse is preparing to administer Rho(D) Immune Globulin (RhoGAM) to a postpartum patient. Which clinical scenario represents the correct indication for administering this medication after birth?",
      options: ["Rh-positive mother who has delivered an Rh-negative infant", "Rh-negative mother who has delivered an Rh-positive infant, with a negative maternal indirect Coombs test", "Rh-negative mother with a positive indirect Coombs test indicating active sensitization", "Rh-positive mother with an Rh-positive infant"],
      answer: 1,
      explanation: "RhoGAM is indicated within 72 hours after birth for an Rh-negative mother who delivers an Rh-positive infant, provided the mother has not already developed her own active antibodies (indicated by a negative indirect Coombs test). If she is already sensitized (positive Coombs), RhoGAM is no longer effective."
    },
    {
      id: "p4bq82",
      question: "A patient at 36 weeks gestation presents to the emergency department following a high-speed motor vehicle collision. She denies any vaginal bleeding or abdominal pain, and her vital signs are stable. What is the minimum recommended duration for continuous external electronic fetal monitoring (EFM) for this trauma patient?",
      options: ["30 minutes baseline assessment; then discharge if stable", "A minimum of 4 to 6 hours of continuous EFM to detect delayed placental abruption or fetal distress", "24 hours of strict ICU telemetry tracking", "No EFM is required if the maternal ultrasound shows an intact placenta"],
      answer: 1,
      explanation: "Following maternal abdominal trauma, there is a high risk of occult or delayed placental abruption, even in the absence of visible vaginal bleeding or pain. Trauma guidelines recommend a minimum of 4 to 6 hours of continuous electronic fetal monitoring; if uterine activity features $>6$ contractions per hour or bleeding occurs, monitoring must be extended to 24 hours."
    },
    {
      id: "p4bq83",
      question: "The nurse is reviewing an electronic fetal monitor strip and notes a baseline heart rate of 145 bpm. During a contraction, the FHR exhibits a gradual, smooth decrease that begins after the contraction starts, reaches its lowest point well after the peak of the contraction, and returns to baseline long after the contraction has ended. What does this pattern indicate?",
      options: ["Early decelerations; indicating head compression", "Variable decelerations; indicating cord compression", "Late decelerations; indicating fetal hypoxemia due to uteroplacental insufficiency", "Prolonged decelerations; indicating rapid descent parameters"],
      answer: 2,
      explanation: "Late decelerations are caused by uteroplacental insufficiency, where coronary and systemic oxygen delivery to the fetus drops below critical thresholds during a contraction. Because the drop is driven by hypoxia rather than a direct reflex, the deceleration lags behind the contraction cycle. This is a non-reassuring sign that requires immediate intervention."
    },
    {
      id: "p4bq84",
      question: "A patient at 38 weeks gestation with severe preeclampsia is receiving an intravenous magnesium sulfate infusion. Her total urine output over the past 4 hours is measured at 60 mL (average 15 mL/hour). What is the nurse's priority action?",
      options: ["Increase the magnesium sulfate infusion rate to promote renal vasodilation", "Hold the magnesium sulfate infusion and notify the healthcare provider immediately due to the high risk of rapid drug accumulation and toxicity", "Administer an immediate oral fluid bolus of 500 mL", "Document the output as a typical physiological variance in preeclampsia"],
      answer: 1,
      explanation: "Magnesium sulfate is excreted exclusively through the kidneys. A urine output of less than 30 mL/hour (or <100 mL over 4 hours) indicates renal impairment, which can quickly lead to toxic accumulations of magnesium. The nurse must halt the infusion and notify the provider to prevent respiratory or cardiac arrest."
    },
    {
      id: "p4bq85",
      question: "A multiparous patient gives birth to a 4.6 kg infant via a difficult vaginal delivery. Ten minutes post-delivery, the nurse notes a sudden gush of dark blood from the vagina, the umbilical cord appears to lengthen by several inches, and the uterine fundus becomes firm and globular. What do these signs indicate?",
      options: ["Incipient postpartum hemorrhage due to uterine atony", "Normal signs of placental separation during the third stage of labor", "Uterine inversion emergency", "Retention of secondary placental lobes"],
      answer: 1,
      explanation: "The three classic signs of placental separation during the third stage of labor are: 1) a sudden gush of dark blood from the introitus, 2) lengthening of the umbilical cord as the placenta descends, and 3) the uterus changing from a flat disk shape to a firm, rounded, globular structure. These are normal findings."
    },
    {
      id: "p4bq86",
      question: "The nurse is caring for a patient who is 24 hours postpartum following a prolonged labor with ruptured membranes for 36 hours. The patient develops a temperature of 38.8°C, tachycardia of 110 bpm, and severe lower abdominal pain. Her lochia is purulent and foul-smelling. What is the first-line medical treatment for this condition?",
      options: ["Oral administration of Amoxicillin for 7 days", "Intravenous broad-spectrum antibiotic therapy (typically Clindamycin and Gentamicin) until the patient is afebrile for 24 hours", "Immediate emergency dilation and curettage (D&C)", "Hysterectomy preparation protocols"],
      answer: 1,
      explanation: "The patient is presenting with classic symptoms of severe postpartum endometritis. Because it is a polymicrobial infection of the uterine cavity, it requires aggressive intravenous broad-spectrum antibiotic therapy—most commonly a combination of clindamycin and gentamicin—until she remains completely afebrile for at least 24 hours."
    },
    {
      id: "p4bq87",
      question: "A patient at 32 weeks gestation presents with regular, painful uterine contractions occurring every 5 minutes. The physician performs a sterile speculum exam and obtains a swab of vaginal secretions to test for fetal fibronectin (fFN). The test result comes back as NEGATIVE. How should the nurse interpret this finding?",
      options: ["The patient is in true labor and will deliver within 48 hours", "There is a very high probability (95–99%) that the patient will NOT deliver within the next 7 to 14 days, allowing for reassurance and conservative management", "The test is invalid due to the presence of amniotic fluid", "The patient requires an immediate emergency cesarean section"],
      answer: 1,
      explanation: "Fetal fibronectin (fFN) is a 'glue-like' protein found between the fetal sacs and the uterine lining. A negative fFN test has a very high negative predictive value. It indicates that preterm delivery within the next 1–2 weeks is highly unlikely, allowing clinicians to avoid unnecessary hospitalizations and tocolytic therapies."
    },
    {
      id: "p4bq88",
      question: "The nurse is managing a high-dose oxytocin (Pitocin) infusion protocol for a laboring patient. Which contraction profile would require the nurse to immediately stop the infusion to protect fetal oxygenation?",
      options: ["Contractions occurring every 3 minutes, lasting 50 seconds, with moderate intensity", "Contractions occurring every 90 seconds (more than 5 contractions in 10 minutes), or individual contractions lasting longer than 90 seconds (uterine tachysystole)", "Contractions occurring every 4 minutes, lasting 60 seconds, with a resting tone of 10 mmHg", "Contractions peaking at 60 mmHg on the IUPC display monitor"],
      answer: 1,
      explanation: "Uterine tachysystole occurs when contractions happen too frequently ($>5$ contractions within a 10-minute window) or last too long ($>90$ seconds). This prevents adequate blood and oxygen exchange in the placenta, leading to progressive fetal hypoxia and distress. The oxytocin must be stopped immediately."
    },
    {
      id: "p4bq89",
      question: "A G1P0 patient at 30 weeks gestation is admitted with severe preeclampsia. Her blood pressure is 178/116 mmHg. The physician orders an immediate intravenous dose of Labetalol (Normodyne) to lower her blood pressure. Which maternal pre-existing medical condition is a strict CONTRAINDICATION for receiving Labetalol?",
      options: ["Type 1 Diabetes Mellitus", "Severe Asthma or Chronic Obstructive Pulmonary Disease", "Chronic Glomerulonephritis", "Gestational Cholestasis"],
      answer: 1,
      explanation: "Labetalol is a non-selective beta-blocker with alpha-1 blocking activity. Because it blocks beta-2 receptors in the lungs, it can cause significant smooth muscle constriction in the bronchioles, potentially triggering a severe bronchospasm or asthma attack in patients with a history of asthma or COPD."
    },
    {
      id: "p4bq90",
      question: "The nurse is monitoring a newborn infant 4 hours after birth. The infant was born to a mother with poorly controlled gestational diabetes. The nurse notes that the infant is large-for-gestational-age, jittery, exhibits tremors of the extremities, and has a high-pitched cry. What is the nurse's immediate action?",
      options: ["Administer an intramuscular injection of Vitamin K", "Check the newborn's blood glucose level via a heel stick immediately to evaluate for neonatal hypoglycemia", "Place the infant under phototherapy lights for hyperbilirubinemia", "Document the jitteriness as a normal newborn transitional behavior"],
      answer: 1,
      explanation: "Infants born to diabetic mothers are at high risk for neonatal hypoglycemia. In utero, the fetus produces high levels of insulin in response to maternal hyperglycemia; after birth, the maternal glucose supply is suddenly cut off, but the infant's pancreas continues to hyper-secrete insulin, causing blood sugar levels to drop rapidly. Jitteriness and tremors are classic signs of hypoglycemia."
    },
    {
      id: "p4bq91",
      question: "A patient at 38 weeks gestation is in active labor. Her membranes rupture spontaneously, and the nurse notes that the fluid is clear but contains long, thick, dark-green particles. How should the nurse document this finding and prepare for delivery?",
      options: ["Normal clear amniotic fluid with vernix particles", "Amniotic fluid with thick meconium staining; notify the pediatric resuscitation team to be present at birth", "Amniotic fluid with high bilirubin concentration ratios", "Normal sign of advanced cervical dilation speed"],
      answer: 1,
      explanation: "Dark-green particles in the amniotic fluid indicate meconium staining, which occurs when a fetus passes its first stool in utero, often due to a transient hypoxic stress event. Thick meconium carries a risk of Meconium Aspiration Syndrome (MAS), so the pediatric resuscitation team must be present at delivery to manage the airway if needed."
    },
    {
      id: "p4bq92",
      question: "A patient who is 2 hours postpartum following a rapid vaginal delivery complains of severe, sharp, tearing pain in her perineal area that is not relieved by ibuprofen. On visual inspection, the nurse notes a tense, swelling, bluish-purple mass approximately 5 cm in diameter on the right labia majora. What is the priority nursing intervention?",
      options: ["Apply a warm, moist compress to the area to promote circulation", "Notify the physician immediately, apply an ice pack to the site, and prepare the patient for a possible surgical incision and drainage of a vulvar hematoma", "Instruct the patient to squeeze her pelvic floor muscles firmly", "Document the mass as normal postpartum bruising and re-evaluate in 24 hours"],
      answer: 1,
      explanation: "The patient has a vulvar hematoma, caused by rapid bleeding into the subcutaneous tissues from a damaged blood vessel during delivery. Severe pain that is unresponsive to analgesics, combined with a tense, expanding bluish mass, is a classic presentation. The nurse should apply an ice pack to limit bleeding and notify the provider, as expanding hematomas often require surgical intervention."
    },
    {
      id: "p4bq93",
      question: "The nurse is assessing a patient at 28 weeks gestation during a routine prenatal visit. The nurse measures the fundal height from the symphysis pubis to the top of the uterine fundus. Which measurement would be considered normal and expected for this gestational age?",
      options: ["20 centimeters (± 2 cm)", "28 centimeters (± 2 cm)", "36 centimeters (± 2 cm)", "42 centimeters (± 2 cm)"],
      answer: 1,
      explanation: "Between 20 and 36 weeks gestation, the fundal height measured in centimeters should closely correlate with the gestational age in weeks, within a normal variance of plus or minus 2 cm (e.g., at 28 weeks, a fundal height of 26 to 30 cm is expected). Discrepancies may indicate oligohydramnios, polyhydramnios, or fetal growth restriction."
    },
    {
      id: "p4bq94",
      question: "A patient at 39 weeks gestation is admitted in active labor. Her cervical exam is 5 cm dilated and 90% effaced. The external monitor strip shows a fetal heart rate baseline of 140 bpm with moderate variability. During a contraction, the FHR exhibits a gradual, smooth decrease that begins exactly when the contraction starts, reaches its lowest point at the peak of the contraction, and returns to baseline as the contraction ends. What is the nurse's interpretation?",
      options: ["Late deceleration due to placental insufficiency; require immediate oxygen", "Early deceleration due to fetal head compression; a normal, benign finding requiring observation", "Variable deceleration due to cord compression; require position changes", "Sinusoidal pattern indicating severe fetal distress"],
      answer: 1,
      explanation: "This describes an early deceleration. Because its onset, peak, and recovery mirror the uterine contraction exactly, it is a benign finding caused by transient head compression triggering a vagal reflex. It does not indicate fetal hypoxia and requires no clinical intervention."
    },
    {
      id: "p4bq95",
      question: "A G1P0 patient at 36 weeks gestation with severe preeclampsia is receiving an intravenous magnesium sulfate infusion. The nurse's hourly assessment reveals a respiratory rate of 10 breaths/minute, absent deep tendon reflexes, and confusion. What is the nurse's immediate action?",
      options: ["Increase the infusion rate to control her blood pressure", "Stop the magnesium sulfate infusion immediately and notify the healthcare provider", "Administer an intravenous dose of hydralazine", "Encourage the patient to perform deep breathing exercises"],
      answer: 1,
      explanation: "A respiratory rate below 12 breaths/minute combined with absent deep tendon reflexes are classic signs of magnesium toxicity. The immediate priority is to turn off the infusion to prevent further accumulation, and notify the provider so that the antidote, calcium gluconate, can be administered."
    },
    {
      id: "p4bq96",
      question: "The nurse is providing discharge education to a mother who has chosen to formula-feed her newborn infant. The patient asks how to manage breast engorgement and pain as her milk comes in. Which instruction should the nurse include?",
      options: ["Express milk or pump daily until the pain goes away", "Wear a tight, supportive brassiere continuously, apply cold ice packs or cabbage leaves to the breasts, and avoid stimulating the nipples with warm water during showers", "Massage the breasts vigorously under hot running water twice a day", "Restrict fluid intake to less than 1 liter per day"],
      answer: 1,
      explanation: "For formula-feeding mothers, the goal is to suppress lactation by avoiding any breast stimulation (pumping or expressing milk), which would only signal the body to produce more. Wearing a supportive bra, applying cold ice packs, and avoiding warm water contact help reduce vascularity and engorgement until milk production naturally stops."
    },
    {
      id: "p4bq97",
      question: "A patient at 34 weeks gestation with severe preeclampsia is admitted to the labor and delivery unit. The nurse notes that the patient's face and hands are significantly edematous, her blood pressure is 168/112 mmHg, and she has 3+ proteinuria. Which additional assessment finding would indicate that she has progressed from preeclampsia to eclampsia?",
      options: ["An acute increase in her serum creatinine level", "The onset of generalized tonic-clonic seizures or an unexplained coma", "A drop in her platelet count below 100,000/mm³", "The development of severe hyperreflexia with ankle clonus"],
      answer: 1,
      explanation: "Eclampsia is defined by the new onset of generalized tonic-clonic seizures or a coma in a patient with preeclampsia, which cannot be attributed to other neurological causes. It is a critical obstetric emergency."
    },
    {
      id: "p4bq98",
      question: "The nurse is reviewing the laboratory results for a newborn infant who is 24 hours old. The infant's total serum bilirubin level is 6.2 mg/dL. The infant appears mildly jaundiced across his face and upper chest, is feeding well, and has normal stools. How should the nurse interpret this finding?",
      options: ["Pathological jaundice requiring an immediate exchange transfusion", "Normal physiological jaundice, which typically appears after the first 24 hours of life due to transitional neonate hepatic immaturity", "Severe hemolytic disease of the newborn requiring intensive phototherapy", "Biliary atresia development"],
      answer: 1,
      explanation: "Physiological jaundice is a common, benign condition that appears *after* the first 24 hours of life. It is caused by the newborn's immature liver being temporarily unable to process the breakdown products of its high red blood cell mass. Jaundice appearing *within* the first 24 hours is always considered pathological and requires immediate evaluation."
    },
    {
      id: "p4bq99",
      question: "A patient at 39 weeks gestation is in active labor. Her cervical exam is 6 cm dilated and 100% effaced, with the fetal head at a 0 station. The external monitor strip shows a fetal heart rate baseline of 145 bpm with moderate variability. During a contraction, the FHR exhibits a sharp, abrupt decrease down to 90 bpm, taking less than 15 seconds to reach its lowest point, and returns rapidly to baseline within 45 seconds. The drops vary in shape and occur randomly throughout the tracing. What is the cause?",
      options: ["Fetal head compression during descent", "Umbilical cord compression", "Uteroplacental insufficiency", "Maternal hypotension from a recent epidural"],
      answer: 1,
      explanation: "Abrupt, sharp decreases in the fetal heart rate that take less than 30 seconds to reach their nadir are variable decelerations. They are caused by umbilical cord compression, which can happen randomly as the fetus or uterus moves during labor."
    },
    {
      id: "p4bq100",
      question: "A patient who is 12 hours postpartum following a prolonged labor with ruptured membranes for 24 hours develops a temperature of 38.4°C, a heart rate of 105 bpm, and severe lower abdominal tenderness. Her lochia is dark red and foul-smelling. What complication does the nurse suspect?",
      options: ["Postpartum mastitis", "Endometritis", "Deep vein thrombosis", "Urinary tract infection"],
      answer: 1,
      explanation: "Endometritis is an infection of the inner uterine lining, commonly caused by bacteria ascending into the uterine cavity during a prolonged labor or after an extended rupture of membranes. Classic signs include a postpartum fever, lower abdominal pain, uterine tenderness, and foul-smelling lochia."
    }
  ]
};

export default phase4B;