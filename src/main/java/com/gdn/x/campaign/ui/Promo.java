package com.gdn.x.campaign.ui;

import java.io.Serializable;

/**
 * Created by chakradhar on 09/03/17.
 */
public class Promo implements Serializable {

    private String promoName;
    private String description;
    private String displayName;
    private String requesterMail;
    private String redemptionMethod;
    private String combinationType;
    private String priorityLevel;

    public String getPromoName() {
        return promoName;
    }

    public void setPromoName(String promoName) {
        this.promoName = promoName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getRequesterMail() {
        return requesterMail;
    }

    public void setRequesterMail(String requesterMail) {
        this.requesterMail = requesterMail;
    }

    public String getRedemptionMethod() {
        return redemptionMethod;
    }

    public void setRedemptionMethod(String redemptionMethod) {
        this.redemptionMethod = redemptionMethod;
    }

    public String getCombinationType() {
        return combinationType;
    }

    public void setCombinationType(String combinationType) {
        this.combinationType = combinationType;
    }

    public String getPriorityLevel() {
        return priorityLevel;
    }

    @Override public String toString() {
        return "Promo{" +
            "promoName='" + promoName + '\'' +
            ", description='" + description + '\'' +
            ", displayName='" + displayName + '\'' +
            ", requesterMail='" + requesterMail + '\'' +
            ", redemptionMethod='" + redemptionMethod + '\'' +
            ", combinationType='" + combinationType + '\'' +
            ", priorityLevel='" + priorityLevel + '\'' +
            '}';
    }

    public void setPriorityLevel(String priorityLevel) {
        this.priorityLevel = priorityLevel;
    }
}
