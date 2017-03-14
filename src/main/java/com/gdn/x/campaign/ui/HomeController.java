package com.gdn.x.campaign.ui;

import com.gdn.x.campaign.ui.State;
import com.gdn.x.campaign.ui.ViewConfig;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpServletRequest;

@Controller
public class HomeController {

  @RequestMapping("/")
  public String showHubOnborading(Model model, HttpServletRequest request) {
    State.populateModel(model, request);
    System.out.println("==========Index Path IN JAVA CONTROLLER========");
    return "index";
  }
}
