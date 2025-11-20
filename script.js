import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom/client';

const translations = {
    ar: {
        main_title: 'حاسبة المعدل الجامعي',
        semester_gpa_card_title: 'المعدل الفصلي',
        semester_gpa_card_desc: 'حساب معدل السداسي الواحد',
        annual_gpa_card_title: 'المعدل السنوي',
        annual_gpa_card_desc: 'حساب المعدل العام للسنة',
        settings: 'الإعدادات',
        semester_gpa_title: 'حساب المعدل الفصلي',
        annual_gpa_title: 'حساب المعدل السنوي',
        no_modules_yet: 'لم تتم إضافة أي مقياس بعد.',
        add_new_module: 'إضافة مقياس',
        delete_all_modules: 'حذف كل المقاييس',
        show_result: 'إظهار النتيجة',
        s1_title: 'الفصل الأول',
        s2_title: 'الفصل الثاني',
        gpa_placeholder: 'المعدل',
        credits_placeholder: 'الرصيد',
        calculation_method: 'طريقة الحساب',
        set_credits: 'تحديد الرصيد',
        set_credits_desc: 'يرجى تحديد الرصيد السنوي المطلوب للإنتقال إلى السنة الموالية، حسب متطلبات كليتك.',
        theme: 'المظهر',
        light_theme: 'الفاتح',
        dark_theme: 'الداكن',
        theme_auto: 'تلقائي',
        language: 'اللغة',
        lang_ar: 'العربية',
        lang_en: 'English',
        lang_fr: 'Français',
        save_changes: 'حفظ التغييرات تلقائياً',
        contact_us: 'تواصل معنا',
        about_app: 'عن التطبيق',
        privacy_policy: 'سياسة الخصوصية',
        about_p1: 'هذا التطبيق مخصص لمساعدة الطلاب الجزائريين على حساب معدلاتهم الفصليّة والسنويّة بدقة وسهولة، بإستخدام طرق حساب متعددة تناسب مختلف التخصصات.',
        about_p2: 'هل لديك أي أفكار أو اقتراحات حول التطبيق؟ سأكون ممتنًا لأي ردود فعل تساعدني في تطوير التطبيق وتلبية احتياجات المستخدمين بشكل أفضل.',
        feedback_placeholder: 'اكتب اقتراحك هنا...',
        send_feedback: 'إرسال الاقتراح',
        contact_modal_by: 'هذا التطبيق من طرف: ب.مـحـمـد',
        contact_modal_p1: 'تم تصميم هذا المشروع بعناية لتسهيل عملية حساب المعدل الفصلي والسنوي بطريقة دقيقة وسهلة الإستخدام، بهدف خدمة الطلبة وتوفير الوقت والتجربة المريحة والفعالة في تنظيم نتائجهم الدراسية.',
        contact_modal_p2: 'يسعدني دائمًا أن أكون على تواصل معكم، وأشكر كل من يختار متابعتي، فوجودكم ومتابعتكم لي هو الدافع الأكبر للإستمرار وتقديم الأفضل دائمًا.',
        contact_modal_p3: 'يمكنكم مراسلتي من خلال الروابط أدناه، وسأكون سعيدًا بقراءة رسائلكم والتفاعل معكم بكل حب واحترام.',
        contact_telegram: 'Telegram',
        add_module_title: 'إضافة مقياس جديد',
        edit_module_title: 'تعديل المقياس',
        module_name_label: 'اسم المقياس',
        module_name_placeholder: 'مثال: تحليل 1',
        coeff_label: 'المعامل',
        credits_label: 'الرصيد',
        example_placeholder_2: 'مثال: 2',
        calc_module_gpa: 'حساب معدل المقياس',
        save: 'حفظ',
        cancel: 'إلغاء',
        final_result: 'النتيجة النهائية',
        semester_result_title: 'نتيجة الفصل',
        annual_result_title: 'المعدل السنوي',
        result_label: 'النتيجة',
        credits_label_result: 'الرصيد',
        remark_label: 'الملاحظة',
        view_statement_title: 'عرض كشف النقاط',
        save_statement_title: 'حفظ كشف النقاط كصورة',
        share: 'مشاركة',
        statement_title: 'كشف النقاط',
        module_th: 'المقياس',
        credits_th: 'الرصيد',
        coeff_th: 'المعامل',
        grade_th: 'المعدل',
        semester_gpa_summary: 'المعدل الفصلي',
        earned_credits_summary: 'الرصيد المحصل',
        remark_summary: 'الملاحظة',
        alert_title: 'تنبيه',
        error_title: 'خطأ',
        confirm: 'تأكيد',
        edit: 'تعديل',
        delete: 'حذف',
        confirm_delete_all_modules: 'هل أنت متأكد من أنك تريد حذف جميع المقاييس المسجلة؟',
        confirm_change_calc_method: 'تغيير طريقة الحساب سيؤدي إلى حذف جميع المقاييس المضافة. هل تريد المتابعة؟',
        confirm_change_credits_req: 'تغيير رصيد الانتقال سيؤدي إلى مسح بيانات المعدل السنوي المدخلة. هل تريد المتابعة؟',
        error_no_modules: 'الرجاء إضافة مقياس واحد على الأقل.',
        error_invalid_annual_values: 'الرجاء إدخال قيم صحيحة لجميع الحقول المطلوبة (المعدلات بين 0 و 20، الأرصدة بين 0 و 30).',
        error_max_modules: 'لا يمكن إضافة أكثر من 15 مقياسًا.',
        error_module_name_required: 'اسم المقياس مطلوب.',
        error_coeff_invalid: 'الرجاء إدخال معامل صحيح بين 1 و 10.',
        error_credits_invalid: 'الرجاء إدخال رصيد صحيح بين 1 و 10.',
        error_grade_invalid: 'يجب تفعيل وإدخال نقطة واحدة صالحة على الأقل (بين 0 و 20).',
        error_weights_sum: 'يجب أن يكون مجموع النسب المئوية 100.',
        error_feedback_empty: 'الرجاء كتابة اقتراحك أولاً.',
        error_saving_statement: "حدث خطأ أثناء حفظ الكشف، الرجاء المحاولة مرة أخرى.",
        error_sharing_statement: "حدث خطأ أثناء مشاركة الكشف، الرجاء المحاولة مرة أخرى.",
        error_share_unsupported: "المشاركة غير مدعومة على متصفحك.",
        feedback_sent_success_title: 'تم الإرسال بنجاح',
        feedback_success_message: 'شكرًا لك على اقتراحك! نُقدّر مساهمتك وسنأخذها بعين الاعتبار لتحسين تجربتك.',
        feedback_sent_error: 'حدث خطأ أثناء إرسال الاقتراح. حاول عبر البريد الإلكتروني.',
        feedback_sent_loading: 'جار الإرسال...',
        remark_excellent: 'ممتاز',
        remark_very_good: 'جيد جدًا',
        remark_good: 'جيد',
        remark_fairly_good: 'قريب من الجيد',
        remark_pass: 'مقبول',
        remark_resit: 'استدراك',
        remark_poor: 'ضعيف',
        status_pass: 'ناجح',
        status_debt: 'ناجح مع الديون',
        status_fail: 'إعادة السنة',
        grade_td_label: 'TD',
        grade_tp_label: 'TP',
        grade_exam_label: 'Exam',
        grade_input_placeholder: '0-20',
        total_summary: 'الإجمالي',
        total_coeffs_summary: 'مجموع المعاملات',
        statement_date: 'تاريخ الكشف',
        statement_university_year: 'السنة الجامعية',
        statement_faculty: 'الكلية/المعهد',
        statement_department: 'القسم',
        statement_specialty: 'التخصص',
        statement_level: 'المستوى',
        statement_semester: 'السداسي',
        statement_student_name: 'اسم الطالب',
        statement_id_number: 'رقم التسجيل',
        ph_university_year: '2023/2024',
        ph_faculty: 'كلية العلوم والتكنولوجيا',
        ph_department: 'قسم الإعلام الآلي',
        ph_specialty: 'إعلام آلي',
        ph_level: 'السنة الثانية ليسانس',
        ph_semester: 'السداسي الثالث',
        ph_student_name: 'اسم ولقب الطالب',
        ph_id_number: '2121XXXXXX',
        no_data_for_statement: 'لا توجد بيانات كافية لإنشاء كشف النقاط.',
        set_grade_weights: 'تحديد نسب النقاط',
        weights_desc: 'أدخل النسب المئوية لكل جزء. يجب أن يكون المجموع 100.',
        ok: 'حسنًا',
        add_new_weighting: '+ إضافة نسب جديدة',
        add_weighting_title: 'إضافة نسب حساب جديدة',
        weighting_add_desc: 'أدخل النسب المئوية. يجب أن يكون المجموع 100.',
        add: 'إضافة',
        error_custom_weights_sum: 'مجموع النسب يجب أن يكون 100.',
        error_custom_weights_invalid: 'الرجاء إدخال قيم صالحة للنسب المفعلة.',
        confirm_delete_custom_method_title: 'حذف الخيار',
        confirm_delete_custom_method: 'هل أنت متأكد من حذف هذا الخيار؟',
        max_custom_methods_reached: 'تم الوصول للحد الأقصى (4) من الخيارات المخصصة.',
        custom_tag: 'مخصص',
        error_custom_weights_no_selection: 'الرجاء تفعيل وتحديد نسبة مئوية لـ TD أو TP على الأقل.',
        error_custom_weights_sum_over_100: 'لا يمكن أن يتجاوز مجموع نسب TD و TP نسبة 100%.',
        td_percentage_label: 'نسبة TD',
        tp_percentage_label: 'نسبة TP',
        exam_percentage_label: 'نسبة الإمتحان',
        privacy_policy_title: 'سياسة الخصوصية لتطبيق "Mo3adli"',
        privacy_policy_intro: 'نحن فريق تطبيق "Mo3adli"، نولي أهمية قصوى لخصوصية مستخدمينا. تهدف سياسة الخصوصية هذه إلى توضيح نوع المعلومات التي لا نجمعها، وكيفية التعامل مع البيانات التي تدخلها.',
        privacy_policy_h1: '1. جمع المعلومات',
        privacy_policy_p1: 'نؤكد بشكل قاطع أن تطبيقنا لا يجمع أو يخزن أو يشارك أي معلومات تعريف شخصية عنك. جميع البيانات التي تقوم بإدخالها، مثل أسماء المقاييس الدراسية، النقاط، والمعدل، يتم حفظها بشكل آمن ومحلي على جهازك فقط. هذه المعلومات لا تصل إلى خوادمنا ولا يمكن لأي شخص آخر الإطلاع عليها.',
        privacy_policy_h2: '2. استخدام المعلومات',
        privacy_policy_p2: 'البيانات التي تدخلها تُستخدم لغرض واحد فقط: تمكينك من حساب معدلك الدراسي وعرض النتائج لك داخل التطبيق. نحن لا نستخدم هذه البيانات لأي أغراض تحليلية أو تجسسية أو غيرها.',
        privacy_policy_h3: '3. حذف المعلومات',
        privacy_policy_p3: 'بما أن جميع المعلومات مخزنة على جهازك، يمكنك حذفها بالكامل وفي أي وقت عن طريق إلغاء تثبيت التطبيق من جهازك، أو عن طريق مسح بيانات التطبيق من خلال قائمة "الإعدادات".',
        privacy_policy_h4: '4. التغييرات على سياسة الخصوصية',
        privacy_policy_p4: 'قد نقوم بتحديث سياسة الخصوصية هذه في المستقبل لتعكس أي تغييرات في ممارساتنا أو لتتوافق مع المتطلبات القانونية الجديدة. سيتم نشر أي تحديثات داخل هذه الصفحة.',
        privacy_policy_h5: '5. التواصل معنا',
        privacy_policy_p5: 'إذا كانت لديك أي استفسارات بخصوص سياسة الخصوصية هذه، فلا تتردد في التواصل معنا عبر البريد الإلكتروني:',
        privacy_policy_email: 'mo3adli.services@gmail.com',
        save_changes_subtitle: "يمكنك حذف جميع بياناتك المسجلة من هنا",
        data_management_title: "إدارة البيانات",
        data_management_desc: "يمكنك الرجوع لاحقًا لتعديل بياناتك في أي وقت يناسبك، سواء قمت بإدخال معلومات جديدة أو تحديث المعلومات الحالية. كما نتيح لك حرية التحكم الكامل في بياناتك، بما في ذلك إمكانية حذف جميع البيانات المُسجَّلة في التطبيق متى أردت ذلك.",
        clear_all_data: "مسح البيانات",
        no_data_to_clear: "لا توجد بيانات مسجلة لمسحها",
        confirm_clear_all_data_title: "تأكيد مسح البيانات",
        confirm_clear_all_data: "هل أنت متأكد من أنك تريد حذف جميع بياناتك؟ لا يمكن التراجع عن هذا الإجراء.",
        edit_weights_in_settings_prompt: "يمكنك تعديل النسب المئوية المُعتمدة في عملية الحساب من خلال قسم الإعدادات.",
        set_credits_prompt: "يمكنك تحديد الحد الأدنى للرصيد السنوي اللازم للإنتقال إلى السنة الموالية، بما يتوافق مع شروط كليتك.",
        confirm_clear_annual_fields_title: "تأكيد مسح الحقول",
        confirm_clear_annual_fields: "هل أنت متأكد من أنك تريد حذف جميع البيانات المدخلة في الحقول؟",
        annual_info_modal_title: "تنويه مهم بخصوص حساب المعدل السنوي",
        annual_info_modal_p1: "يُعنى هذا القسم بحساب معدل السنة الحالية فقط، إذ أن عدد الأرصدة يختلف من سنة لأخرى. على سبيل المثال، إذا كنت في السنة الثانية، فعليك جمع أرصدة السنة الأولى والثانية معًا لمعرفة مجموع أرصدة السداسيات الأربع.",
        annual_info_modal_h1: "مثال عن شروط الانتقال بين السنوات:",
        annual_info_modal_li1_title: "من السنة الأولى إلى الثانية:",
        annual_info_modal_li1_p1: "يُسمح بالانتقال إذا تحصّل الطالب على:",
        annual_info_modal_li1_item1: "• 60 رصيدًا في السداسيين 1 و2 (بالتعويض أو بدونه)، أو",
        annual_info_modal_li1_item2: "• 30 رصيدًا فما فوق، بشرط أن يكون 1/3 منها في سداسي و2/3 في السداسي الآخر.",
        annual_info_modal_li2_title: "من السنة الثانية إلى الثالثة:",
        annual_info_modal_li2_p1: "يُسمح بالانتقال إذا تحصّل على:",
        annual_info_modal_li2_item1: "• 120 رصيدًا في السداسيات الأربع (بالتعويض أو بدونه)، أو",
        annual_info_modal_li2_item2: "• 90 رصيدًا فما فوق، مع النجاح في جميع الوحدات الأساسية للسداسيات الأربع.",
        annual_info_modal_li3_title: "النجاح في السنة الثالثة:",
        annual_info_modal_li3_p1: "يُعتبر الطالب ناجحًا إذا تحصّل على 180 رصيدًا خلال السنوات الثلاث.",
        ad_placeholder_title: 'إعلان'
    },
    en: {
        main_title: 'GPA Calculator',
        semester_gpa_card_title: 'Semester GPA',
        semester_gpa_card_desc: 'Calculate your semester GPA',
        annual_gpa_card_title: 'Annual GPA',
        annual_gpa_card_desc: 'Calculate your annual GPA',
        settings: 'Settings',
        semester_gpa_title: 'Semester GPA Calculation',
        annual_gpa_title: 'Annual GPA Calculation',
        no_modules_yet: 'No modules added yet.',
        add_new_module: 'Add Module',
        delete_all_modules: 'Delete All Modules',
        show_result: 'Show Result',
        s1_title: 'Semester 1',
        s2_title: 'Semester 2',
        gpa_placeholder: 'GPA',
        credits_placeholder: 'Credits',
        calculation_method: 'Calculation Method',
        set_credits: 'Set Required Credits (for Debt)',
        set_credits_desc: 'Please select the annual credits required to pass with debt, according to your faculty.',
        theme: 'Theme',
        light_theme: 'Light',
        dark_theme: 'Dark',
        theme_auto: 'Automatic',
        language: 'Language',
        lang_ar: 'العربية',
        lang_en: 'English',
        lang_fr: 'Français',
        save_changes: 'Auto-save Changes',
        contact_us: 'Contact Us',
        about_app: 'About App',
        privacy_policy: 'Privacy Policy',
        about_p1: 'This application is designed to help Algerian students calculate their semester and annual GPAs accurately and easily, using multiple calculation methods to suit different specializations.',
        about_p2: 'Do you have any ideas or suggestions about the app? I would be grateful for any feedback to help me improve the application and better meet user needs.',
        feedback_placeholder: 'Write your suggestion here...',
        send_feedback: 'Send Suggestion',
        contact_modal_by: 'This app is by: B. Mohamed',
        contact_modal_p1: 'This project was carefully designed to facilitate the calculation of semester and annual GPAs in an accurate and user-friendly way, aiming to serve students and provide a time-saving, comfortable, and effective experience in organizing their academic results.',
        contact_modal_p2: 'I am always happy to be in touch with you, and I thank everyone who chooses to follow me. Your presence and support are the biggest motivation to continue and always provide the best.',
        contact_modal_p3: 'You can contact me through the links below, and I will be happy to read your messages and interact with you with all love and respect.',
        contact_telegram: 'Telegram',
        add_module_title: 'Add New Module',
        edit_module_title: 'Edit Module',
        module_name_label: 'Module Name',
        module_name_placeholder: 'e.g., Analysis 1',
        coeff_label: 'Coefficient',
        credits_label: 'Credits',
        example_placeholder_2: 'e.g., 2',
        calc_module_gpa: 'Calculate Module Grade',
        save: 'Save',
        cancel: 'Cancel',
        final_result: 'Final Result',
        semester_result_title: 'Semester Result',
        annual_result_title: 'Annual GPA',
        result_label: 'Result',
        credits_label_result: 'Credits',
        remark_label: 'Remark',
        view_statement_title: 'View Statement of Marks',
        save_statement_title: 'Save Statement as Image',
        share: 'Share',
        statement_title: 'Statement of Marks',
        module_th: 'Module',
        credits_th: 'Credits',
        coeff_th: 'Coeff.',
        grade_th: 'Grade',
        semester_gpa_summary: 'Semester GPA',
        earned_credits_summary: 'Earned Credits',
        remark_summary: 'Remark',
        alert_title: 'Warning',
        error_title: 'Error',
        confirm: 'Confirm',
        edit: 'Edit',
        delete: 'Delete',
        confirm_delete_all_modules: 'Are you sure you want to delete all registered modules?',
        confirm_change_calc_method: 'Changing the calculation method will delete all added modules. Do you want to continue?',
        confirm_change_credits_req: 'Changing the required credits for debt will clear the entered annual GPA data. Do you want to continue?',
        error_no_modules: 'Please add at least one module.',
        error_invalid_annual_values: 'Please enter valid values for all required fields (GPAs between 0 and 20, Credits between 0 and 30).',
        error_max_modules: 'Cannot add more than 15 modules.',
        error_module_name_required: 'Module name is required.',
        error_coeff_invalid: 'Please enter a valid coefficient between 1 and 10.',
        error_credits_invalid: 'Please enter valid credits between 1 and 10.',
        error_grade_invalid: 'At least one valid grade (between 0 and 20) must be enabled and entered.',
        error_weights_sum: 'The sum of percentages must be 100.',
        error_feedback_empty: 'Please write your suggestion first.',
        error_saving_statement: "Error saving statement, please try again.",
        error_sharing_statement: "Error sharing statement, please try again.",
        error_share_unsupported: "Sharing is not supported on your browser.",
        feedback_sent_success_title: 'Sent Successfully',
        feedback_success_message: 'Thank you for your suggestion! We appreciate your contribution and will take it into account to improve your experience.',
        feedback_sent_error: 'Error sending suggestion. Please try contacting via email.',
        feedback_sent_loading: 'Sending...',
        remark_excellent: 'Excellent',
        remark_very_good: 'Very Good',
        remark_good: 'Good',
        remark_fairly_good: 'Fairly Good',
        remark_pass: 'Pass',
        remark_resit: 'Resit',
        remark_poor: 'Poor',
        status_pass: 'Passed',
        status_debt: 'Promoted with Debt',
        status_fail: 'Repeat Year',
        grade_td_label: 'TD',
        grade_tp_label: 'TP',
        grade_exam_label: 'Exam',
        grade_input_placeholder: '0-20',
        total_summary: 'Total',
        total_coeffs_summary: 'Total Coefficients',
        statement_date: 'Statement Date',
        statement_university_year: 'University Year',
        statement_faculty: 'Faculty/Institute',
        statement_department: 'Department',
        statement_specialty: 'Specialty',
        statement_level: 'Level',
        statement_semester: 'Semester',
        statement_student_name: 'Student Name',
        statement_id_number: 'Registration ID',
        ph_university_year: '2023/2024',
        ph_faculty: 'Faculty of Science and Technology',
        ph_department: 'Computer Science Department',
        ph_specialty: 'Computer Science',
        ph_level: '2nd Year Bachelor',
        ph_semester: 'Semester 3',
        ph_student_name: 'Student Full Name',
        ph_id_number: '2121XXXXXX',
        no_data_for_statement: 'Not enough data to generate statement.',
        set_grade_weights: 'Set Grade Weights',
        weights_desc: 'Enter the percentage for each component. The total must be 100.',
        ok: 'OK',
        add_new_weighting: '+ Add New Weighting',
        add_weighting_title: 'Add New Calculation Weighting',
        weighting_add_desc: 'Enter percentages. The sum must be 100.',
        add: 'Add',
        error_custom_weights_sum: 'Sum of percentages must be 100.',
        error_custom_weights_invalid: 'Please enter valid values for enabled percentages.',
        confirm_delete_custom_method_title: 'Delete Option',
        confirm_delete_custom_method: 'Are you sure you want to delete this option?',
        max_custom_methods_reached: 'Maximum (4) custom options reached.',
        custom_tag: 'Custom',
        error_custom_weights_no_selection: 'Please enable and set a percentage for at least TD or TP.',
        error_custom_weights_sum_over_100: 'The sum of TD and TP percentages cannot exceed 100%.',
        td_percentage_label: 'TD Percentage',
        tp_percentage_label: 'TP Percentage',
        exam_percentage_label: 'Exam Percentage',
        privacy_policy_title: 'Privacy Policy for "Mo3adli"',
        privacy_policy_intro: 'We, the "Mo3adli" app team, place the utmost importance on the privacy of our users. This privacy policy aims to clarify the type of information we do not collect and how we handle the data you enter.',
        privacy_policy_h1: '1. Information Collection',
        privacy_policy_p1: 'We unequivocally state that our application does not collect, store, or share any personally identifiable information about you. All data you enter, such as course names, grades, and GPA, is saved securely and locally on your device only. This information does not reach our servers and cannot be viewed by anyone else.',
        privacy_policy_h2: '2. Use of Information',
        privacy_policy_p2: 'The data you enter is used for one purpose only: to enable you to calculate your academic GPA and view the results within the application. We do not use this data for any analytical, tracking, or other purposes.',
        privacy_policy_h3: '3. Deleting Information',
        privacy_policy_p3: 'Since all information is stored on your device, you can delete it completely at any time by uninstalling the application from your device, or by clearing the application\'s data through the "Settings" menu.',
        privacy_policy_h4: '4. Changes to the Privacy Policy',
        privacy_policy_p4: 'We may update this privacy policy in the future to reflect any changes in our practices or to comply with new legal requirements. Any updates will be posted on this page.',
        privacy_policy_h5: '5. Contact Us',
        privacy_policy_p5: 'If you have any questions regarding this privacy policy, please do not hesitate to contact us via email at:',
        privacy_policy_email: 'mo3adli.services@gmail.com',
        save_changes_subtitle: "You can delete all your registered data from here.",
        data_management_title: "Data Management",
        data_management_desc: "You can return later to modify your data at any time, whether you're entering new information or updating existing information. We also give you full control over your data, including the ability to delete all registered application data whenever you want.",
        clear_all_data: "Clear Data",
        no_data_to_clear: "There is no saved data to clear.",
        confirm_clear_all_data_title: "Confirm Clear Data",
        confirm_clear_all_data: "Are you sure you want to delete all your data? This action cannot be undone.",
        edit_weights_in_settings_prompt: "You can adjust the calculation percentages in the Settings.",
        set_credits_prompt: "You can set the minimum annual credits required for promotion, according to your faculty's rules.",
        confirm_clear_annual_fields_title: "Confirm Clear Fields",
        confirm_clear_annual_fields: "Are you sure you want to delete all data entered in the fields?",
        annual_info_modal_title: "Important Notice on Annual GPA Calculation",
        annual_info_modal_p1: "This section is for calculating the current year's GPA only, as the number of credits differs from one year to another. For example, if you are in your second year, you must add the credits from the first and second years together to know the total credits for the four semesters.",
        annual_info_modal_h1: "Example of Promotion Conditions Between Years:",
        annual_info_modal_li1_title: "From First to Second Year:",
        annual_info_modal_li1_p1: "Promotion is allowed if the student obtains:",
        annual_info_modal_li1_item1: "• 60 credits in semesters 1 and 2 (with or without compensation), or",
        annual_info_modal_li1_item2: "• 30 or more credits, provided that 1/3 are in one semester and 2/3 in the other.",
        annual_info_modal_li2_title: "From Second to Third Year:",
        annual_info_modal_li2_p1: "Promotion is allowed if the student obtains:",
        annual_info_modal_li2_item1: "• 120 credits in the four semesters (with or without compensation), or",
        annual_info_modal_li2_item2: "• 90 or more credits, with success in all fundamental units of the four semesters.",
        annual_info_modal_li3_title: "Success in the Third Year:",
        annual_info_modal_li3_p1: "A student is considered successful if they obtain 180 credits over the three years.",
        ad_placeholder_title: 'Advertisement'
    },
    fr: {
        main_title: 'Calculatrice de Moyenne',
        semester_gpa_card_title: 'Moyenne Semestrielle',
        semester_gpa_card_desc: 'Calculer la moyenne du semestre',
        annual_gpa_card_title: 'Moyenne Annuelle',
        annual_gpa_card_desc: 'Calculer la moyenne générale de l\'année',
        settings: 'Paramètres',
        semester_gpa_title: 'Calcul de la Moyenne Semestrielle',
        annual_gpa_title: 'Calcul de la Moyenne Annuelle',
        no_modules_yet: 'Aucun module ajouté pour le moment.',
        add_new_module: 'Ajouter un Module',
        delete_all_modules: 'Supprimer tous les modules',
        show_result: 'Afficher le Résultat',
        s1_title: 'Semestre 1',
        s2_title: 'Semestre 2',
        gpa_placeholder: 'Moyenne',
        credits_placeholder: 'Crédits',
        calculation_method: 'Méthode de Calcul',
        set_credits: 'Définir les Crédits Requis (pour Dette)',
        set_credits_desc: 'Veuillez sélectionner le nombre de crédits annuels requis pour passer avec dettes, selon votre faculté.',
        theme: 'Thème',
        light_theme: 'Clair',
        dark_theme: 'Sombre',
        theme_auto: 'Automatique',
        language: 'Langue',
        lang_ar: 'العربية',
        lang_en: 'English',
        lang_fr: 'Français',
        save_changes: 'Sauvegarde auto. des modifs',
        contact_us: 'Nous Contacter',
        about_app: 'À Propos',
        privacy_policy: 'Politique de Confidentialité',
        about_p1: 'Cette application est conçue pour aider les étudiants algériens à calculer leurs moyennes semestrielles et annuelles avec précision et facilité, en utilisant plusieurs méthodes de calcul adaptées aux différentes spécialités.',
        about_p2: 'Avez-vous des idées ou des suggestions concernant l\'application ? Je serais reconnaissant de tout retour qui m\'aiderait à améliorer l\'application et à mieux répondre aux besoins des utilisateurs.',
        feedback_placeholder: 'Écrivez votre suggestion ici...',
        send_feedback: 'Envoyer la Suggestion',
        contact_modal_by: 'Cette application est de : B. Mohamed',
        contact_modal_p1: 'Ce projet a été soigneusement conçu pour faciliter le calcul des moyennes semestrielles et annuelles de manière précise et conviviale, dans le but de servir les étudiants et d\'offrir une expérience efficace, confortable et qui fait gagner du temps dans l\'organisation de leurs résultats académiques.',
        contact_modal_p2: 'Je suis toujours heureux d\'être en contact avec vous, et je remercie tous ceux qui choisissent de me suivre. Votre présence et votre soutien sont ma plus grande motivation pour continuer à fournir le meilleur.',
        contact_modal_p3: 'Vous pouvez me contacter via les liens ci-dessous, et je serai ravi de lire vos messages et d\'échanger avec vous avec amour et respect.',
        contact_telegram: 'Telegram',
        add_module_title: 'Ajouter un nouveau module',
        edit_module_title: 'Modifier le module',
        module_name_label: 'Nom du Module',
        module_name_placeholder: 'Ex: Analyse 1',
        coeff_label: 'Coefficient',
        credits_label: 'Crédits',
        example_placeholder_2: 'Ex: 2',
        calc_module_gpa: 'Calculer la note du module',
        save: 'Enregistrer',
        cancel: 'Annuler',
        final_result: 'Résultat Final',
        semester_result_title: 'Résultat du Semestre',
        annual_result_title: 'Moyenne Annuelle',
        result_label: 'Résultat',
        credits_label_result: 'Crédits',
        remark_label: 'Mention',
        view_statement_title: 'Voir le Relevé de Notes',
        save_statement_title: 'Enregistrer comme Image',
        share: 'Partager',
        statement_title: 'Relevé de Notes',
        module_th: 'Module',
        credits_th: 'Crédits',
        coeff_th: 'Coeff.',
        grade_th: 'Moyenne',
        semester_gpa_summary: 'Moyenne Semestrielle',
        earned_credits_summary: 'Crédits Obtenus',
        remark_summary: 'Mention',
        alert_title: 'Avertissement',
        error_title: 'Erreur',
        confirm: 'Confirmer',
        edit: 'Modifier',
        delete: 'Supprimer',
        confirm_delete_all_modules: 'Êtes-vous sûr de vouloir supprimer tous les modules enregistrés ?',
        confirm_change_calc_method: 'Changer la méthode de calcul supprimera tous les modules ajoutés. Voulez-vous continuer ?',
        confirm_change_credits_req: 'Changer les crédits requis pour dette effacera les données de la moyenne annuelle. Voulez-vous continuer ?',
        error_no_modules: 'Veuillez ajouter au moins un module.',
        error_invalid_annual_values: 'Veuillez saisir des valeurs valides pour tous les champs requis (Moyennes entre 0 et 20, Crédits entre 0 et 30).',
        error_max_modules: 'Impossible d\'ajouter plus de 15 modules.',
        error_module_name_required: 'Le nom du module est requis.',
        error_coeff_invalid: 'Veuillez saisir un coefficient valide entre 1 et 10.',
        error_credits_invalid: 'Veuillez saisir un nombre de crédits valide entre 1 et 10.',
        error_grade_invalid: 'Au moins une note valide (entre 0 et 20) doit être activée et saisie.',
        error_weights_sum: 'La somme des pourcentages doit être 100.',
        error_feedback_empty: 'Veuillez d\'abord écrire votre suggestion.',
        error_saving_statement: "Erreur lors de l'enregistrement du relevé, veuillez réessayer.",
        error_sharing_statement: "Erreur lors du partage du relevé, veuillez réessayer.",
        error_share_unsupported: "Le partage n'est pas pris en charge sur votre navigateur.",
        feedback_sent_success_title: 'Envoyé avec succès',
        feedback_success_message: 'Merci pour votre suggestion ! Nous apprécions votre contribution et la prendrons en considération pour améliorer votre expérience.',
        feedback_sent_error: 'Erreur lors de l\'envoi de la suggestion. Veuillez essayer par e-mail.',
        feedback_sent_loading: 'Envoi en cours...',
        remark_excellent: 'Excellent',
        remark_very_good: 'Très Bien',
        remark_good: 'Bien',
        remark_fairly_good: 'Assez Bien',
        remark_pass: 'Passable',
        remark_resit: 'Rattrapage',
        remark_poor: 'Faible',
        status_pass: 'Admis',
        status_debt: 'Admis avec Dettes',
        status_fail: 'Ajourné',
        grade_td_label: 'TD',
        grade_tp_label: 'TP',
        grade_exam_label: 'Examen',
        grade_input_placeholder: '0-20',
        total_summary: 'Total',
        total_coeffs_summary: 'Total Coefficients',
        statement_date: 'Date du Relevé',
        statement_university_year: 'Année Universitaire',
        statement_faculty: 'Faculté/Institut',
        statement_department: 'Département',
        statement_specialty: 'Spécialité',
        statement_level: 'Niveau',
        statement_semester: 'Semestre',
        statement_student_name: 'Nom de l\'Étudiant',
        statement_id_number: 'N° d\'Inscription',
        ph_university_year: '2023/2024',
        ph_faculty: 'Faculté des Sciences et Technologies',
        ph_department: 'Département d\'Informatique',
        ph_specialty: 'Informatique',
        ph_level: 'L2',
        ph_semester: 'Semestre 3',
        ph_student_name: 'Nom et Prénom Étudiant',
        ph_id_number: '2121XXXXXX',
        no_data_for_statement: 'Données insuffisantes pour générer le relevé.',
        set_grade_weights: 'Définir les Poids des Notes',
        weights_desc: 'Entrez le pourcentage pour chaque composant. Le total doit être 100.',
        ok: 'OK',
        add_new_weighting: '+ Ajouter une nouvelle pondération',
        add_weighting_title: 'Ajouter une nouvelle pondération de calcul',
        weighting_add_desc: 'Entrez les pourcentages. La somme doit être 100.',
        add: 'Ajouter',
        error_custom_weights_sum: 'La somme des pourcentages doit être 100.',
        error_custom_weights_invalid: 'Veuillez saisir des valeurs valides pour les pourcentages activés.',
        confirm_delete_custom_method_title: 'Supprimer l\'option',
        confirm_delete_custom_method: 'Êtes-vous sûr de vouloir supprimer cette option ?',
        max_custom_methods_reached: 'Maximum (4) d\'options personnalisées atteint.',
        custom_tag: 'Perso',
        error_custom_weights_no_selection: 'Veuillez activer et définir un pourcentage pour au moins TD ou TP.',
        error_custom_weights_sum_over_100: 'La somme des pourcentages de TD et TP ne peut pas dépasser 100%.',
        td_percentage_label: 'Pourcentage TD',
        tp_percentage_label: 'Pourcentage TP',
        exam_percentage_label: 'Pourcentage Examen',
        privacy_policy_title: 'Politique de Confidentialité pour "Mo3adli"',
        privacy_policy_intro: 'Nous, l\'équipe de l\'application "Mo3adli", accordons la plus grande importance à la confidentialité de nos utilisateurs. Cette politique de confidentialité vise à clarifier le type d\'informations que nous ne collectons pas et la manière dont nous traitons les données que vous saisissez.',
        privacy_policy_h1: '1. Collecte d\'Informations',
        privacy_policy_p1: 'Nous déclarons sans équivoque que notre application ne collecte, ne stocke ni ne partage aucune information personnellement identifiable vous concernant. Toutes les données que vous saisissez, telles que les noms des matières, les notes et la moyenne générale, sont sauvegardées de manière sécurisée et locale sur votre appareil uniquement. Ces informations n\'atteignent pas nos serveurs et ne peuvent être consultées par personne d\'autre.',
        privacy_policy_h2: '2. Utilisation des Informations',
        privacy_policy_p2: 'Les données que vous saisissez sont utilisées dans un seul but : vous permettre de calculer votre moyenne générale et d\'afficher les résultats dans l\'application. Nous n\'utilisons pas ces données à des fins d\'analyse, de suivi ou autres.',
        privacy_policy_h3: '3. Suppression des Informations',
        privacy_policy_p3: 'Comme toutes les informations sont stockées sur votre appareil, vous pouvez les supprimer complètement à tout moment en désinstallant l\'application de votre appareil, ou en effaçant les données de l\'application via le menu "Paramètres".',
        privacy_policy_h4: '4. Modifications de la Politique de Confidentialité',
        privacy_policy_p4: 'Nous pouvons mettre à jour cette politique de confidentialité à l\'avenir pour refléter toute modification de nos pratiques ou pour nous conformer à de nouvelles exigences légales. Toute mise à jour sera publiée sur cette page.',
        privacy_policy_h5: '5. Nous Contacter',
        privacy_policy_p5: 'Si vous avez des questions concernant cette politique de confidentialité, n\'hésitez pas à nous contacter par e-mail à l\'adresse :',
        privacy_policy_email: 'mo3adli.services@gmail.com',
        save_changes_subtitle: "Vous pouvez supprimer toutes vos données enregistrées d'ici.",
        data_management_title: "Gestion des données",
        data_management_desc: "Vous pouvez revenir plus tard pour modifier vos données à tout moment, que vous saisissiez de nouvelles informations ou mettiez à jour des informations existantes. Nous vous donnons également un contrôle total sur vos données, y compris la possibilité de supprimer toutes les données enregistrées dans l'application quand vous le souhaitez.",
        clear_all_data: "Effacer les données",
        no_data_to_clear: "Il n'y a aucune donnée enregistrée à effacer.",
        confirm_clear_all_data_title: "Confirmer la suppression des données",
        confirm_clear_all_data: "Êtes-vous sûr de vouloir supprimer toutes vos données ? Cette action est irréversible.",
        edit_weights_in_settings_prompt: "Vous pouvez ajuster les pourcentages de calcul dans les Paramètres.",
        set_credits_prompt: "Vous pouvez définir le nombre de crédits annuels minimum requis pour la promotion, conformément aux règles de votre faculté.",
        confirm_clear_annual_fields_title: "Confirmer l'effacement des champs",
        confirm_clear_annual_fields: "Êtes-vous sûr de vouloir effacer toutes les données saisies dans les champs ?",
        annual_info_modal_title: "Avis Important sur le Calcul de la Moyenne Annuelle",
        annual_info_modal_p1: "Cette section sert uniquement à calculer la moyenne de l'année en cours, car le nombre de crédits varie d'une année à l'autre. Par exemple, si vous êtes en deuxième année, vous devez additionner les crédits des années 1 et 2 pour connaître le total des crédits des quatre semestres.",
        annual_info_modal_h1: "Exemple de Conditions de Passage entre les Années :",
        annual_info_modal_li1_title: "De la Première à la Deuxième Année :",
        annual_info_modal_li1_p1: "Le passage est autorisé si l'étudiant obtient :",
        annual_info_modal_li1_item1: "• 60 crédits dans les semestres 1 et 2 (avec ou sans compensation), ou",
        annual_info_modal_li1_item2: "• 30 crédits ou plus, à condition d'en avoir 1/3 dans un semestre et 2/3 dans l'autre.",
        annual_info_modal_li2_title: "De la Deuxième à la Troisième Année :",
        annual_info_modal_li2_p1: "Le passage est autorisé si l'étudiant obtient :",
        annual_info_modal_li2_item1: "• 120 crédits sur les quatre semestres (avec ou sans compensation), ou",
        annual_info_modal_li2_item2: "• 90 crédits ou plus, avec la réussite de toutes les unités fondamentales des quatre semestres.",
        annual_info_modal_li3_title: "Réussite en Troisième Année :",
        annual_info_modal_li3_p1: "Un étudiant est considéré comme ayant réussi s'il obtient 180 crédits au cours des trois années.",
        ad_placeholder_title: 'Publicité'
    }
};

const Language = {
  AR: 'ar',
  EN: 'en',
  FR: 'fr',
};

const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTOMATIC: 'automatic',
};

const LS_STATE_KEY = 'gpa_calc_state_react_v2'; // v2 for new state structure
const LS_SAVE_PREF_KEY = 'gpa_calc_save_pref_react';
const MAX_CUSTOM_METHODS = 4;
const DEFAULT_CALC_METHOD_ID = 'simple-0.6';

const PREDEFINED_CALCULATION_METHODS = [
    { id: 'simple-0.6', type: 'simple', label: '60% / 40%', weights: { exam: 0.6, continuous: 0.4 } },
    { id: 'simple-0.5', type: 'simple', label: '50% / 50%', weights: { exam: 0.5, continuous: 0.5 } },
    { id: 'simple-0.67', type: 'simple', label: '67% / 33%', weights: { exam: 0.67, continuous: 0.33 } },
    { id: 'simple-0.4', type: 'simple', label: '40% / 60%', weights: { exam: 0.4, continuous: 0.6 } },
    { id: 'simple-0.7', type: 'simple', label: '70% / 30%', weights: { exam: 0.7, continuous: 0.3 } },
    { id: 'complex-25-25-50', type: 'complex', label: '25%|25% / 50%', weights: { td: 0.25, tp: 0.25, exam: 0.50 } },
    { id: 'complex-15-15-70', type: 'complex', label: '15%|15% / 70%', weights: { td: 0.15, tp: 0.15, exam: 0.70 } },
];

const getCalculationMethodById = (id, customMethods) => {
    return [...PREDEFINED_CALCULATION_METHODS, ...customMethods].find(method => method.id === id);
};

const hasStoredData = () => !!localStorage.getItem(LS_STATE_KEY);

const initialAppState = {
  language: Language.AR,
  theme: Theme.AUTOMATIC,
  calculationMethodId: DEFAULT_CALC_METHOD_ID,
  customCalculationMethods: [],
  requiredCreditsForDebt: 30,
  saveSettingsEnabled: true,
  modules: [],
  s1AvgText: '',
  s1CreditsText: '',
  s2AvgText: '',
  s2CreditsText: '',
};

// Helper: Get translation
const useTranslations = (language) => {
  return useCallback(
    (key, ...args) => {
      let translation = translations[language][key] || key;
      if (args.length > 0) {
        args.forEach((arg, index) => {
          translation = translation.replace(`{${index}}`, String(arg));
        });
      }
      return translation;
    },
    [language]
  );
};

// Helper: Input component
const Input = ({ label, id, wrapperClassName, className, endAdornment, ...props }) => (
  <div className={`form-group ${wrapperClassName || ''}`}>
    {label && <label htmlFor={id} className="block mb-2 font-bold text-content dark:text-content-dark">{label}</label>}
    <div className="relative">
      <input
        id={id}
        {...props}
        className={`form-control w-full px-4 py-3 rounded-sm-custom border border-stroke dark:border-stroke-dark bg-background dark:bg-background-dark text-content dark:text-content-dark placeholder-muted dark:placeholder-muted-dark focus:outline-none focus:border-primary dark:focus:border-primary-dark focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-dark/50 disabled:bg-stroke dark:disabled:bg-stroke-dark disabled:cursor-not-allowed disabled:opacity-70 ${endAdornment ? (document.dir === 'rtl' ? 'pl-8' : 'pr-8') : ''} ${className || ''}`}
      />
      {endAdornment && (
        <div className={`absolute inset-y-0 flex items-center pointer-events-none text-muted dark:text-muted-dark ${document.dir === 'rtl' ? 'left-0 pl-3' : 'right-0 pr-3'}`}>
          {endAdornment}
        </div>
      )}
    </div>
  </div>
);

// Helper: Button component
const Button = ({ children, variant = 'default', icon, className, titleKey, title, ...props }) => {
  const baseClasses = "btn block w-full px-6 py-3 text-base font-bold font-tajawal text-center border-none rounded-sm-custom cursor-pointer transition-all duration-300 ease-in-out disabled:opacity-70 disabled:cursor-wait";
  let variantClasses = "";
  switch (variant) {
    case 'primary':
      variantClasses = "bg-gradient-to-r from-primary dark:from-primary-dark to-blue-400 dark:to-blue-600 text-white hover:opacity-90";
      break;
    case 'add':
      variantClasses = "bg-gradient-to-r from-success to-green-400 text-white hover:opacity-90";
      break;
    case 'danger':
      variantClasses = "bg-danger text-white hover:opacity-90";
      break;
    case 'neutral':
        variantClasses = "bg-stroke dark:bg-stroke-dark text-content dark:text-content-dark hover:bg-gray-300 dark:hover:bg-gray-600"
        break;
    default: // default
      variantClasses = "bg-surface dark:bg-surface-dark text-content dark:text-content-dark border border-stroke dark:border-stroke-dark hover:bg-background dark:hover:bg-background-dark";
      break;
  }
  return (
    <button {...props} className={`${baseClasses} ${variantClasses} ${className || ''}`} title={title}>
      {icon && !props.disabled && <i className={`fa-solid ${icon} ${children ? (props.dir === 'rtl' ? 'ml-2' : 'mr-2') : ''}`}></i>}
      {children}
    </button>
  );
};


// Helper: ToggleSwitch component
const ToggleSwitch = ({ isActive, onToggle, id }) => {
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={isActive}
      onClick={onToggle}
      className={`relative w-11 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${isActive ? 'bg-primary dark:bg-primary-dark' : 'bg-gray-300 dark:bg-gray-600'}`}
    >
      <span
        className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isActive ? (document.dir === 'rtl' ? '-translate-x-5' : 'translate-x-5') : ''}`}
      />
    </button>
  );
};

// Page wrapper
const PageContainer = ({ titleKey, onBack, children, t, language, hasFixedFooter, headerActions }) => {
  return (
    <div className={`page-content w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 ${hasFixedFooter ? 'pb-32' : 'pb-8'}`}>
      <div className="page-header sticky top-0 z-20 bg-background/95 dark:bg-background-dark/95 backdrop-blur-sm flex items-center justify-between w-full pt-16 pb-4 border-b border-stroke dark:border-stroke-dark">
        <h2 className="page-title text-3xl font-extrabold text-content dark:text-content-dark">{t(titleKey)}</h2>
        <div className="flex items-center gap-4">
            {headerActions}
            {onBack && (
              <button
                onClick={onBack}
                className="btn-back bg-transparent text-muted dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark text-3xl transition-all duration-300 ease-in-out transform hover:scale-125"
                title={t('cancel')}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
        </div>
      </div>
      <div className="mt-8">
        {children}
      </div>
    </div>
  );
};

// --- Child Components moved before App to fix ReferenceError ---

// Ad Placeholder for future monetization
const AdPlaceholder = ({ t }) => (
    <div className="ad-placeholder-container my-6">
        <div className="w-full max-w-2xl mx-auto text-center p-4 border-2 border-dashed border-stroke dark:border-stroke-dark rounded-lg-custom bg-background dark:bg-background-dark">
            <p className="text-sm font-semibold text-muted dark:text-muted-dark">{t('ad_placeholder_title')}</p>
        </div>
    </div>
);


const ModuleItem = ({ module, t, onEdit, onDelete, language }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="module-item relative bg-surface dark:bg-surface-dark p-4 border border-stroke dark:border-stroke-dark rounded-md-custom mb-4 flex justify-between items-center shadow-sm dark:shadow-dark">
      <div className="module-info">
        <h4 className="text-lg font-bold mb-1 text-content dark:text-content-dark">{module.name}</h4>
        <div className="module-details flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted dark:text-muted-dark">
          <span><strong>{t('grade_th')}:</strong> {module.grade.toFixed(2)}</span>
          <span><strong>{t('coeff_th')}:</strong> {module.coeff}</span>
          <span><strong>{t('credits_th')}:</strong> {module.credits}</span>
        </div>
      </div>
      <div className="relative">
        <button 
            onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }} 
            className={`kebab-menu p-2 rounded-full text-muted dark:text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none ${language === Language.AR ? 'left-4' : 'right-4'}`}
        >
          <i className="fa-solid fa-ellipsis-v"></i>
        </button>
        {menuOpen && (
          <ul ref={menuRef} className={`module-options-menu absolute top-full mt-1 ${language === Language.AR ? 'left-0' : 'right-0'} bg-surface dark:bg-surface-dark rounded-xs-custom shadow-lg dark:shadow-dark_strong z-10 overflow-hidden w-36 border border-stroke dark:border-stroke-dark`}>
            <li onClick={() => { onEdit(); setMenuOpen(false); }} className="px-4 py-2 hover:bg-background dark:hover:bg-background-dark cursor-pointer flex items-center gap-2 text-sm font-semibold text-primary dark:text-primary-dark"><i className="fa-solid fa-pencil w-4 text-center"></i> {t('edit')}</li>
            <li onClick={() => { onDelete(); setMenuOpen(false); }} className="px-4 py-2 hover:bg-background dark:hover:bg-background-dark cursor-pointer flex items-center gap-2 text-sm font-semibold text-danger"><i className="fa-solid fa-trash w-4 text-center"></i> {t('delete')}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

const SettingItem = ({ titleKey, icon, children, t, language, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  
  useEffect(() => {
    if (initiallyOpen) {
        setIsOpen(true);
    }
  }, [initiallyOpen]);
  
  return (
    <div className="setting-item bg-surface dark:bg-surface-dark p-1 rounded-lg-custom mb-6 border border-stroke dark:border-stroke-dark shadow-sm dark:shadow-dark">
      <div className="setting-item-header flex justify-between items-center cursor-pointer p-4" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-3">
          <i className={`icon fa-solid ${icon} text-lg text-muted dark:text-muted-dark`}></i>
          <h4 className="text-md font-bold text-content dark:text-content-dark">{t(titleKey)}</h4>
        </div>
        <i className={`fa-solid fa-chevron-down text-sm text-muted dark:text-muted-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : (language === Language.AR ? '' : '')}`}></i>
      </div>
      {isOpen && (
        <div className="setting-content p-4 border-t border-stroke dark:border-stroke-dark">
          {children}
        </div>
      )}
    </div>
  );
};

// Custom hook for long press / right click
const useLongPress = (callback, ms = 500) => {
  const timeout = useRef(null);

  const start = useCallback((event) => {
    // Prevent context menu on touch devices which causes issues
    if ('touches' in event) {
        event.preventDefault();
    }
    timeout.current = setTimeout(() => {
      callback();
    }, ms);
  }, [callback, ms]);

  const stop = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, []);

  const onContextMenu = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    onTouchStart: start,
    onTouchEnd: stop,
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onContextMenu,
  };
};


const SettingOption = ({ onClick, selected, children, isCustom, onDelete, t }) => {
    const longPressTriggered = useRef(false);

    const handleLongPress = useCallback(() => {
        if (onDelete) {
            longPressTriggered.current = true;
            onDelete();
        }
    }, [onDelete]);

    const longPressEvents = useLongPress(handleLongPress, 500);
    
    const handleClick = useCallback((event) => {
        if (longPressTriggered.current) {
            event.preventDefault();
            return;
        }
        onClick();
    }, [onClick]);

    const eventHandlers = onDelete
        ? {
            onMouseDown: (e) => {
                longPressTriggered.current = false;
                longPressEvents.onMouseDown(e);
            },
            onMouseUp: longPressEvents.onMouseUp,
            onMouseLeave: longPressEvents.onMouseLeave,
            onTouchStart: (e) => {
                 longPressTriggered.current = false;
                 longPressEvents.onTouchStart(e);
            },
            onTouchEnd: longPressEvents.onTouchEnd,
            onContextMenu: longPressEvents.onContextMenu,
            onClick: handleClick,
        }
        : {
            onClick: onClick,
        };

  const containerClasses = `
    setting-option relative cursor-pointer flex items-center rounded-xs-custom
    transition-colors duration-200 group
    ${selected 
        ? 'bg-primary/10 dark:bg-primary-dark/20'
        : 'hover:bg-background dark:hover:bg-background-dark'
    }
  `;

  return (
    <div
      {...eventHandlers}
      className={containerClasses}
    >
      {/* Selection Indicator Bar */}
      <div className={`
          w-1 absolute top-0 h-full
          ${document.dir === 'rtl' ? 'right-0 rounded-r-xs-custom' : 'left-0 rounded-l-xs-custom'}
          transition-all duration-300
          ${selected ? 'bg-primary dark:bg-primary-dark' : 'bg-transparent'}
      `}></div>

      {/* Content container */}
      <div className="p-3 w-full flex justify-between items-center text-sm text-content dark:text-content-dark">
        <div className="flex items-center gap-2 flex-grow">
          {children}
          {isCustom && <span className="text-xs font-bold py-0.5 px-2 rounded-full bg-primary/20 text-primary dark:bg-primary-dark/20 dark:text-primary-dark shrink-0">{t('custom_tag')}</span>}
        </div>
      </div>
    </div>
  );
};


const Modal = ({ onClose, titleKey, children, t, language, wide, fullScreen, headerActions, modalContentRef }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const modalSizeClasses = fullScreen 
    ? "w-full h-full max-w-none max-h-none rounded-none" 
    : wide ? "w-11/12 max-w-lg" : "w-11/12 max-w-md";

  return (
    <div className="modal-backdrop fixed inset-0 bg-black/60 dark:bg-black/70 flex justify-center items-center z-[2000] p-4 transition-opacity duration-300 ease-in-out opacity-100" onClick={onClose}>
      <div 
        ref={modalContentRef}
        className={`modal-content bg-surface dark:bg-surface-dark rounded-lg-custom shadow-xl dark:shadow-dark_strong transform transition-transform duration-300 ease-in-out scale-100 overflow-y-auto ${modalSizeClasses} ${fullScreen ? 'flex flex-col' : 'max-h-[90vh]'}`}
        onClick={e => e.stopPropagation()}
        dir={language === Language.AR ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-stroke dark:border-stroke-dark sticky top-0 bg-surface dark:bg-surface-dark z-10">
            <h3 className="text-xl font-bold text-content dark:text-content-dark">{t(titleKey)}</h3>
            <div className="flex items-center gap-2">
                 {headerActions?.map(action => (
                    <button key={action.titleKey} onClick={action.onClick} className="action-btn text-lg p-2 text-muted dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark" title={t(action.titleKey)}>
                        <i className={`fa-solid ${action.icon}`}></i>
                    </button>
                ))}
                <button onClick={onClose} className="btn-close-modal text-2xl text-muted dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
        <div className={`${fullScreen ? 'flex-grow overflow-y-auto' : 'p-4 sm:p-6'}`}>
            {children}
        </div>
      </div>
    </div>
  );
};


// Main App Component
const App = () => {
  const [appState, setAppState] = useState(initialAppState);
  const [currentPage, setCurrentPage] = useState('main');
  const [activeModal, setActiveModal] = useState({ type: null });
  const [isInitialized, setIsInitialized] = useState(false);
  const [moduleFormError, setModuleFormError] = useState('');
  
  // Shake animation states
  const [isShakeDeleteAll, setIsShakeDeleteAll] = useState(false);
  const [isShakeClearAnnual, setIsShakeClearAnnual] = useState(false);
  
  // Feedback state
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  // Custom Method modal state
  const [customMethodForm, setCustomMethodForm] = useState({ td: '', tp: '', exam: '100', tdEnabled: false, tpEnabled: false });
  const [customMethodError, setCustomMethodError] = useState('');
  
  // For navigating to a specific setting
  const [openSettingOnLoad, setOpenSettingOnLoad] = useState(null);

  // --- AdMob integration flag ---
  // When real AdMob ads are loaded and available, this would be set to true.
  const [adsAvailable, setAdsAvailable] = useState(false);

  const statementImageRef = useRef(null);
  const feedbackTextareaRef = useRef(null);
  const lastSemesterResultRef = useRef(null);

  const t = useTranslations(appState.language);
  
  // Load state from localStorage on initial mount
  useEffect(() => {
    const savedSavePref = localStorage.getItem(LS_SAVE_PREF_KEY);
    const saveSettingsEnabled = savedSavePref ? JSON.parse(savedSavePref) : true;

    if (saveSettingsEnabled) {
      const savedStateString = localStorage.getItem(LS_STATE_KEY);
      if (savedStateString) {
        try {
          const savedState = JSON.parse(savedStateString);
           setAppState(prevState => ({
            ...initialAppState, // Start with defaults
            ...savedState,
            saveSettingsEnabled: true // Ensure it's true if loaded
          }));
        } catch (error) {
          console.error("Failed to parse saved state:", error);
          setAppState(prevState => ({ ...prevState, saveSettingsEnabled })); // Load default with correct save pref
        }
      } else {
         setAppState(prevState => ({ ...prevState, saveSettingsEnabled }));
      }
    } else {
        // If saving is disabled, load defaults but keep saveSettingsEnabled as false
        setAppState(prevState => ({ ...initialAppState, saveSettingsEnabled: false }));
    }
    setIsInitialized(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save state to localStorage when appState changes (if enabled)
  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem(LS_SAVE_PREF_KEY, JSON.stringify(appState.saveSettingsEnabled));
    if (appState.saveSettingsEnabled) {
      // Only save relevant parts, not temporary UI state like s1AvgText if they aren't meant to be persisted long-term
      const stateToSave = {
        language: appState.language,
        theme: appState.theme,
        calculationMethodId: appState.calculationMethodId,
        customCalculationMethods: appState.customCalculationMethods,
        requiredCreditsForDebt: appState.requiredCreditsForDebt,
        modules: appState.modules,
        // Persist annual input texts
        s1AvgText: appState.s1AvgText,
        s1CreditsText: appState.s1CreditsText,
        s2AvgText: appState.s2AvgText,
        s2CreditsText: appState.s2CreditsText,
      };
      localStorage.setItem(LS_STATE_KEY, JSON.stringify(stateToSave));
    } else {
      localStorage.removeItem(LS_STATE_KEY); // Clear state if saving is disabled
    }
  }, [appState, isInitialized]);
  
  // Apply theme and language to HTML element
  useEffect(() => {
    document.documentElement.lang = appState.language;
    document.documentElement.dir = appState.language === Language.AR ? 'rtl' : 'ltr';

    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    const applySystemTheme = () => {
        if (matcher.matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    if (appState.theme === Theme.AUTOMATIC) {
        applySystemTheme();
        matcher.addEventListener('change', applySystemTheme);
    } else {
        document.documentElement.classList.toggle('dark', appState.theme === Theme.DARK);
    }

    return () => {
        matcher.removeEventListener('change', applySystemTheme);
    };
  }, [appState.language, appState.theme]);

  // useEffect for custom method modal real-time calculation
  useEffect(() => {
    if (activeModal.type !== 'addCustomMethod') return;

    const tdVal = customMethodForm.tdEnabled ? parseFloat(customMethodForm.td) || 0 : 0;
    const tpVal = customMethodForm.tpEnabled ? parseFloat(customMethodForm.tp) || 0 : 0;
    
    const totalContinuous = tdVal + tpVal;
    const examVal = 100 - totalContinuous;

    setCustomMethodForm(prev => ({ ...prev, exam: String(examVal) }));
    
  }, [customMethodForm.td, customMethodForm.tp, customMethodForm.tdEnabled, customMethodForm.tpEnabled, activeModal.type]);


  const updateSettings = (newSettings) => {
    setAppState(prev => ({ ...prev, ...newSettings }));
  };

  const handlePageChange = (pageId, openSettingKey) => {
    setCurrentPage(pageId);
    if (openSettingKey) {
        setOpenSettingOnLoad(openSettingKey);
    } else {
        setOpenSettingOnLoad(null);
    }
};

  const closeModal = () => {
    setActiveModal({ type: null });
    // Reset modal-specific states
    setCustomMethodError('');
    setCustomMethodForm({ td: '', tp: '', exam: '100', tdEnabled: false, tpEnabled: false });
  };

  const openErrorModal = (payload) => setActiveModal({ type: 'error', payload });
  const openConfirmModal = (payload) => setActiveModal({ type: 'confirm', payload });
  const openResultModal = (payload) => setActiveModal({ type: 'result', payload });
  const openSuccessModal = (payload) => setActiveModal({ type: 'success', payload });

  // --- Module Management ---
  const [moduleForm, setModuleForm] = useState({
    name: '', coeff: '', credits: '',
    tdGrade: '', tpGrade: '', examGrade: '',
    tdEnabled: false, tpEnabled: false, examEnabled: true // Default exam enabled
  });

  const handleModuleFormChange = (field, value) => {
    if (moduleFormError) setModuleFormError('');

    setModuleForm(prev => {
        let finalValue = value;

        if (field === 'coeff' || field === 'credits') {
            const numValue = Number(value);
            if (!isNaN(numValue) && numValue > 10) {
                finalValue = '10';
            }
        }

        if (field === 'tdGrade' || field === 'tpGrade' || field === 'examGrade') {
             // We work with strings for grade inputs to allow intermediate states like "1."
            const strValue = String(value);
            if (strValue) { // Check if the string is not empty
                const numValue = parseFloat(strValue);
                if (!isNaN(numValue) && numValue > 20) {
                    finalValue = '20';
                }
            }
        }
        
        return { ...prev, [field]: finalValue };
    });
  };

  const handleGradeToggle = (type) => {
    setModuleForm(prev => {
        const calculationMethod = getCalculationMethodById(appState.calculationMethodId, appState.customCalculationMethods);
        const isSimpleMethod = calculationMethod?.type === 'simple';

        // Start with the new state of the clicked toggle
        const newState = { ...prev, [`${type}Enabled`]: !prev[`${type}Enabled`] };

        // If the toggle was just turned ON
        if (newState[`${type}Enabled`]) {
            // For simple methods, enforce mutual exclusivity for TD/TP
            if (isSimpleMethod) {
                if (type === 'td' && newState.tpEnabled) {
                    newState.tpEnabled = false;
                    newState.tpGrade = '';
                } else if (type === 'tp' && newState.tdEnabled) {
                    newState.tdEnabled = false;
                    newState.tdGrade = '';
                }
            }
        } else {
            // If the toggle was just turned OFF, clear its grade
            newState[`${type}Grade`] = '';
        }

        // Clean up any per-module custom weights if they exist,
        // since the user is changing the fundamental structure of the grade calculation.
        if ('tdWeight' in newState) {
            delete newState.tdWeight;
            delete newState.tpWeight;
            delete newState.examWeight;
        }

        return newState;
    });
  };

  const handleNavigateToSettings = () => {
    closeModal();
    handlePageChange('settings');
  };

  const saveModule = () => {
    const { name, coeff, credits, tdGrade, tpGrade, examGrade, tdEnabled, tpEnabled, examEnabled, id } = moduleForm;

    const coeffNum = parseFloat(coeff);
    const creditsNum = parseFloat(credits);

    if (!name.trim()) return setModuleFormError('error_module_name_required');
    if (isNaN(coeffNum) || coeffNum <= 0 || coeffNum > 10) return setModuleFormError('error_coeff_invalid');
    if (isNaN(creditsNum) || creditsNum <= 0 || creditsNum > 10) return setModuleFormError('error_credits_invalid');

    const parseGrade = (gradeStr) => gradeStr ? parseFloat(gradeStr) : NaN;
    const td = parseGrade(tdGrade);
    const tp = parseGrade(tpGrade);
    const exam = parseGrade(examGrade);
    const isValidGrade = (g) => !isNaN(g) && g >= 0 && g <= 20;

    const tdGradeProvided = tdEnabled && isValidGrade(td);
    const tpGradeProvided = tpEnabled && isValidGrade(tp);
    const examGradeProvided = examEnabled && isValidGrade(exam);

    if (!tdGradeProvided && !tpGradeProvided && !examGradeProvided) {
        return setModuleFormError('error_grade_invalid');
    }
    
    setModuleFormError('');

    let finalGrade = 0;
    const calculationMethod = getCalculationMethodById(appState.calculationMethodId, appState.customCalculationMethods);
    
    const tdVal = tdGradeProvided ? td : 0;
    const tpVal = tpGradeProvided ? tp : 0;
    const examVal = examGradeProvided ? exam : 0;

    if (calculationMethod?.type === 'complex') {
        const weights = calculationMethod.weights;
        let totalPoints = 0;
        let totalWeight = 0;

        // Add exam points if provided
        if (examGradeProvided) {
            totalPoints += examVal * weights.exam;
            totalWeight += weights.exam;
        }

        // Calculate continuous part based on what's provided, redistributing weight if needed
        const continuousBaseWeight = weights.td + weights.tp;
        if (tdGradeProvided && tpGradeProvided) {
            // Both provided, use their specific weights
            totalPoints += (tdVal * weights.td) + (tpVal * weights.tp);
            totalWeight += continuousBaseWeight;
        } else if (tdGradeProvided) { // Only TD provided, gets all continuous weight
            totalPoints += tdVal * continuousBaseWeight;
            totalWeight += continuousBaseWeight;
        } else if (tpGradeProvided) { // Only TP provided, gets all continuous weight
            totalPoints += tpVal * continuousBaseWeight;
            totalWeight += continuousBaseWeight;
        }
        
        // Final grade is the weighted average of the provided parts
        finalGrade = totalWeight > 0 ? totalPoints / totalWeight : 0;

    } else { // Simple method calculation
        const weights = (calculationMethod?.type === 'simple' && calculationMethod.weights) 
            ? calculationMethod.weights 
            : { exam: 0.6, continuous: 0.4 }; // Fallback
        
        const continuousGrade = tdGradeProvided ? td : (tpGradeProvided ? tp : NaN);
        
        if (examGradeProvided && !isNaN(continuousGrade)) {
            finalGrade = (examVal * weights.exam) + (continuousGrade * weights.continuous);
        } else if (examGradeProvided) {
            finalGrade = examVal;
        } else if (!isNaN(continuousGrade)) {
            finalGrade = continuousGrade;
        }
    }
    
    const newModule = { 
        id: id || Date.now().toString(), 
        name: name.trim(), 
        coeff: coeffNum, 
        credits: creditsNum, 
        grade: parseFloat(finalGrade.toFixed(2)) // Ensure 2 decimal places stored
    };

    setAppState(prev => {
      const newModules = id 
        ? prev.modules.map(m => m.id === id ? newModule : m)
        : [...prev.modules, newModule];
      return { ...prev, modules: newModules };
    });
    closeModal();
  };
  
  const openModuleModal = (moduleToEdit) => {
    if (!moduleToEdit && appState.modules.length >= 15) {
      return openErrorModal({ messageKey: 'error_max_modules'});
    }
    
    setModuleFormError('');
    const calculationMethod = getCalculationMethodById(appState.calculationMethodId, appState.customCalculationMethods);
    const isComplexMethod = calculationMethod?.type === 'complex';

    if (moduleToEdit) {
        setModuleForm({
            id: moduleToEdit.id,
            name: moduleToEdit.name,
            coeff: String(moduleToEdit.coeff),
            credits: String(moduleToEdit.credits),
            examGrade: moduleToEdit.grade.toString(),
            tdGrade: '', tpGrade: '',
            tdEnabled: isComplexMethod,
            tpEnabled: isComplexMethod,
            examEnabled: true,
        });
    } else {
        setModuleForm({
            name: '', coeff: '', credits: '',
            tdGrade: '', tpGrade: '', examGrade: '',
            tdEnabled: isComplexMethod,
            tpEnabled: isComplexMethod,
            examEnabled: true,
        });
    }
    setActiveModal({ type: 'module' });
  };

  const deleteModule = (id) => {
    setAppState(prev => ({ ...prev, modules: prev.modules.filter(m => m.id !== id) }));
  };

  const deleteAllModules = () => {
    if (appState.modules.length === 0) {
        setIsShakeDeleteAll(true);
        setTimeout(() => setIsShakeDeleteAll(false), 500);
        return;
    }
     openConfirmModal({
        messageKey: 'confirm_delete_all_modules',
        onConfirm: () => setAppState(prev => ({ ...prev, modules: [] }))
     });
  };

  // --- Calculations ---
  const calculateSemesterResult = () => {
    if (appState.modules.length === 0) return openErrorModal({ messageKey: 'error_no_modules' });

    let totalPoints = 0, totalCoeffs = 0, earnedCredits = 0;
    appState.modules.forEach(m => {
      totalPoints += m.grade * m.coeff;
      totalCoeffs += m.coeff;
      if (m.grade >= 10) earnedCredits += m.credits;
    });

    const average = totalCoeffs > 0 ? totalPoints / totalCoeffs : 0;
    const finalCredits = average >= 10 ? 30 : earnedCredits; // All 30 credits if semester avg >= 10

    const getRemarkKey = (grade) => {
      if (grade >= 18) return 'remark_excellent'; if (grade >= 16) return 'remark_very_good';
      if (grade >= 14) return 'remark_good'; if (grade >= 12) return 'remark_fairly_good';
      if (grade >= 10) return 'remark_pass'; if (grade >= 7) return 'remark_resit'; return 'remark_poor';
    };
    
    const result = { average, credits: finalCredits, remarkKey: getRemarkKey(average) };
    lastSemesterResultRef.current = result; // Store for statement
    openResultModal({ 
        titleKey: 'semester_result_title', 
        average: result.average, 
        credits: result.credits, 
        totalPossibleCredits: 30,
        remarkKey: result.remarkKey 
    });
  };

  const calculateAnnualResult = () => {
    const s1Avg = parseFloat(appState.s1AvgText);
    let s1Credits = parseFloat(appState.s1CreditsText);
    const s2Avg = parseFloat(appState.s2AvgText);
    let s2Credits = parseFloat(appState.s2CreditsText);

    const isValidNum = (n) => !isNaN(n) && n >= 0;
    const isValidAvg = (n) => isValidNum(n) && n <= 20;
    const isValidCredits = (n) => isValidNum(n) && n <= 30;

    if (!isValidAvg(s1Avg) || !isValidCredits(s1Credits) || !isValidAvg(s2Avg) || !isValidCredits(s2Credits)) {
      return openErrorModal({ messageKey: 'error_invalid_annual_values' });
    }

    // Auto-set credits to 30 if semester average is >= 10
    if (s1Avg >= 10) s1Credits = 30;
    if (s2Avg >= 10) s2Credits = 30;

    const annualAvg = (s1Avg + s2Avg) / 2;
    let totalCredits = s1Credits + s2Credits;
    let status;

    if (annualAvg >= 10) { // Automatically pass if annual average is 10 or more
        status = { textKey: 'status_pass', class: 'bg-success-soft text-success' };
        totalCredits = 60; // Grant all 60 credits
    } else if (totalCredits >= appState.requiredCreditsForDebt) {
        status = { textKey: 'status_debt', class: 'bg-debt-soft text-debt' };
    } else {
        status = { textKey: 'status_fail', class: 'bg-danger-soft text-danger' };
    }
    
    openResultModal({ 
        isAnnual: true, 
        titleKey: 'annual_result_title', 
        average: annualAvg, 
        credits: totalCredits,
        totalPossibleCredits: 60, 
        status 
    });
  };
  
    const handleAnnualInputChange = (field, value) => {
        let finalValue = value;

        if (field.includes('AvgText')) {
            const digits = value.replace(/\D/g, ''); // Keep only digits

            if (digits.length === 0) {
                finalValue = '';
            } else {
                // Form a number from the first 4 digits
                const relevantDigits = digits.slice(0, 4);
                let num;
                if (relevantDigits.length > 2) {
                    num = parseFloat(relevantDigits.slice(0, 2) + '.' + relevantDigits.slice(2));
                } else {
                    num = parseFloat(relevantDigits);
                }

                if (num > 20) {
                    finalValue = '20.00';
                } else {
                    if (relevantDigits.length > 2) {
                        finalValue = relevantDigits.slice(0, 2) + '.' + relevantDigits.slice(2);
                    } else {
                        finalValue = relevantDigits;
                    }
                }
            }
        } else if (field.includes('CreditsText')) {
            const num = parseInt(value.replace(/\D/g, ''), 10);
            if (isNaN(num)) {
                finalValue = '';
            } else if (num > 30) {
                finalValue = '30';
            } else {
                finalValue = String(num); // This also handles pasting "05" -> "5"
            }
        }
        
        setAppState(prev => {
            const newState = { ...prev, [field]: finalValue };

            if (field === 's1AvgText') {
                const avg = parseFloat(finalValue);
                newState.s1CreditsText = (!isNaN(avg) && avg >= 10) ? '30' : prev.s1CreditsText;
            }
            if (field === 's2AvgText') {
                const avg = parseFloat(finalValue);
                 newState.s2CreditsText = (!isNaN(avg) && avg >= 10) ? '30' : prev.s2CreditsText;
            }
            return newState;
        });
    };
    
    const clearAnnualInputs = () => {
        const { s1AvgText, s1CreditsText, s2AvgText, s2CreditsText } = appState;
        const isFieldsEmpty = !s1AvgText.trim() && !s1CreditsText.trim() && !s2AvgText.trim() && !s2CreditsText.trim();
        
        if (isFieldsEmpty) {
            setIsShakeClearAnnual(true);
            setTimeout(() => setIsShakeClearAnnual(false), 500);
        } else {
            openConfirmModal({
                titleKey: 'confirm_clear_annual_fields_title',
                messageKey: 'confirm_clear_annual_fields',
                onConfirm: () => {
                    setAppState(prev => ({ ...prev, s1AvgText: '', s1CreditsText: '', s2AvgText: '', s2CreditsText: '' }));
                }
            });
        }
    };

  const handleClearAllData = () => {
    openConfirmModal({
        titleKey: 'confirm_clear_all_data_title',
        messageKey: 'confirm_clear_all_data',
        onConfirm: () => {
            localStorage.removeItem(LS_STATE_KEY);
            localStorage.removeItem(LS_SAVE_PREF_KEY);
            window.location.reload();
        }
    });
  };


  // --- Statement Generation ---
   const generateAndShowStatement = () => {
        if (!lastSemesterResultRef.current || appState.modules.length === 0) {
            return openErrorModal({ messageKey: 'no_data_for_statement' });
        }
        setActiveModal({ type: 'statement' });
    };

  const saveStatementAsImage = async () => {
    if (statementImageRef.current) {
        try {
            // @ts-ignore html2canvas is global
            const canvas = await html2canvas(statementImageRef.current, {
                backgroundColor: appState.theme === Theme.LIGHT || appState.theme === Theme.AUTOMATIC ? '#ffffff' : '#1f2937', // surface color
                useCORS: true,
                scale: 2,
            });
            const link = document.createElement('a');
            link.download = `Statement_${new Date().toISOString().split('T')[0]}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error("Error saving statement:", err);
            openErrorModal({ messageKey: "error_saving_statement"});
        }
    }
  };
  
    const shareStatementAsImage = async () => {
        if (!statementImageRef.current) return;

        try {
            // @ts-ignore html2canvas is global
            const canvas = await html2canvas(statementImageRef.current, {
                backgroundColor: appState.theme === Theme.LIGHT || appState.theme === Theme.AUTOMATIC ? '#ffffff' : '#1f2937',
                useCORS: true,
                scale: 2,
            });

            canvas.toBlob(async (blob) => {
                if (!blob) {
                    console.error("Canvas to Blob conversion failed.");
                    openErrorModal({ messageKey: "error_sharing_statement" });
                    return;
                }

                const file = new File([blob], `Statement_${new Date().toISOString().split('T')[0]}.png`, { type: 'image/png' });
                const shareData = {
                    files: [file],
                    title: t('statement_title'),
                    text: t('semester_gpa_summary'),
                };

                if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                    await navigator.share(shareData);
                } else {
                    openErrorModal({ messageKey: 'error_share_unsupported' });
                }
            }, 'image/png');

        } catch (err) {
            console.error("Error sharing statement:", err);
            openErrorModal({ messageKey: "error_sharing_statement" });
        }
    };

  const handleSendFeedback = async () => {
    const feedback = feedbackTextareaRef.current?.value.trim();
    if (!feedback) {
        openErrorModal({ messageKey: 'error_feedback_empty' });
        return;
    }
    
    setIsSendingFeedback(true);
    
    try {
        const response = await fetch("https://formspree.io/f/mdkzpdnj", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ message: feedback })
        });

        if (response.ok) {
            if (feedbackTextareaRef.current) feedbackTextareaRef.current.value = "";
            openSuccessModal({ 
                titleKey: 'feedback_sent_success_title', 
                messageKey: 'feedback_success_message' 
            });
        } else {
            throw new Error('Formspree submission failed');
        }
    } catch (error) {
        console.error("Error sending feedback:", error);
        openErrorModal({ messageKey: 'feedback_sent_error' });
    } finally {
        setIsSendingFeedback(false);
    }
};

  
  
  // --- Custom Method Logic ---
  const handleCustomMethodFormChange = (field, value) => {
    if (customMethodError) setCustomMethodError('');
    // Allow only 2 digits and cap at 99
    const sanitizedValue = value.replace(/[^0-9]/g, '').slice(0, 2);
    const numValue = parseInt(sanitizedValue, 10);
    const finalValue = !isNaN(numValue) && numValue > 99 ? '99' : sanitizedValue;
    setCustomMethodForm(prev => ({...prev, [field]: finalValue}));
  };
  
  const handleCustomMethodToggle = (field) => {
    if (customMethodError) setCustomMethodError('');
    setCustomMethodForm(prev => {
        const newState = { ...prev, [`${field}Enabled`]: !prev[`${field}Enabled`]};
        if (!newState[`${field}Enabled`]) {
            newState[field] = ''; // Clear value when disabled
        }
        return newState;
    });
  };

  const handleAddCustomMethod = () => {
    const tdVal = customMethodForm.tdEnabled ? parseFloat(customMethodForm.td) : 0;
    const tpVal = customMethodForm.tpEnabled ? parseFloat(customMethodForm.tp) : 0;
    
    if (!customMethodForm.tdEnabled && !customMethodForm.tpEnabled) {
        return setCustomMethodError('error_custom_weights_no_selection');
    }
    if ((customMethodForm.tdEnabled && isNaN(tdVal)) || (customMethodForm.tpEnabled && isNaN(tpVal))) {
        return setCustomMethodError('error_custom_weights_invalid');
    }

    const examVal = 100 - tdVal - tpVal;
    if (examVal < 0) {
        return setCustomMethodError('error_custom_weights_sum_over_100');
    }
    
    let labelParts = [];
    if (customMethodForm.tdEnabled) labelParts.push(`${tdVal}%`);
    if (customMethodForm.tpEnabled) labelParts.push(`${tpVal}%`);
    const continuousLabel = labelParts.join('|');
    
    const newMethod = {
        id: `custom-${Date.now()}`,
        type: 'complex',
        label: `${continuousLabel} / ${examVal}%`,
        isCustom: true,
        weights: { td: tdVal / 100, tp: tpVal / 100, exam: examVal / 100 },
    };

    const updateStateWithNewMethod = (clearModules) => {
        setAppState(prev => ({
            ...prev,
            customCalculationMethods: [...prev.customCalculationMethods, newMethod],
            calculationMethodId: newMethod.id,
            modules: clearModules ? [] : prev.modules,
        }));
    };

    if (appState.modules.length > 0) {
        openConfirmModal({
            messageKey: 'confirm_change_calc_method',
            onConfirm: () => {
                updateStateWithNewMethod(true);
                closeModal();
            }
        });
    } else {
        updateStateWithNewMethod(false);
        closeModal();
    }
  };
  
  const handleDeleteCustomMethod = (idToDelete) => {
     openConfirmModal({
        titleKey: 'confirm_delete_custom_method_title',
        messageKey: 'confirm_delete_custom_method',
        onConfirm: () => {
            setAppState(prev => {
                const newCustomMethods = prev.customCalculationMethods.filter(m => m.id !== idToDelete);
                // If the deleted method was the active one, reset to default
                const newId = prev.calculationMethodId === idToDelete ? DEFAULT_CALC_METHOD_ID : prev.calculationMethodId;
                return { 
                    ...prev, 
                    customCalculationMethods: newCustomMethods,
                    calculationMethodId: newId,
                };
            })
        }
     });
  };


  // --- Render methods for pages ---
  const renderMainPage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 bg-background dark:bg-background-dark">
        <div className="page-content w-full max-w-2xl text-center">
            <div className="logo-container mb-8">
                {appState.theme === Theme.LIGHT || (appState.theme === Theme.AUTOMATIC && typeof window !== 'undefined' && !window.matchMedia('(prefers-color-scheme: dark)').matches) ? (
                    <img src="assets/logo-light.png" alt="Logo Light" className="app-logo w-44 h-auto mx-auto" />
                ) : (
                    <img src="assets/logo-dark.png" alt="Logo Dark" className="app-logo w-44 h-auto mx-auto" />
                )}
            </div>
            <div className="choice-cards-container grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div 
                    className="choice-card bg-surface dark:bg-surface-dark p-8 rounded-xl shadow-md dark:shadow-dark border border-stroke dark:border-stroke-dark cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-strong dark:hover:shadow-dark_strong"
                    onClick={() => handlePageChange('semester-calculator')}
                >
                    <div className="icon text-5xl text-primary dark:text-primary-dark mb-4"><i className="fa-solid fa-book-open-reader"></i></div>
                    <h3 className="text-xl font-bold mb-1 text-content dark:text-content-dark">{t('semester_gpa_card_title')}</h3>
                    <p className="text-sm text-muted dark:text-muted-dark">{t('semester_gpa_card_desc')}</p>
                </div>
                <div 
                    className="choice-card bg-surface dark:bg-surface-dark p-8 rounded-xl shadow-md dark:shadow-dark border border-stroke dark:border-stroke-dark cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-strong dark:hover:shadow-dark_strong"
                    onClick={() => handlePageChange('annual-calculator')}
                >
                    <div className="icon text-5xl text-primary dark:text-primary-dark mb-4"><i className="fa-solid fa-calendar-check"></i></div>
                    <h3 className="text-xl font-bold mb-1 text-content dark:text-content-dark">{t('annual_gpa_card_title')}</h3>
                    <p className="text-sm text-muted dark:text-muted-dark">{t('annual_gpa_card_desc')}</p>
                </div>
            </div>
            {adsAvailable && <AdPlaceholder t={t} />}
            <div 
                className="main-settings-link w-full mt-6 p-4 rounded-xl bg-surface dark:bg-surface-dark border border-stroke dark:border-stroke-dark flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-strong dark:hover:shadow-dark_strong font-bold text-lg text-muted dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark shadow-md dark:shadow-dark"
                onClick={() => handlePageChange('settings')}
            >
                <i className="fa-solid fa-gear"></i>
                <span>{t('settings')}</span>
            </div>
        </div>
    </div>
  );

  const renderSemesterCalculatorPage = () => (
    <>
    <PageContainer titleKey="semester_gpa_title" onBack={() => handlePageChange('main')} t={t} language={appState.language} hasFixedFooter>
        <div id="modules-list" className="mb-6">
            {appState.modules.length === 0 ? (
                <p className="text-muted dark:text-muted-dark text-center py-8">{t('no_modules_yet')}</p>
            ) : (
                appState.modules.map(module => (
                    <ModuleItem key={module.id} module={module} t={t} onEdit={() => openModuleModal(module)} onDelete={() => deleteModule(module.id)} language={appState.language}/>
                ))
            )}
        </div>
        {adsAvailable && <AdPlaceholder t={t} />}
    </PageContainer>
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 dark:bg-background-dark/80 backdrop-blur-sm border-t border-stroke dark:border-stroke-dark z-10">
        <div className="max-w-2xl mx-auto space-y-2">
            <div className="flex items-center gap-2">
                <Button variant="add" onClick={() => openModuleModal()} className="flex-grow">
                    {t('add_new_module')}
                </Button>
                <Button
                    variant="danger"
                    onClick={deleteAllModules}
                    className={`flex-shrink-0 w-auto !p-3 ${isShakeDeleteAll ? 'shake' : ''}`}
                    title={t('delete_all_modules')}
                    icon="fa-eraser"
                />
            </div>
            <Button variant="primary" onClick={calculateSemesterResult}>{t('show_result')}</Button>
        </div>
    </div>
    </>
  );

  const renderAnnualCalculatorPage = () => {
    const annualHeaderActions = (
        <button
            onClick={() => setActiveModal({ type: 'annualInfo' })}
            className="btn-back bg-transparent text-primary dark:text-primary-dark text-2xl transition-all duration-300 ease-in-out transform hover:scale-125"
            title={t('annual_info_modal_title')}
        >
            <i className="fa-solid fa-circle-info"></i>
        </button>
    );

     return (
        <PageContainer 
            titleKey="annual_gpa_title" 
            onBack={() => handlePageChange('main')} 
            t={t} 
            language={appState.language}
            headerActions={annualHeaderActions}
        >
            <div>
                <div className="form-group mb-6">
                    <label className="block mb-2 font-bold text-content dark:text-content-dark">{t('s1_title')}</label>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Input 
                            type="text"
                            inputMode="decimal"
                            value={appState.s1AvgText}
                            onChange={(e) => handleAnnualInputChange('s1AvgText', e.target.value)}
                            placeholder={t('gpa_placeholder')}
                            className="flex-grow" />
                        <Input 
                            type="text" 
                            inputMode="numeric"
                            value={appState.s1CreditsText}
                            onChange={(e) => handleAnnualInputChange('s1CreditsText', e.target.value)}
                            placeholder={t('credits_placeholder')}
                            disabled={parseFloat(appState.s1AvgText) >= 10}
                            className="sm:flex-basis-[100px] sm:flex-grow-0" />
                    </div>
                </div>
                <hr className="my-6 border-stroke dark:border-stroke-dark"/>
                <div className="form-group mb-6">
                    <label className="block mb-2 font-bold text-content dark:text-content-dark">{t('s2_title')}</label>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Input 
                            type="text"
                            inputMode="decimal"
                            value={appState.s2AvgText}
                            onChange={(e) => handleAnnualInputChange('s2AvgText', e.target.value)}
                            placeholder={t('gpa_placeholder')}
                            className="flex-grow" />
                        <Input 
                            type="text" 
                            inputMode="numeric"
                            value={appState.s2CreditsText}
                            onChange={(e) => handleAnnualInputChange('s2CreditsText', e.target.value)}
                            placeholder={t('credits_placeholder')}
                            disabled={parseFloat(appState.s2AvgText) >= 10}
                            className="sm:flex-basis-[100px] sm:flex-grow-0" />
                    </div>
                </div>
                 <p 
                    className="text-xs text-center text-primary dark:text-primary-dark mt-4 cursor-pointer hover:underline"
                    onClick={() => handlePageChange('settings', 'set_credits')}
                >
                    {t('set_credits_prompt')}
                </p>
                {adsAvailable && <AdPlaceholder t={t} />}
                <div className="flex items-center gap-2 mt-4">
                    <Button variant="primary" onClick={calculateAnnualResult} className="flex-grow">{t('show_result')}</Button>
                    <Button
                        variant="danger"
                        onClick={clearAnnualInputs}
                        className={`flex-shrink-0 w-auto !p-3 ${isShakeClearAnnual ? 'shake' : ''}`}
                        title={t('delete_all_modules')}
                        icon="fa-eraser"
                    />
                </div>
            </div>
        </PageContainer>
     );
  };

  const renderSettingsPage = () => {
    const allCalculationMethods = [...PREDEFINED_CALCULATION_METHODS, ...appState.customCalculationMethods];
    
    const requiredCreditsOptions = [ { label: "30", value: 30 }, { label: "45", value: 45 }];
    const themeOptions = [ 
        { labelKey: "theme_auto", value: Theme.AUTOMATIC },
        { labelKey: "light_theme", value: Theme.LIGHT }, 
        { labelKey: "dark_theme", value: Theme.DARK }
    ];
    const languageOptions = [
        { labelKey: "lang_ar", value: Language.AR }, { labelKey: "lang_en", value: Language.EN }, { labelKey: "lang_fr", value: Language.FR }
    ];

    const handleCalcMethodChange = (id) => {
        if (appState.modules.length > 0 && id !== appState.calculationMethodId) {
            openConfirmModal({
                messageKey: 'confirm_change_calc_method',
                onConfirm: () => updateSettings({ calculationMethodId: id, modules: [] }) // Clear modules
            });
        } else {
            updateSettings({ calculationMethodId: id });
        }
    };
    
    const handleRequiredCreditsChange = (value) => {
        const annualInputsFilled = appState.s1AvgText.trim() !== '' || appState.s1CreditsText.trim() !== '' || appState.s2AvgText.trim() !== '' || appState.s2CreditsText.trim() !== '';
        if (annualInputsFilled && value !== appState.requiredCreditsForDebt) {
             openConfirmModal({
                messageKey: 'confirm_change_credits_req',
                onConfirm: () => updateSettings({ requiredCreditsForDebt: value, s1AvgText: '', s1CreditsText: '', s2AvgText: '', s2CreditsText: ''})
            });
        } else {
             updateSettings({ requiredCreditsForDebt: value });
        }
    };

    return (
        <PageContainer titleKey="settings" onBack={() => handlePageChange('main')} t={t} language={appState.language}>
            <div>
                <SettingItem titleKey="calculation_method" icon="fa-calculator" t={t} language={appState.language}>
                     {/* New 3-column header */}
                    <div className="grid grid-cols-3 text-center text-xs font-bold text-muted dark:text-muted-dark px-3 pb-2 border-b border-stroke dark:border-stroke-dark">
                        <span>{t('grade_exam_label')}</span>
                        <span>{t('grade_td_label')}</span>
                        <span>{t('grade_tp_label')}</span>
                    </div>

                    <div className="mt-2 space-y-2">
                        {allCalculationMethods.map(opt => (
                            <SettingOption 
                                key={opt.id} 
                                onClick={() => handleCalcMethodChange(opt.id)} 
                                selected={appState.calculationMethodId === opt.id}
                                isCustom={'isCustom' in opt && opt.isCustom}
                                onDelete={('isCustom' in opt && opt.isCustom) ? () => handleDeleteCustomMethod(opt.id) : undefined}
                                t={t}
                            >
                                <div className="grid grid-cols-3 text-center w-full font-mono font-semibold flex-grow">
                                    {opt.type === 'simple' ? (
                                        <>
                                            <span>{(opt.weights.exam * 100).toFixed(0)}%</span>
                                            <span className="col-span-2 text-center font-normal">{(opt.weights.continuous * 100).toFixed(0)}%</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>{(opt.weights.exam * 100).toFixed(0)}%</span>
                                            <span className="font-normal">{opt.weights.td > 0 ? `${(opt.weights.td * 100).toFixed(0)}%` : '-'}</span>
                                            <span className="font-normal">{opt.weights.tp > 0 ? `${(opt.weights.tp * 100).toFixed(0)}%` : '-'}</span>
                                        </>
                                    )}
                                </div>
                            </SettingOption>
                        ))}
                    </div>

                    {appState.customCalculationMethods.length < MAX_CUSTOM_METHODS && (
                        <button 
                            onClick={() => setActiveModal({type: 'addCustomMethod'})}
                            className="w-full mt-3 p-3 rounded-xs-custom text-sm font-bold text-primary dark:text-primary-dark bg-primary/10 dark:bg-primary-dark/10 hover:bg-primary/20 dark:hover:bg-primary-dark/20 transition-colors"
                        >
                            {t('add_new_weighting')}
                        </button>
                    )}
                </SettingItem>

                <SettingItem titleKey="set_credits" icon="fa-layer-group" t={t} language={appState.language} initiallyOpen={openSettingOnLoad === 'set_credits'}>
                    <p className="text-xs text-muted dark:text-muted-dark mb-4 text-center">{t('set_credits_desc')}</p>
                    {requiredCreditsOptions.map(opt => (
                        <SettingOption key={opt.value} onClick={() => handleRequiredCreditsChange(opt.value)} selected={appState.requiredCreditsForDebt === opt.value} t={t}>
                            <span className="flex-grow">{opt.label}</span>
                        </SettingOption>
                    ))}
                </SettingItem>

                <SettingItem titleKey="theme" icon="fa-palette" t={t} language={appState.language}>
                    {themeOptions.map(opt => (
                        <SettingOption key={opt.value} onClick={() => updateSettings({ theme: opt.value })} selected={appState.theme === opt.value} t={t}>
                            <span className="flex-grow">{t(opt.labelKey)}</span>
                        </SettingOption>
                    ))}
                </SettingItem>

                <SettingItem titleKey="language" icon="fa-language" t={t} language={appState.language}>
                    {languageOptions.map(opt => (
                        <SettingOption key={opt.value} onClick={() => updateSettings({ language: opt.value })} selected={appState.language === opt.value} t={t}>
                            <span className="flex-grow">{t(opt.labelKey)}</span>
                        </SettingOption>
                    ))}
                </SettingItem>
                
                 <div 
                    className="setting-item bg-surface dark:bg-surface-dark p-5 rounded-lg-custom mb-6 border border-stroke dark:border-stroke-dark cursor-pointer"
                    onClick={() => setActiveModal({type: 'dataManagement'})}
                >
                    <div className="setting-item-header flex justify-between items-center">
                        <div className="flex-grow">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <i className={`icon fa-solid fa-cloud-arrow-down text-lg text-muted dark:text-muted-dark`}></i>
                                    <h4 className="text-md font-bold text-content dark:text-content-dark">{t('save_changes')}</h4>
                                </div>
                                 <div onClick={e => e.stopPropagation()}>
                                    <ToggleSwitch isActive={appState.saveSettingsEnabled} onToggle={() => updateSettings({ saveSettingsEnabled: !appState.saveSettingsEnabled })} />
                                 </div>
                            </div>
                            <p className={`text-xs mt-1 ${appState.language === Language.AR ? 'pr-9' : 'pl-9'} text-muted dark:text-muted-dark`}>{t('save_changes_subtitle')}</p>
                        </div>
                    </div>
                </div>

                <div className="setting-item bg-surface dark:bg-surface-dark p-5 rounded-lg-custom mb-6 border border-stroke dark:border-stroke-dark cursor-pointer" onClick={() => setActiveModal({type: 'contact'})}>
                     <div className="setting-item-header flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <i className={`icon fa-solid fa-envelope text-lg text-muted dark:text-muted-dark`}></i>
                            <h4 className="text-md font-bold text-content dark:text-content-dark">{t('contact_us')}</h4>
                        </div>
                    </div>
                </div>

                <SettingItem titleKey="about_app" icon="fa-circle-info" t={t} language={appState.language}>
                     <div className="flex flex-col items-center text-center">
                         <img
                            src="assets/mo3adli.jpeg"
                            alt={t('about_app')}
                            className="w-24 h-24 object-cover rounded-full border-4 border-primary/20 dark:border-primary-dark/30 shadow-lg mb-4"
                        />
                        <div className="about-text text-sm text-content dark:text-content-dark space-y-3">
                            <p>{t('about_p1')}</p>
                            <blockquote className="border-s-4 border-primary dark:border-primary-dark ps-4 italic text-muted dark:text-muted-dark">{t('about_p2')}</blockquote>
                        </div>
                    </div>
                    <div className="relative my-4">
                         <i className="fa-solid fa-lightbulb absolute top-4 start-4 text-muted dark:text-muted-dark pointer-events-none z-10"></i>
                        <textarea 
                            ref={feedbackTextareaRef}
                            className="feedback-textarea w-full min-h-[120px] ps-12 p-4 rounded-sm-custom border border-stroke dark:border-stroke-dark bg-background dark:bg-background-dark text-content dark:text-content-dark resize-vertical focus:outline-none focus:border-primary dark:focus:border-primary-dark focus:ring-2 focus:ring-primary/20 disabled:opacity-70" 
                            placeholder={t('feedback_placeholder')}
                            disabled={isSendingFeedback}
                        />
                    </div>
                    <Button variant="primary" onClick={handleSendFeedback} disabled={isSendingFeedback}>
                        {isSendingFeedback ? (
                            <div className="flex items-center justify-center">
                               <i className="fas fa-spinner fa-spin me-2"></i>
                               <span>{t('feedback_sent_loading')}</span>
                            </div>
                        ) : (
                            t('send_feedback')
                        )}
                    </Button>
                </SettingItem>
                <div className="setting-item bg-surface dark:bg-surface-dark p-5 rounded-lg-custom mb-6 border border-stroke dark:border-stroke-dark cursor-pointer" onClick={() => setActiveModal({type: 'privacy'})}>
                     <div className="setting-item-header flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <i className={`icon fa-solid fa-shield-halved text-lg text-muted dark:text-muted-dark`}></i>
                            <h4 className="text-md font-bold text-content dark:text-content-dark">{t('privacy_policy')}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
  };
  
  const getCurrentPage = () => {
    switch (currentPage) {
      case 'main': return renderMainPage();
      case 'semester-calculator': return renderSemesterCalculatorPage();
      case 'annual-calculator': return renderAnnualCalculatorPage();
      case 'settings': return renderSettingsPage();
      default: return renderMainPage();
    }
  };


    if (!isInitialized) {
        return <div className="fixed inset-0 flex items-center justify-center bg-background dark:bg-background-dark text-primary dark:text-primary-dark text-xl"><i className="fas fa-spinner fa-spin text-4xl"></i></div>; // Loading state
    }

  return (
    <>
      {getCurrentPage()}
      
      {/* Modals */}
      {activeModal.type === 'contact' && (
        <Modal onClose={closeModal} titleKey="contact_us" t={t} language={appState.language} wide>
            <div className="flex flex-col items-center text-center p-4">
                <img
                    src="assets/profile.jpeg"
                    alt={t('contact_modal_by')}
                    className="w-24 h-24 object-cover rounded-full border-4 border-primary/20 dark:border-primary-dark/30 shadow-lg"
                />
                
                <h4 className="text-xl font-bold text-content dark:text-content-dark mt-4 mb-2">{t('contact_modal_by')}</h4>
                
                <div className="text-sm text-muted dark:text-muted-dark space-y-3 max-w-prose mx-auto">
                     <p>{t('contact_modal_p1')}</p>
                     <p>{t('contact_modal_p2')}</p>
                     <p>{t('contact_modal_p3')}</p>
                </div>

                <div className="flex justify-center items-center gap-6 mt-6">
                    <a href="https://www.instagram.com/med1.ben" target="_blank" rel="noopener noreferrer" title="Instagram" 
                       className="w-12 h-12 flex items-center justify-center rounded-full bg-background dark:bg-background-dark text-muted dark:text-muted-dark hover:bg-primary/10 dark:hover:bg-primary-dark/20 hover:text-primary dark:hover:text-primary-dark transition-all duration-300 transform hover:scale-110">
                        <i className="fa-brands fa-instagram text-2xl"></i>
                    </a>
                    <a href="mailto:mohamedbendellalou@gmail.com" title="Email" 
                       className="w-12 h-12 flex items-center justify-center rounded-full bg-background dark:bg-background-dark text-muted dark:text-muted-dark hover:bg-primary/10 dark:hover:bg-primary-dark/20 hover:text-primary dark:hover:text-primary-dark transition-all duration-300 transform hover:scale-110">
                        <i className="fa-solid fa-envelope text-2xl"></i>
                    </a>
                    <a href="https://t.me/MedGunZ" target="_blank" rel="noopener noreferrer" title={t('contact_telegram')} 
                       className="w-12 h-12 flex items-center justify-center rounded-full bg-background dark:bg-background-dark text-muted dark:text-muted-dark hover:bg-primary/10 dark:hover:bg-primary-dark/20 hover:text-primary dark:hover:text-primary-dark transition-all duration-300 transform hover:scale-110">
                        <i className="fa-brands fa-telegram text-2xl"></i>
                    </a>
                </div>
            </div>
        </Modal>
      )}

      {activeModal.type === 'privacy' && (
        <Modal onClose={closeModal} titleKey="privacy_policy_title" t={t} language={appState.language} wide>
            <div className="space-y-5 text-sm leading-relaxed text-content dark:text-content-dark">
                <p className="text-base">{t('privacy_policy_intro')}</p>
                
                <div className="space-y-2">
                    <h4 className="text-lg font-bold">{t('privacy_policy_h1')}</h4>
                    <p className="text-muted dark:text-muted-dark">{t('privacy_policy_p1')}</p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-lg font-bold">{t('privacy_policy_h2')}</h4>
                    <p className="text-muted dark:text-muted-dark">{t('privacy_policy_p2')}</p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-lg font-bold">{t('privacy_policy_h3')}</h4>
                    <p className="text-muted dark:text-muted-dark">{t('privacy_policy_p3')}</p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-lg font-bold">{t('privacy_policy_h4')}</h4>
                    <p className="text-muted dark:text-muted-dark">{t('privacy_policy_p4')}</p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-lg font-bold">{t('privacy_policy_h5')}</h4>
                    <p className="text-muted dark:text-muted-dark">
                        {t('privacy_policy_p5')}{' '}
                        <a href={`mailto:${t('privacy_policy_email')}`} className="text-primary dark:text-primary-dark font-semibold hover:underline">
                            {t('privacy_policy_email')}
                        </a>
                    </p>
                </div>
            </div>
        </Modal>
      )}

      {activeModal.type === 'module' && (
        <Modal onClose={closeModal} titleKey={moduleForm.id ? "edit_module_title" : "add_module_title"} t={t} language={appState.language} wide>
            <div className="space-y-6">
                <div className="modal-section pb-6 border-b border-stroke dark:border-stroke-dark">
                    <Input id="modal-module-name" label={t('module_name_label')} value={moduleForm.name} onChange={e => handleModuleFormChange('name', e.target.value)} placeholder={t('module_name_placeholder')} />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <Input id="modal-module-coeff" label={t('coeff_label')} type="number" value={moduleForm.coeff} onChange={e => handleModuleFormChange('coeff', e.target.value)} placeholder={t('example_placeholder_2')} max="10" />
                        <Input id="modal-module-credits" label={t('credits_label')} type="number" value={moduleForm.credits} onChange={e => handleModuleFormChange('credits', e.target.value)} placeholder={t('example_placeholder_2')} max="10" />
                    </div>
                </div>
                <div className="modal-section">
                    <h4 className="mb-4 font-bold text-lg text-content dark:text-content-dark">{t('calc_module_gpa')}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {(['td', 'tp', 'exam']).map(type => (
                            <div key={type} className="grade-input-group flex flex-col space-y-2 rounded-md-custom bg-background dark:bg-background-dark p-3 border border-stroke dark:border-stroke-dark">
                                <div className="flex justify-between items-center">
                                    <label htmlFor={`${type}-input`} className="font-semibold text-sm text-content dark:text-content-dark">{t(`grade_${type}_label`)}</label>
                                    <ToggleSwitch isActive={moduleForm[`${type}Enabled`]} onToggle={() => handleGradeToggle(type)} />
                                </div>
                                <Input 
                                    type="number" 
                                    id={`${type}-input`} 
                                    value={moduleForm[`${type}Grade`]}
                                    onChange={e => handleModuleFormChange(`${type}Grade`, e.target.value)}
                                    placeholder={t('grade_input_placeholder')} 
                                    disabled={!moduleForm[`${type}Enabled`]} 
                                    max="20" min="0" step="0.01"
                                />
                            </div>
                        ))}
                    </div>
                     <p className="text-xs text-center text-primary dark:text-primary-dark mt-3 cursor-pointer hover:underline" onClick={handleNavigateToSettings}>
                        {t('edit_weights_in_settings_prompt')}
                    </p>
                    {moduleFormError && (
                        <p className="text-danger text-sm text-center mt-4 -mb-2">{t(moduleFormError)}</p>
                    )}
                </div>
            </div>
            <div className="modal-actions flex gap-4 mt-8">
                <Button variant="primary" onClick={saveModule} className="flex-grow">{t('save')}</Button>
                <Button variant="neutral" onClick={closeModal} className="flex-grow">{t('cancel')}</Button>
            </div>
        </Modal>
      )}
      
      {activeModal.type === 'addCustomMethod' && (
        <Modal onClose={closeModal} titleKey="add_weighting_title" t={t} language={appState.language}>
            <p className="text-muted dark:text-muted-dark text-sm mb-4 text-center">{t('weighting_add_desc')}</p>
            <div className="space-y-4">
                {(['td', 'tp']).map(type => (
                    <div key={type} className="flex items-center gap-4">
                        <ToggleSwitch isActive={customMethodForm[`${type}Enabled`]} onToggle={() => handleCustomMethodToggle(type)} />
                        <div className="flex-grow">
                             <Input
                                id={`custom-method-${type}`}
                                label={t(`${type}_percentage_label`)}
                                type="number"
                                value={customMethodForm[type]}
                                onChange={e => handleCustomMethodFormChange(type, e.target.value)}
                                disabled={!customMethodForm[`${type}Enabled`]}
                                placeholder="e.g. 25"
                                max="99"
                                endAdornment={<span>%</span>}
                            />
                        </div>
                    </div>
                ))}
                 <div className="flex items-center gap-4">
                    <div className="w-11 h-6" /> {/* Spacer for alignment */}
                    <div className="flex-grow">
                        <Input
                            id="custom-method-exam"
                            label={t('exam_percentage_label')}
                            type="number"
                            value={customMethodForm.exam}
                            disabled={true}
                            endAdornment={<span>%</span>}
                        />
                    </div>
                </div>
            </div>
            {customMethodError && (
                <p className="text-danger text-sm text-center mt-4">{t(customMethodError)}</p>
            )}
            <div className="modal-actions flex gap-4 mt-8">
                <Button variant="primary" onClick={handleAddCustomMethod} className="flex-grow">{t('add')}</Button>
                <Button variant="neutral" onClick={closeModal} className="flex-grow">{t('cancel')}</Button>
            </div>
        </Modal>
      )}

      {activeModal.type === 'result' && activeModal.payload && (() => {
          const payload = activeModal.payload;
          const averageColor = payload.average !== undefined ? (payload.average >= 10 ? 'text-success' : 'text-danger') : '';
          return (
            <Modal onClose={closeModal} titleKey={payload.titleKey} t={t} language={appState.language} headerActions={!payload.isAnnual ? [{icon: 'fa-file-invoice', onClick: generateAndShowStatement, titleKey: 'view_statement_title'}] : undefined}>
                <div className="text-center space-y-3 py-4">
                    {payload.average !== undefined && (
                        <div className="result-item flex justify-between items-center text-lg py-3 border-b border-stroke dark:border-stroke-dark">
                            <span className="result-label font-medium text-content dark:text-content-dark">{payload.isAnnual ? t('annual_gpa_card_title') : t('result_label')}:</span>
                            <span className={`result-value font-extrabold ${averageColor}`}>{payload.average.toFixed(2)}</span>
                        </div>
                    )}
                    {payload.credits !== undefined && payload.totalPossibleCredits !== undefined && (
                         <div className="result-item flex justify-between items-center text-lg py-3 border-b border-stroke dark:border-stroke-dark">
                            <span className="result-label font-medium text-content dark:text-content-dark">{t('credits_label_result')}:</span>
                            <span className="result-value font-extrabold text-content dark:text-content-dark">{payload.credits} / {payload.totalPossibleCredits}</span>
                        </div>
                    )}
                    {!payload.isAnnual && payload.remarkKey && (
                        <div className="result-item flex justify-between items-center text-lg py-3">
                            <span className="result-label font-medium text-content dark:text-content-dark">{t('remark_label')}:</span>
                            <span className="result-value font-extrabold text-content dark:text-content-dark">{t(payload.remarkKey)}</span>
                        </div>
                    )}
                    {payload.isAnnual && payload.status && (
                        <div className={`final-status text-md mt-6 font-bold py-2 px-6 rounded-full inline-block ${payload.status.class}`}>
                            {t(payload.status.textKey)}
                        </div>
                    )}
                </div>
            </Modal>
          );
      })()}

        {activeModal.type === 'statement' && lastSemesterResultRef.current && (
            <Modal 
                onClose={closeModal} 
                titleKey="statement_title" 
                t={t} 
                language={appState.language} 
                fullScreen 
                headerActions={[
                    {icon: 'fa-share-nodes', onClick: shareStatementAsImage, titleKey: 'share'},
                    {icon: 'fa-floppy-disk', onClick: saveStatementAsImage, titleKey: 'save_statement_title'}
                ]}
            >
                <div ref={statementImageRef} className="statement-capture-area bg-surface dark:bg-surface-dark p-4 sm:p-6">
                    <div className="relative">
                         <img
                            src={appState.theme === Theme.LIGHT || (appState.theme === Theme.AUTOMATIC && typeof window !== 'undefined' && !window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'assets/logo-light.png' : 'assets/logo-dark.png'}
                            alt="logo"
                            className={`absolute z-0 w-12 h-12 object-contain opacity-[0.1] pointer-events-none bottom-4 ${appState.language === Language.AR ? 'left-4' : 'right-4'}`}
                        />
                        <div className="relative z-10 space-y-4">
                            <div className="statement-header grid grid-cols-[3fr_1fr_1fr_1fr] gap-2 p-3 bg-background dark:bg-background-dark rounded-sm-custom font-bold text-sm text-content dark:text-content-dark">
                                <span className={appState.language === Language.AR ? 'text-right' : 'text-left'}>{t('module_th')}</span>
                                <span className="text-center">{t('credits_th')}</span>
                                <span className="text-center">{t('coeff_th')}</span>
                                <span className="text-center">{t('grade_th')}</span>
                            </div>
                            <div id="statement-modules-list" className="divide-y divide-stroke dark:divide-stroke-dark border border-stroke dark:border-stroke-dark rounded-sm-custom">
                                {appState.modules.map(m => (
                                    <div key={m.id} className="statement-row grid grid-cols-[3fr_1fr_1fr_1fr] gap-2 py-2 px-3 items-center text-sm text-content dark:text-content-dark">
                                        <span className={`font-semibold whitespace-nowrap overflow-hidden text-ellipsis ${appState.language === Language.AR ? 'text-right' : 'text-left'}`}>{m.name}</span>
                                        <span className="text-center">{m.credits}</span>
                                        <span className="text-center">{m.coeff}</span>
                                        <span className={`text-center font-bold ${m.grade >= 10 ? 'text-success' : 'text-danger'}`}>{m.grade.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                             <div className="grid grid-cols-3 gap-2 text-center p-3 bg-background dark:bg-background-dark rounded-sm-custom">
                                <div className="summary-item">
                                    <strong className="block text-xs font-bold text-muted dark:text-muted-dark uppercase tracking-wider">{t('semester_gpa_summary')}</strong>
                                    <span className={`value font-extrabold text-lg ${(lastSemesterResultRef.current.average >= 10) ? 'text-success' : 'text-danger'}`}>
                                        {lastSemesterResultRef.current.average.toFixed(2)}
                                    </span>
                                </div>
                                <div className="summary-item">
                                    <strong className="block text-xs font-bold text-muted dark:text-muted-dark uppercase tracking-wider">{t('earned_credits_summary')}</strong>
                                    <span className="value font-extrabold text-lg text-content dark:text-content-dark">
                                        {lastSemesterResultRef.current.credits} / 30
                                    </span>
                                </div>
                                <div className="summary-item">
                                    <strong className="block text-xs font-bold text-muted dark:text-muted-dark uppercase tracking-wider">{t('remark_summary')}</strong>
                                    <span className="value font-bold text-base text-content dark:text-content-dark">
                                        {t(lastSemesterResultRef.current.remarkKey)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )}

      {activeModal.type === 'confirm' && activeModal.payload && (() => {
          const payload = activeModal.payload;
          return (
            <Modal onClose={closeModal} titleKey={payload.titleKey || "alert_title"} t={t} language={appState.language}>
                <div className="text-center text-5xl text-danger mb-4"><i className="fa-solid fa-triangle-exclamation"></i></div>
                <p className="text-center mb-6 text-muted dark:text-muted-dark leading-relaxed">{t(payload.messageKey)}</p>
                <div className="modal-actions flex gap-4">
                    <Button variant="danger" onClick={() => { payload.onConfirm(); closeModal(); }} className="flex-grow">{t('confirm')}</Button>
                    <Button variant="neutral" onClick={closeModal} className="flex-grow">{t('cancel')}</Button>
                </div>
            </Modal>
          );
      })()}
       {activeModal.type === 'error' && activeModal.payload && (() => {
          const payload = activeModal.payload;
          return (
            <Modal onClose={closeModal} titleKey={payload.titleKey || "error_title"} t={t} language={appState.language}>
                <div className="text-center text-5xl text-danger mb-4"><i className="fa-solid fa-circle-xmark"></i></div>
                <p className="text-center mb-6 text-muted dark:text-muted-dark leading-relaxed">{t(payload.messageKey)}</p>
                <div className="modal-actions flex justify-center">
                    <Button variant="primary" onClick={closeModal} className="w-1/2">{t('ok')}</Button>
                </div>
            </Modal>
          );
      })()}

      {activeModal.type === 'success' && activeModal.payload && (() => {
          const payload = activeModal.payload;
          return (
            <Modal onClose={closeModal} titleKey={payload.titleKey} t={t} language={appState.language}>
                <div className="text-center text-5xl text-success mb-4"><i className="fa-solid fa-circle-check"></i></div>
                <p className="text-center mb-6 text-muted dark:text-muted-dark leading-relaxed">{t(payload.messageKey)}</p>
                <div className="modal-actions flex justify-center">
                    <Button variant="add" onClick={closeModal} className="w-1/2">{t('ok')}</Button>
                </div>
            </Modal>
          );
      })()}
      
      {activeModal.type === 'dataManagement' && (() => {
        const hasData = hasStoredData();
        return (
            <Modal onClose={closeModal} titleKey="data_management_title" t={t} language={appState.language}>
                <div className="text-center space-y-6">
                    <p className="text-base text-content dark:text-content-dark leading-relaxed">{t('data_management_desc')}</p>
                    
                    <div className="pt-2">
                        <Button variant="danger" onClick={handleClearAllData} disabled={!hasData}>
                            {t('clear_all_data')}
                        </Button>
                        {!hasData && (
                            <p className="text-xs text-muted dark:text-muted-dark mt-2">{t('no_data_to_clear')}</p>
                        )}
                    </div>
                </div>
            </Modal>
        );
      })()}
      
      {activeModal.type === 'annualInfo' && (
        <Modal onClose={closeModal} titleKey="annual_info_modal_title" t={t} language={appState.language} wide>
            <div className="space-y-4 text-sm text-content dark:text-content-dark">
                <p className="leading-relaxed">{t('annual_info_modal_p1')}</p>
                
                <h4 className="font-bold text-base pt-2">{t('annual_info_modal_h1')}</h4>

                <div className="space-y-3 p-4 bg-background dark:bg-background-dark rounded-md-custom">
                    <div className="space-y-2">
                        <h5 className="font-semibold text-primary dark:text-primary-dark">{t('annual_info_modal_li1_title')}</h5>
                        <p className="text-muted dark:text-muted-dark">{t('annual_info_modal_li1_p1')}</p>
                        <ul className="list-disc list-inside text-muted dark:text-muted-dark space-y-1 mt-1 pl-2">
                            <li>{t('annual_info_modal_li1_item1')}</li>
                            <li>{t('annual_info_modal_li1_item2')}</li>
                        </ul>
                    </div>
                     <hr className="border-stroke dark:border-stroke-dark"/>
                    <div className="space-y-2">
                        <h5 className="font-semibold text-primary dark:text-primary-dark">{t('annual_info_modal_li2_title')}</h5>
                        <p className="text-muted dark:text-muted-dark">{t('annual_info_modal_li2_p1')}</p>
                        <ul className="list-disc list-inside text-muted dark:text-muted-dark space-y-1 mt-1 pl-2">
                            <li>{t('annual_info_modal_li2_item1')}</li>
                            <li>{t('annual_info_modal_li2_item2')}</li>
                        </ul>
                    </div>
                     <hr className="border-stroke dark:border-stroke-dark"/>
                    <div className="space-y-2">
                        <h5 className="font-semibold text-primary dark:text-primary-dark">{t('annual_info_modal_li3_title')}</h5>
                        <p className="text-muted dark:text-muted-dark">{t('annual_info_modal_li3_p1')}</p>
                    </div>
                </div>
            </div>
            <div className="modal-actions flex justify-center mt-8">
                <Button variant="primary" onClick={closeModal} className="w-1/2">{t('ok')}</Button>
            </div>
        </Modal>
      )}


    </>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
