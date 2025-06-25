document.addEventListener('DOMContentLoaded', () => {
    const get = (selector) => document.querySelector(selector);
    const getAll = (selector) => document.querySelectorAll(selector);

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
            add_new_module: '+ إضافة مقياس جديد',
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
            language: 'اللغة',
            lang_ar: 'العربية',
            lang_en: 'English',
            lang_fr: 'Français',
            save_changes: 'حفظ التغييرات',
            contact_us: 'تواصل معنا',
            about_app: 'عن التطبيق',
            about_p1: 'هذا التطبيق مخصص لمساعدة الطلاب الجزائريين على حساب معدلاتهم الفصليّة والسنويّة بدقة وسهولة، باستخدام طرق حساب متعددة تناسب مختلف الجامعات.',
            about_p2: 'هل لديك أي أفكار أو اقتراحات حول التطبيق؟ سأكون ممتنًا لأي ردود فعل تساعدني في تطوير التطبيق وتلبية احتياجات المستخدمين بشكل أفضل.',
            feedback_placeholder: 'اكتب اقتراحك هنا...',
            send_feedback: 'إرسال الاقتراح',
            contact_dev: 'تواصل مع المطور',
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
            annual_result_title: 'النتيجة السنوية',
            result_label: 'النتيجة',
            credits_label_result: 'الرصيد',
            remark_label: 'الملاحظة',
            view_statement_title: 'عرض كشف النقاط',
            save_statement_title: 'حفظ كشف النقاط كصورة',
            statement_title: 'كشف النقاط',
            module_th: 'المقياس',
            credits_th: 'الرصيد',
            coeff_th: 'المعامل',
            grade_th: 'المعدل',
            semester_gpa_summary: 'المعدل الفصلي',
            earned_credits_summary: 'الرصيد المحصل',
            remark_summary: 'الملاحظة',
            alert_title: 'تنبيه',
            confirm: 'تأكيد',
            edit: 'التعديل',
            delete: 'الحذف',
            confirm_delete_all_modules: 'هل أنت متأكد من أنك تريد حذف جميع المقاييس المسجلة؟',
            confirm_change_calc_method: 'تغيير طريقة الحساب سيؤدي إلى حذف جميع المقاييس المضافة. هل تريد المتابعة؟',
            confirm_change_credits_req: 'تغيير رصيد الانتقال سيؤدي إلى مسح بيانات المعدل السنوي المدخلة. هل تريد المتابعة؟',
            error_no_modules: 'الرجاء إضافة مقياس واحد على الأقل.',
            error_invalid_annual_values: 'الرجاء إدخال قيم صحيحة لجميع الحقول المطلوبة.',
            error_max_modules: 'لا يمكن إضافة أكثر من 15 مقياسًا.',
            error_coeff_invalid: 'الرجاء إدخال معامل صحيح بين 1 و 10.',
            error_credits_invalid: 'الرجاء إدخال رصيد صحيح بين 1 و 10.',
            error_grade_invalid: 'يجب تفعيل وإدخال نقطة واحدة صالحة على الأقل (بين 0 و 20).',
            error_feedback_empty: 'الرجاء كتابة اقتراحك أولاً.',
            remark_excellent: 'ممتاز',
            remark_very_good: 'جيد جدًا',
            remark_good: 'جيد',
            remark_fairly_good: 'قريب من الجيد',
            remark_pass: 'مقبول',
            remark_resit: 'استدراك',
            remark_poor: 'ضعيف',
            status_pass: 'ناجح ومنتقل',
            status_debt: 'ناجح بالديون',
            status_fail: 'إعادة السنة'
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
            add_new_module: '+ Add New Module',
            delete_all_modules: 'Delete All Modules',
            show_result: 'Show Result',
            s1_title: 'Semester 1',
            s2_title: 'Semester 2',
            gpa_placeholder: 'GPA',
            credits_placeholder: 'Credits',
            calculation_method: 'Calculation Method',
            set_credits: 'Set Required Credits',
            set_credits_desc: 'Please select the annual credits required to pass with debt, according to your faculty.',
            theme: 'Theme',
            light_theme: 'Light',
            dark_theme: 'Dark',
            language: 'Language',
            lang_ar: 'العربية',
            lang_en: 'English',
            lang_fr: 'Français',
            save_changes: 'Save Changes',
            contact_us: 'Contact Us',
            about_app: 'About App',
            about_p1: 'This application is designed to help Algerian students calculate their semester and annual GPAs accurately and easily, using multiple calculation methods to suit different universities.',
            about_p2: 'Do you have any ideas or suggestions about the app? I would be grateful for any feedback to help me improve the application and better meet user needs.',
            feedback_placeholder: 'Write your suggestion here...',
            send_feedback: 'Send Suggestion',
            contact_dev: 'Contact Developer',
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
            annual_result_title: 'Annual Result',
            result_label: 'Result',
            credits_label_result: 'Credits',
            remark_label: 'Remark',
            view_statement_title: 'View Statement of Marks',
            save_statement_title: 'Save Statement as Image',
            statement_title: 'Statement of Marks',
            module_th: 'Module',
            credits_th: 'Credits',
            coeff_th: 'Coeff.',
            grade_th: 'Grade',
            semester_gpa_summary: 'Semester GPA',
            earned_credits_summary: 'Earned Credits',
            remark_summary: 'Remark',
            alert_title: 'Warning',
            confirm: 'Confirm',
            edit: 'Edit',
            delete: 'Delete',
            confirm_delete_all_modules: 'Are you sure you want to delete all registered modules?',
            confirm_change_calc_method: 'Changing the calculation method will delete all added modules. Do you want to continue?',
            confirm_change_credits_req: 'Changing the required credits will clear the entered annual GPA data. Do you want to continue?',
            error_no_modules: 'Please add at least one module.',
            error_invalid_annual_values: 'Please enter valid values for all required fields.',
            error_max_modules: 'Cannot add more than 15 modules.',
            error_coeff_invalid: 'Please enter a valid coefficient between 1 and 10.',
            error_credits_invalid: 'Please enter valid credits between 1 and 10.',
            error_grade_invalid: 'At least one valid grade (between 0 and 20) must be enabled and entered.',
            error_feedback_empty: 'Please write your suggestion first.',
            remark_excellent: 'Excellent',
            remark_very_good: 'Very Good',
            remark_good: 'Good',
            remark_fairly_good: 'Fairly Good',
            remark_pass: 'Pass',
            remark_resit: 'Resit',
            remark_poor: 'Poor',
            status_pass: 'Promoted',
            status_debt: 'Promoted with Debt',
            status_fail: 'Repeat Year'
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
            add_new_module: '+ Ajouter un Nouveau Module',
            delete_all_modules: 'Supprimer tous les modules',
            show_result: 'Afficher le Résultat',
            s1_title: 'Semestre 1',
            s2_title: 'Semestre 2',
            gpa_placeholder: 'Moyenne',
            credits_placeholder: 'Crédits',
            calculation_method: 'Méthode de Calcul',
            set_credits: 'Définir les Crédits',
            set_credits_desc: 'Veuillez sélectionner le nombre de crédits annuels requis pour passer avec dettes, selon votre faculté.',
            theme: 'Thème',
            light_theme: 'Clair',
            dark_theme: 'Sombre',
            language: 'Langue',
            lang_ar: 'العربية',
            lang_en: 'English',
            lang_fr: 'Français',
            save_changes: 'Enregistrer les modifications',
            contact_us: 'Nous Contacter',
            about_app: 'À Propos',
            about_p1: 'Cette application est conçue pour aider les étudiants algériens à calculer leurs moyennes semestrielles et annuelles avec précision et facilité, en utilisant plusieurs méthodes de calcul adaptées aux différentes universités.',
            about_p2: 'Avez-vous des idées ou des suggestions concernant l\'application ? Je serais reconnaissant de tout retour qui m\'aiderait à améliorer l\'application et à mieux répondre aux besoins des utilisateurs.',
            feedback_placeholder: 'Écrivez votre suggestion ici...',
            send_feedback: 'Envoyer la Suggestion',
            contact_dev: 'Contacter le Développeur',
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
            annual_result_title: 'Résultat Annuel',
            result_label: 'Résultat',
            credits_label_result: 'Crédits',
            remark_label: 'Mention',
            view_statement_title: 'Voir le Relevé de Notes',
            save_statement_title: 'Enregistrer comme Image',
            statement_title: 'Relevé de Notes',
            module_th: 'Module',
            credits_th: 'Crédits',
            coeff_th: 'Coeff.',
            grade_th: 'Moyenne',
            semester_gpa_summary: 'Moyenne Semestrielle',
            earned_credits_summary: 'Crédits Obtenus',
            remark_summary: 'Mention',
            alert_title: 'Avertissement',
            confirm: 'Confirmer',
            edit: 'Modifier',
            delete: 'Supprimer',
            confirm_delete_all_modules: 'Êtes-vous sûr de vouloir supprimer tous les modules enregistrés ?',
            confirm_change_calc_method: 'Changer la méthode de calcul supprimera tous les modules ajoutés. Voulez-vous continuer ?',
            confirm_change_credits_req: 'Changer les crédits requis effacera les données de la moyenne annuelle. Voulez-vous continuer ?',
            error_no_modules: 'Veuillez ajouter au moins un module.',
            error_invalid_annual_values: 'Veuillez saisir des valeurs valides pour tous les champs requis.',
            error_max_modules: 'Impossible d\'ajouter plus de 15 modules.',
            error_coeff_invalid: 'Veuillez saisir un coefficient valide entre 1 et 10.',
            error_credits_invalid: 'Veuillez saisir un nombre de crédits valide entre 1 et 10.',
            error_grade_invalid: 'Au moins une note valide (entre 0 et 20) doit être activée et saisie.',
            error_feedback_empty: 'Veuillez d\'abord écrire votre suggestion.',
            remark_excellent: 'Excellent',
            remark_very_good: 'Très Bien',
            remark_good: 'Bien',
            remark_fairly_good: 'Assez Bien',
            remark_pass: 'Passable',
            remark_resit: 'Rattrapage',
            remark_poor: 'Faible',
            status_pass: 'Admis',
            status_debt: 'Admis avec Dettes',
            status_fail: 'Ajourné'
        }
    };
    
    let state = {
        language: 'ar',
        theme: 'light',
        examWeight: 0.6,
        requiredCreditsForDebt: 30,
        saveSettings: true,
        modules: [],
        lastResult: {},
    };
    
    let confirmCallback = null;

    const saveState = () => {
        if (state.saveSettings) {
            const modulesData = [];
            getAll('.module-item').forEach(item => {
                modulesData.push(JSON.parse(JSON.stringify(item.dataset)));
            });
            state.modules = modulesData;

            localStorage.setItem('gpa_calc_state', JSON.stringify({
                theme: state.theme,
                language: state.language,
                examWeight: state.examWeight,
                requiredCreditsForDebt: state.requiredCreditsForDebt,
                modules: state.modules
            }));
        }
    };
    const loadState = () => {
        state.saveSettings = (localStorage.getItem('gpa_calc_save_pref') ?? 'true') === 'true';
        if (state.saveSettings) {
            const savedState = JSON.parse(localStorage.getItem('gpa_calc_state'));
            if (savedState) {
                state.language = savedState.language || 'ar';
                state.theme = savedState.theme || 'light';
                state.examWeight = savedState.examWeight || 0.6;
                state.requiredCreditsForDebt = savedState.requiredCreditsForDebt || 30;
                state.modules = savedState.modules || [];
            }
        }
    };

    const applyTheme = () => document.documentElement.setAttribute('data-theme', state.theme);
    const updateSaveToggleUI = () => get('#save-settings-toggle').classList.toggle('active', state.saveSettings);
    const updateThemeOptionsUI = () => getAll('.theme-option').forEach(opt => opt.classList.toggle('selected', opt.dataset.themeValue === state.theme));
    const updateCalcMethodUI = () => getAll('.calc-option').forEach(opt => opt.classList.toggle('selected', Math.abs(parseFloat(opt.dataset.value) - state.examWeight) < 0.01));
    const updateRequiredCreditsUI = () => getAll('.credit-option').forEach(opt => opt.classList.toggle('selected', parseInt(opt.dataset.value) === state.requiredCreditsForDebt));
    const updateLanguageOptionsUI = () => getAll('.lang-option').forEach(opt => opt.classList.toggle('selected', opt.dataset.langValue === state.language));
    
    const applyLanguage = () => {
        const lang = state.language;
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;

        getAll('[data-translate-key]').forEach(el => {
            const key = el.dataset.translateKey;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        getAll('[data-translate-placeholder-key]').forEach(el => {
            const key = el.dataset.translatePlaceholderKey;
             if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
         getAll('[data-translate-title-key]').forEach(el => {
            const key = el.dataset.translateTitleKey;
             if (translations[lang][key]) {
                el.title = translations[lang][key];
            }
        });
    };

    const showPage = (pageId) => {
        getAll('.page').forEach(page => page.classList.remove('active'));
        get(`#${pageId}`)?.classList.add('active');
    };

    const openModal = (modalId) => get(`#${modalId}`)?.classList.add('active');
    const closeModal = (modalId) => get(`#${modalId}`)?.classList.remove('active');
    
    const showConfirmationModal = (messageKey, onConfirm) => {
        get('#confirm-modal-text').textContent = translations[state.language][messageKey];
        confirmCallback = onConfirm;
        openModal('confirm-modal');
    };

    const clearAnnualInputs = () => {
        get('#s1-avg').value = '';
        get('#s1-credits').value = '';
        get('#s2-avg').value = '';
        get('#s2-credits').value = '';
        get('#s1-credits').disabled = false;
        get('#s2-credits').disabled = false;
    };

    const setupEventListeners = () => {
        get('#main-page-settings-btn').addEventListener('click', () => showPage('settings-page'));
        getAll('.btn-back').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.target)));
        getAll('.choice-card').forEach(card => card.addEventListener('click', () => showPage(card.dataset.target)));
        get('#contact-setting').addEventListener('click', () => openModal('contact-modal'));
        getAll('.btn-close-modal').forEach(btn => btn.addEventListener('click', () => closeModal(btn.dataset.modal)));
        
        get('#confirm-modal-cancel-btn').addEventListener('click', () => {
            closeModal('confirm-modal');
            confirmCallback = null;
        });
        get('#confirm-modal-confirm-btn').addEventListener('click', () => {
            if (typeof confirmCallback === 'function') {
                confirmCallback();
            }
            closeModal('confirm-modal');
            confirmCallback = null;
        });
        
        getAll('.setting-item[data-setting]').forEach(item => {
            item.querySelector('.setting-item-header').addEventListener('click', (e) => {
                if (e.target.closest('.setting-content')) return;
                item.classList.toggle('open');
            });
        });

        getAll('.theme-option').forEach(option => {
            option.addEventListener('click', () => {
                state.theme = option.dataset.themeValue;
                applyTheme();
                updateThemeOptionsUI();
                saveState();
            });
        });
        
        getAll('.calc-option').forEach(option => {
            option.addEventListener('click', () => {
                const newWeight = parseFloat(option.dataset.value);
                if (Math.abs(newWeight - state.examWeight) > 0.01 && getAll('.module-item').length > 0) {
                    showConfirmationModal('confirm_change_calc_method', () => {
                        state.examWeight = newWeight;
                        updateCalcMethodUI();
                        clearModules(true);
                        saveState();
                    });
                } else {
                    state.examWeight = newWeight;
                    updateCalcMethodUI();
                    saveState();
                }
            });
        });
        
        getAll('.credit-option').forEach(option => {
            option.addEventListener('click', () => {
                const newCredits = parseInt(option.dataset.value);
                if (newCredits === state.requiredCreditsForDebt) return;

                const s1_avg = get('#s1-avg').value.trim();
                const s2_avg = get('#s2-avg').value.trim();
                const annualInputsFilled = s1_avg !== '' || s2_avg !== '';
                
                const changeCredits = () => {
                   state.requiredCreditsForDebt = newCredits;
                   updateRequiredCreditsUI();
                   saveState();
                };

                if (annualInputsFilled) {
                    showConfirmationModal('confirm_change_credits_req', () => {
                        clearAnnualInputs();
                        changeCredits();
                    });
                } else {
                    changeCredits();
                }
            });
        });
        
        getAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                state.language = option.dataset.langValue;
                applyLanguage();
                updateLanguageOptionsUI();
                saveState();
            });
        });

        get('#save-settings-toggle').addEventListener('click', (e) => {
            e.stopPropagation();
            state.saveSettings = !state.saveSettings;
            updateSaveToggleUI();
            if (state.saveSettings) {
                saveState(); 
            } else {
                localStorage.removeItem('gpa_calc_state');
            }
            localStorage.setItem('gpa_calc_save_pref', state.saveSettings);
        });

        get('#send-feedback-btn').addEventListener('click', () => {
            const feedbackText = get('#feedback-text').value;
            if (feedbackText.trim() === '') return showResultModal({ titleKey: 'error_title', errorKey: 'error_feedback_empty' });
            const subject = encodeURIComponent("Suggestion for GPA Calculator");
            const body = encodeURIComponent(feedbackText);
            window.location.href = `mailto:mohamedbendellalou@gmail.com?subject=${subject}&body=${body}`;
        });
        
        get('#show-statement-btn').addEventListener('click', () => generateAndShowStatement());
        
        get('#save-statement-btn').addEventListener('click', () => {
            const statementElement = get('#statement-content');
            const title = 'Statement_of_Marks';
            
            // Hide buttons so they are not in the screenshot
            const buttons = statementElement.querySelectorAll('.action-btn, .btn-close-modal');
            buttons.forEach(btn => btn.style.visibility = 'hidden');

            // The watermark is now part of the HTML, so html2canvas will capture it automatically.
            html2canvas(statementElement, {
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--surface-color').trim(),
                useCORS: true,
                scale: 2,
                foreignObjectRendering: true,
            }).then(canvas => {
                // Make buttons visible again after screenshot
                buttons.forEach(btn => btn.style.visibility = 'visible');
                
                const link = document.createElement('a');
                link.download = `${title}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
            }).catch(err => {
                console.error("Oops, something went wrong!", err);
                // Make sure buttons are visible again even if there is an error
                buttons.forEach(btn => btn.style.visibility = 'visible');
            });
        });

        const enforceMax = (el) => {
            const max = parseFloat(el.max);
            if (parseFloat(el.value) > max) el.value = max;
        };
        getAll('input[type="number"][max]').forEach(input => input.addEventListener('input', () => enforceMax(input)));

        const showResultModal = (data) => {
            state.lastResult = data;
            const T = translations[state.language];
            get('#result-modal-title').textContent = T[data.titleKey] || data.titleKey;
            const body = get('#result-modal-body');
            body.innerHTML = '';
            get('#show-statement-btn').style.display = 'none';

            if (data.errorKey) {
                body.innerHTML = `<p style="color:var(--danger-color); font-weight:500;">${T[data.errorKey]}</p>`;
            } else if (data.isAnnual) {
                const avgColor = data.average >= 10 ? 'var(--success-color)' : 'var(--danger-color)';
                body.innerHTML = `<div class="result-item"><span class="result-label">${T.annual_gpa_title}:</span><span class="result-value" style="color: ${avgColor};">${data.average.toFixed(2)}</span></div><div class="result-item"><span class="result-label">${T.credits_label_result}:</span><span class="result-value">${data.credits} / 60</span></div>`;
                if (data.status) body.innerHTML += `<div class="final-status ${data.status.class}">${T[data.status.textKey]}</div>`;
            } else { 
                const averageColor = data.average >= 10 ? 'var(--success-color)' : 'var(--danger-color)';
                body.innerHTML = `<div class="result-item"><span class="result-label">${T.result_label}:</span><span class="result-value" style="color: ${averageColor};">${data.average.toFixed(2)}</span></div><div class="result-item"><span class="result-label">${T.credits_label_result}:</span><span class="result-value">${data.credits} / 30</span></div><div class="result-item"><span class="result-label">${T.remark_label}:</span><span class="result-value">${T[data.remarkKey]}</span></div>`;
                get('#show-statement-btn').style.display = 'block';
            }
            openModal('result-modal');
        };
        
        const generateAndShowStatement = () => {
            const T = translations[state.language];
            const listContainer = get('#statement-modules-list');
            const summaryContainer = get('#statement-summary');
            listContainer.innerHTML = '';
            summaryContainer.innerHTML = '';

            const modules = getAll('.module-item');
            modules.forEach(item => {
                const { name, grade, coeff, credits } = item.dataset;
                const row = document.createElement('div');
                row.className = 'statement-row';
                const gradeColor = parseFloat(grade) >= 10 ? 'var(--success-color)' : 'var(--danger-color)';
                row.innerHTML = `<span>${name}</span><span>${credits}</span><span>${coeff}</span><span style="color: ${gradeColor}; font-weight: 700;">${parseFloat(grade).toFixed(2)}</span>`;
                listContainer.appendChild(row);
            });
            
            const { average, credits, remarkKey } = state.lastResult;
            const avgColor = average >= 10 ? 'var(--success-color)' : 'var(--danger-color)';
            summaryContainer.innerHTML = `<div class="summary-item"><strong>${T.semester_gpa_summary}:</strong><span class="value" style="color: ${avgColor}">${average.toFixed(2)}</span></div><div class="summary-item"><strong>${T.earned_credits_summary}:</strong><span class="value">${credits} / 30</span></div><div class="summary-item"><strong>${T.remark_summary}:</strong><span class="value">${T[remarkKey]}</span></div>`;

            openModal('statement-modal');
        };

        const moduleModal = get('#module-modal');
        get('#add-module-btn').addEventListener('click', () => {
            if(getAll('.module-item').length >= 15) {
                showResultModal({titleKey: 'error_max_modules', errorKey: 'error_max_modules'});
                return;
            }
            get('#modal-title').textContent = translations[state.language].add_module_title;
            moduleModal.dataset.mode = 'add';
            moduleModal.dataset.editId = '';
            resetModalForm();
            openModal('module-modal');
        });
        
        get('#reset-modules-btn').addEventListener('click', () => {
            if (getAll('.module-item').length > 0) {
                showConfirmationModal('confirm_delete_all_modules', clearModules);
            }
        });

        get('#cancel-module-btn').addEventListener('click', () => closeModal('module-modal'));

        const resetModalForm = () => {
            getAll('#module-modal input:not([type=checkbox])').forEach(i => i.value = '');
            getAll('#module-modal .toggle-switch').forEach(t => t.classList.remove('active'));
            getAll('.grade-input').forEach(i => { i.disabled = true; i.value = ''; });
            get('#modal-error').style.display = 'none';
        };
        
        getAll('#module-modal .toggle-switch').forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
                const controlsInput = get(`#${toggle.dataset.controls}`);
                controlsInput.disabled = !toggle.classList.contains('active');
                
                if(!controlsInput.disabled) controlsInput.focus();
                else controlsInput.value = '';

                if(toggle.dataset.controls === 'td-input' && toggle.classList.contains('active')) {
                    const tpToggle = get('[data-controls="tp-input"]');
                    tpToggle.classList.remove('active');
                    get('#tp-input').disabled = true;
                    get('#tp-input').value = '';
                }
                if(toggle.dataset.controls === 'tp-input' && toggle.classList.contains('active')) {
                    const tdToggle = get('[data-controls="td-input"]');
                    tdToggle.classList.remove('active');
                    get('#td-input').disabled = true;
                    get('#td-input').value = '';
                }
            });
        });
        
        get('#save-module-btn').addEventListener('click', () => {
            const T = translations[state.language];
            const name = get('#modal-module-name').value.trim() || T.module_name_placeholder;
            const coeff = parseFloat(get('#modal-module-coeff').value);
            const credits = parseFloat(get('#modal-module-credits').value);
            const errorEl = get('#modal-error');
            const showError = (msgKey) => { errorEl.textContent = T[msgKey]; errorEl.style.display = 'block'; };
            if (isNaN(coeff) || coeff <= 0 || coeff > 10) return showError('error_coeff_invalid');
            if (isNaN(credits) || credits <= 0 || credits > 10) return showError('error_credits_invalid');
            const getVal = (input) => parseFloat(input.value);
            const td = getVal(get('#td-input')), tp = getVal(get('#tp-input')), exam = getVal(get('#exam-input'));
            const valid = (val) => !isNaN(val) && val >= 0 && val <= 20;
            const tdActive = !get('#td-input').disabled && valid(td);
            const tpActive = !get('#tp-input').disabled && valid(tp);
            const examActive = !get('#exam-input').disabled && valid(exam);
            if (!tdActive && !tpActive && !examActive) return showError('error_grade_invalid');

            let finalGrade = 0;
            const td_tp_weight = 1 - state.examWeight;
            if (examActive && (tdActive || tpActive)) {
                const continuousGrade = tdActive ? td : tp;
                finalGrade = (exam * state.examWeight) + (continuousGrade * td_tp_weight);
            } else if (examActive) finalGrade = exam;
            else if (tdActive) finalGrade = td;
            else if (tpActive) finalGrade = tp;

            const moduleData = { name, coeff, credits, grade: finalGrade.toFixed(2), id: moduleModal.dataset.editId || Date.now().toString() };
            if (moduleModal.dataset.mode === 'edit') {
                const itemToEdit = get(`.module-item[data-id="${moduleData.id}"]`);
                if (itemToEdit) updateModuleInList(itemToEdit, moduleData);
            } else { addModuleToList(moduleData); }
            saveState();
            closeModal('module-modal');
        });
        
        const addModuleToList = (data) => {
            const list = get('#modules-list');
            if (list.querySelector('p')) list.innerHTML = '';
            const item = document.createElement('div');
            item.className = 'module-item';
            list.appendChild(item);
            updateModuleInList(item, data);
        };

        const updateModuleInList = (item, data) => {
            const T = translations[state.language];
            Object.keys(data).forEach(key => item.dataset[key] = data[key]);
            item.innerHTML = `<button class="kebab-menu"><i class="fa-solid fa-ellipsis-v"></i></button><ul class="module-options-menu"><li class="edit-btn"><i class="fa-solid fa-pencil"></i> ${T.edit}</li><li class="delete-btn"><i class="fa-solid fa-trash"></i> ${T.delete}</li></ul><div class="module-info"><h4>${data.name}</h4><div class="module-details"><span><strong>${T.grade_th}:</strong> ${data.grade}</span><span><strong>${T.coeff_th}:</strong> ${data.coeff}</span><span><strong>${T.credits_th}:</strong> ${data.credits}</span></div></div>`;
            item.querySelector('.kebab-menu').addEventListener('click', (e) => {
                e.stopPropagation();
                const menu = item.querySelector('.module-options-menu');
                getAll('.module-options-menu').forEach(m => { if(m !== menu) m.style.display = 'none'; });
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            });
            item.querySelector('.delete-btn').addEventListener('click', () => {
                item.remove();
                if (get('#modules-list').childElementCount === 0) {
                    get('#modules-list').innerHTML = `<p style="color:var(--text-muted-color); text-align:center; padding: 2rem 0;" data-translate-key="no_modules_yet">${T.no_modules_yet}</p>`;
                }
                saveState();
            });
            item.querySelector('.edit-btn').addEventListener('click', () => {
                get('#modal-title').textContent = T.edit_module_title;
                moduleModal.dataset.mode = 'edit';
                moduleModal.dataset.editId = item.dataset.id;
                resetModalForm();
                get('#modal-module-name').value = item.dataset.name;
                get('#modal-module-coeff').value = item.dataset.coeff;
                get('#modal-module-credits').value = item.dataset.credits;
                openModal('module-modal');
            });
        };
        
        const clearModules = (silent = false) => {
             get('#modules-list').innerHTML = `<p style="color:var(--text-muted-color); text-align:center; padding: 2rem 0;" data-translate-key="no_modules_yet">${translations[state.language].no_modules_yet}</p>`;
             if (!silent) saveState();
        }

        document.body.addEventListener('click', () => getAll('.module-options-menu').forEach(m => m.style.display = 'none'));

        const getRemarkKey = (grade) => {
            if (grade >= 18) return 'remark_excellent'; if (grade >= 16) return 'remark_very_good';
            if (grade >= 14) return 'remark_good'; if (grade >= 12) return 'remark_fairly_good';
            if (grade >= 10) return 'remark_pass'; if (grade >= 7) return 'remark_resit'; return 'remark_poor';
        };

        get('#show-semester-result-btn').addEventListener('click', () => {
            let totalPoints = 0, totalCoeffs = 0, earnedCredits = 0;
            const modules = getAll('.module-item');
            if (modules.length === 0) return showResultModal({ titleKey: 'error_title', errorKey: 'error_no_modules' });
            
            modules.forEach(item => {
                const grade = parseFloat(item.dataset.grade);
                const coeff = parseFloat(item.dataset.coeff);
                const credits = parseFloat(item.dataset.credits);
                
                totalPoints += grade * coeff;
                totalCoeffs += coeff;

                if (grade >= 10) {
                    earnedCredits += credits;
                }
            });

            const average = totalCoeffs > 0 ? totalPoints / totalCoeffs : 0;
            const finalCredits = average >= 10 ? 30 : earnedCredits;

            showResultModal({ 
                titleKey: 'semester_result_title', 
                average: average, 
                credits: finalCredits, 
                remarkKey: getRemarkKey(average) 
            });
        });

        const handleAnnualCredits = (avgInputId, creditsInputId) => {
            const avgInput = get(avgInputId);
            const creditsInput = get(creditsInputId);
            const avg = parseFloat(avgInput.value);
            
            const isDisabled = !isNaN(avg) && avg >= 10;
            creditsInput.disabled = isDisabled;

            if (isDisabled) {
                creditsInput.value = 30;
            } else {
                if (creditsInput.value === '30') {
                   creditsInput.value = '';
                }
            }
        };
        get('#s1-avg').addEventListener('input', () => handleAnnualCredits('#s1-avg', '#s1-credits'));
        get('#s2-avg').addEventListener('input', () => handleAnnualCredits('#s2-avg', '#s2-credits'));

        get('#show-annual-result-btn').addEventListener('click', () => {
            const s1_avg = parseFloat(get('#s1-avg').value);
            let s1_credits = parseFloat(get('#s1-credits').value);
            const s2_avg = parseFloat(get('#s2-avg').value);
            let s2_credits = parseFloat(get('#s2-credits').value);

            if (s1_avg >= 10) s1_credits = 30;
            if (s2_avg >= 10) s2_credits = 30;

            const valid = (...vals) => vals.every(v => !isNaN(v) && v >= 0);
            if (!valid(s1_avg, s1_credits, s2_avg, s2_credits)) {
                return showResultModal({ titleKey: 'error_title', errorKey: 'error_invalid_annual_values' });
            }
            
            const annual_avg = (s1_avg + s2_avg) / 2;
            let total_credits = s1_credits + s2_credits;
        
            let status;
            if (annual_avg >= 10 || total_credits >= 60) {
                status = { textKey: 'status_pass', class: 'success' };
                total_credits = 60;
            } else if (total_credits >= state.requiredCreditsForDebt) {
                status = { textKey: 'status_debt', class: 'debt' };
            } else {
                status = { textKey: 'status_fail', class: 'danger' };
            }
            
            showResultModal({ isAnnual: true, titleKey: 'annual_result_title', average: annual_avg, credits: total_credits, status: status });
        });
    };
    
    // --- Initialization ---
    const init = () => {
        loadState();
        applyTheme();
        applyLanguage();
        updateSaveToggleUI();
        updateThemeOptionsUI();
        updateCalcMethodUI();
        updateRequiredCreditsUI();
        updateLanguageOptionsUI();
        if (state.modules && state.modules.length > 0) {
            const list = get('#modules-list');
            list.innerHTML = '';
            state.modules.forEach(moduleData => addModuleToList(moduleData));
        }
        setupEventListeners();
        showPage('main-page');
    };

    init();
});
