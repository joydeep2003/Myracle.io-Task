# Feature Analyzer

## Prompting Strategy

The prompting strategy employed in the `Feature Analyzer` project is designed to maximize the effectiveness and accuracy of feature analysis for mobile app screenshots. Below is a detailed overview of the prompting approach:

### 1. Pre-prompted Expert Model Initialization
   - **Objective**: To ensure the model is primed with the correct expertise and context before analyzing the mobile app screenshots.
   - **Process**: 
     - The model is initialized with a specific pre-prompt that designates it as an "expert UI/UX analyst specializing in mobile app features."
     - The initial conversation with the model includes:
       - A user prompt specifying the task: "Analyze screenshots and provide detailed descriptions focusing on functionality, user interactions, and potential edge cases."
       - A confirmation response from the model indicating readiness to perform the analysis, emphasizing the key areas of interest such as navigation, selection processes, information display, and unique app elements.

### 2. Detailed Analysis Prompt
   - **Objective**: To guide the model in performing a thorough analysis of the mobile app features from provided screenshots.
   - **Process**:
     - Once the model is set up, a comprehensive prompt is crafted that includes instructions to:
       - Analyze features within the screenshots, with specific focus on:
         - **Navigation and Selection processes**
         - **Information Display**
         - **User Input Methods**
         - **Special Features or Unique Elements**
       - Describe each identified feature with three key components:
         1. **Functionality**: What the feature does.
         2. **User Interactions**: How users interact with the feature.
         3. **Edge Cases**: Potential issues or limitations.
     - Additional context specific to the client is provided when available, and the model is instructed to prioritize this context during analysis.

### 3. Structured Response Format
   - **Objective**: To ensure the output is clear, organized, and actionable.
   - **Process**:
     - The model's response is expected to be in a bullet-point format, ensuring that each feature is described in a structured manner under the categories of functionality, user interactions, and edge cases.
