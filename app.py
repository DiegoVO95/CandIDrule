import streamlit as st

# Function to calculate CandID score
def calculate_score(surgery_abdominal, antibiotic_therapy, candiduria, cirrhosis, cvc, solid_cancer):
    # Regression coefficients
    coef_surgery_abdominal = 1.11
    coef_antibiotic_therapy = 0.82
    coef_candiduria = 0.41
    coef_cirrhosis = 1.11
    coef_cvc = 1.50
    coef_solid_cancer = 1.17
    
    # Calculate score only if the variable is selected (True)
    score = (surgery_abdominal * coef_surgery_abdominal +
             antibiotic_therapy * coef_antibiotic_therapy +
             candiduria * coef_candiduria +
             cirrhosis * coef_cirrhosis +
             cvc * coef_cvc +
             solid_cancer * coef_solid_cancer)
    
    return score

# Title and subtitle without logo
st.set_page_config(page_title="CandID Rule", page_icon="🍄", layout="centered")

# Set light blue background
st.markdown(
    """
    <style>
    .reportview-container {
        background-color: #ADD8E6;
        font-family: Arial;
    }

    /* Customizing the color of the selected tab */
    .css-1v3fvcr {
        background-color: #ADD8E6 !important;
        color: white !important;
    }
    .css-1v3fvcr:hover {
        background-color: #ADD8E6 !important;
        color: white !important;
    }
    
    /* Tab selected color fix */
    .stTabs .css-1v3fvcr.stTabActive {
        background-color: #ADD8E6 !important;
        color: white !important;
    }
    
    /* Title and subtitle styles */
    .title {
        font-family: Arial;
        color: white;
        font-size: 36px;
    }
    .subtitle {
        font-family: Arial;
        color: white;
        font-size: 18px;
    }

    /* Authors' names styling */
    .authors {
        font-family: Arial;
        color: white;
        font-size: 12px;
        margin-top: 10px;
    }
    </style>
    """, 
    unsafe_allow_html=True
)

# Title and Subtitle
st.markdown('<h1 class="title">CandID Rule</h1>', unsafe_allow_html=True)
st.markdown('<h2 class="subtitle">Risk prediction rule for candidemia at INCMNSZ</h2>', unsafe_allow_html=True)

# Tabs
tab1, tab2, tab3 = st.tabs(["Calculator", "How to Use", "Terms and Conditions"])

# Tab 1: Calculator
with tab1:
    st.markdown(
        """
        <div style="background-color: #003366; padding: 10px; color: white; font-size: 12px; font-family: Arial;">
        Mark the presence of the following risk factors to determine the risk of candidemia.
        </div>
        """, 
        unsafe_allow_html=True
    )
    
    # Add a space between instructions and factors
    st.markdown("<br>", unsafe_allow_html=True)

    # Input variables with checkboxes, sorted alphabetically
    surgery_abdominal = st.checkbox('Abdominal surgery')
    antibiotic_therapy = st.checkbox('Antibiotic therapy')
    candiduria = st.checkbox('Candiduria')
    cirrhosis = st.checkbox('Cirrhosis')
    cvc = st.checkbox('Central venous catheter (CVC)')
    solid_cancer = st.checkbox('Solid cancer')

    # Button to calculate
    if st.button('Calculate Score'):
        score = calculate_score(surgery_abdominal, antibiotic_therapy, candiduria, cirrhosis, cvc, solid_cancer)
        
        # Display calculated score
        if score >= 1.23:
            st.markdown(f'<h3 style="color: #FF6347; font-family: Arial;">Total score: {score:.2f} - Elevated risk of candidemia. Complement with other microbiological studies.</h3>', unsafe_allow_html=True)
        else:
            st.markdown(f'<h3 style="color: white; font-family: Arial;">Total score: {score:.2f} - Low risk for candidemia.</h3>', unsafe_allow_html=True)
        
        # Sensitivity, specificity, predictive values
        st.markdown(
            """
            <div style="background-color: #003366; padding: 10px; color: white; font-size: 12px; font-family: Arial;">
            Sensitivity: 91%, Specificity: 50%, Positive Predictive Value: 47%, Negative Predictive Value: 92%.
            </div>
            """, 
            unsafe_allow_html=True
        )

# Tab 2: How to Use
with tab2:
    st.header("How to Use the CandID Rule")
    st.write("""
    1. **Abdominal Surgery**: Indicate if the patient has had recent abdominal surgery in less than 1 month.
    2. **Antibiotic Therapy**: Indicate if the patient received antibiotic therapy in the first 3 days of their hospital admission.
    3. **Candiduria**: Indicate if there is the presence of candiduria within the last week before the suspicion of candidemia.
    4. **Cirrhosis**: Indicate if the patient has cirrhosis, regardless of stage or etiology.
    5. **Central Venous Catheter (CVC)**: Indicate if the patient has a central venous catheter in place for more than or equal to 72 hours.
    6. **Solid Cancer**: Indicate if the patient has a diagnosis of solid cancer, regardless of whether they have received chemotherapy or not.
    
    After selecting the appropriate options, click the "Calculate Score" button. The result will be a total score that indicates the risk of candidemia. If the score is equal to or greater than 1.23, the patient is considered to be at elevated risk, and other microbiological studies should be conducted.
    """)

# Tab 3: Terms and Conditions
with tab3:
    st.header("Terms and Conditions")

    st.write("""
    1. The CandID Rule is intended to be used only by healthcare professionals. This tool does not provide medical recommendations.
    2. The calculator is still under prospective validation and was developed at the Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán (INCMNSZ).
    3. The accuracy of this calculator is not guaranteed. It should be used with caution.
    """)

    st.markdown(
        """
        <div style="margin-top: 10px;" class="authors">
        <p>Authors:</p>
        <ul>
            <li>Diego Ulises Vázquez Omaña, MD</li>
            <li>Paula Beltran Reyes, MD</li>
            <li>Jorge Eduardo AlonsoMontoya, MD</li>
            <li>Nayeli Esmeralda Avalos Celis, MD</li>
            <li>Sandra Rajme Lopez, MSc, MD</li>
            <li>Karla M. Tamez Torres, MSc, MD</li>
            <li>Bernardo Martínez Guerra, MSc, MD</li>
            <li>Carla M. Román Montes, MSc, MD</li>
            <li>Alfredo Ponce De León, MSc, MD</li>
            <li>María Fernanda González Lara, MSc, MD</li>
        </ul>
        </div>
        """, 
        unsafe_allow_html=True
    )
