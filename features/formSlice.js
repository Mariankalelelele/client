import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    values: {
        name: "",
        email: "",
        phone: "",
        message: "",
    },
    errors: {},
    status: "idle",
    submitError: null,
    isSubmitted: false
}

export const submitForm = createAsyncThunk(
    'form/submitForm', 
    async (formData, {rejectWithValue}) => {
        try{
            const response = await fetch('http://localhost:3001/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData.message || 'Server error');
              }
        } catch(error){
            return rejectWithValue('Network error')
        }
    }
)

const validateEmail = (email) => {
    if (!email) "Не подходящий Email"
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'Invalid email address';
    }
}

const validatePhone = (phone) => {
    if (!phone) "Не подходящий Phone Number"
    if (!/^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(phone)) {
        return 'Invalid phone number';
    }
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateField: (state, action) => {
            const { field, value } = action.payload
            state.values[field] = value
        },
        setErrors: (state, action) => {
            state.errors = action.payload
        },
        clearErrors: (state) => {
            state.errors = {}
        },
        submitFormStart: (state) => {
            state.status = "loading";
            state.submitError = null;
            state.isSubmitted = false
        },
        submitFormSuccess: (state) => {
            state.status = "succeeded"
            state.isSubmitted = true
        },
        submitFormFailure: (state, action) => {
            state.status = "failed"
            state.submitError = action.payload
            state.isSubmitted = false
        },
        resetForm: () => initialState
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(submitForm.pending, (state) => {
            state.status = "loading";
            state.submitError = null;
            state.isSubmitted = false;
        })
        .addCase(submitForm.fulfilled, (state) => {
            state.status = 'succeeded';
            state.isSubmitted = true;
            state.values = initialState.values
        })
        .addCase(submitForm.rejected, (state, action) => {
            state.status = "failed";
            state.submitError = action.payload
        })
    }
    
})

export const {
    updateField,
    setErrors,
    clearErrors,
    submitFormStart,
    submitFormSuccess,
    submitFormFailure,
    resetForm
} = formSlice.actions

export default formSlice.reducer

const handleChange = () => {
    dispatch(updateField({ field: name, value }));
};

const handleSubmit = async () => {

};