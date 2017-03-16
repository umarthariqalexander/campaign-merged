package com.gdn.x.campaign.ui;

import java.io.Serializable;
import java.util.List;

/**
 * Created by umarthariq on 16/03/17.
 */
public class BaseClass implements Serializable {

    private boolean success;
    private String errorCode;
    private String errorMessage;
    private List<Promo> value;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    @Override
    public String toString() {
        return "BaseClass{" +
                "success=" + success +
                ", errorCode='" + errorCode + '\'' +
                ", errorMessage='" + errorMessage + '\'' +
                ", value=" + value +
                '}';
    }

    public List<Promo> getValue() {
        return value;
    }

    public void setValue(List<Promo> value) {
        this.value = value;
    }

    public BaseClass(boolean success, String errorCode, String errorMessage, List<Promo> value) {
        this.success = success;
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.value = value;
    }

    public BaseClass() {
    }
}
