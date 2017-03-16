package com.gdn.x.campaign.ui;

import org.springframework.boot.context.config.RandomValuePropertySource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Created by chakradhar on 09/03/17.
 */
@RestController
@RequestMapping(value = "/api", produces = APPLICATION_JSON_VALUE)
public class PromoApiController {

    private static final String GET_PROMO_DETAILS = "/getPromoDetails";

    private static final String TEST = "/test";

    @RequestMapping(path = PromoApiController.GET_PROMO_DETAILS, method = GET)
    @ResponseBody
    public BaseClass index() {

        BaseClass base = new BaseClass();
        List promoList = new ArrayList();

        for(int i=0; i<5 ; i++) {
            Promo promo = new Promo();
            promo.setPromoName("XYZ-"+i);
            promo.setCombinationType("exclusive");
            promo.setDescription("promotion xyz is created for some abc reason-"+i);
            promo.setDisplayName("adjustment Display name shown here-"+i);
            promo.setRequesterMail("xyz"+i+"@gmail.com");
            promo.setRedemptionMethod("coupons");
            promo.setPriorityLevel("1");

            promoList.add(promo);
        }

        base.setSuccess(true);
        base.setValue(promoList);
        return base;
    }

    @RequestMapping(path = PromoApiController.TEST, method = GET)
    @ResponseBody
    public String test() {
        return "success";
    }
}
