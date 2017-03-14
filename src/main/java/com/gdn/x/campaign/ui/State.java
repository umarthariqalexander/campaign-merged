package com.gdn.x.campaign.ui;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public final class State {

  public static final String LOGGED_IN_STATE = "loggedIn";
  public static final String ANONYMOUS_USER = "anonymousUser";
  private static final Logger LOG = LoggerFactory.getLogger(State.class);
  /**
   * Populates standard parts of the shared client/server model into the Spring {@link Model}.
   * Values prefixed with "__" will be made available to the JavaScript render function only. All
   * other values will be passed in the client's state object.
   */
  public static void populateModel(Model model, HttpServletRequest request) {
    model.addAttribute("__requestPath", getRequestPath(request));
    // model.addAttribute("auth", getAuthState());
    model.addAttribute("___contextPath", request.getContextPath());
    model.addAttribute("__locale", request.getLocale());
    HttpSession session = request.getSession(false);
    // if (null != session) {
    //   model.addAttribute("user", getLoggedInUserDetails(request));
    // }
  }

  /**
   * Returns the request string, including the query fragment, so that it can be made available
   * during server-side react-router rendering.
   */
  private static String getRequestPath(HttpServletRequest request) {
    String queryString = request.getQueryString();
    return request.getRequestURI() + (queryString == null ? "" : "?" + queryString);
  }

  // public static Map<String, Object> getAuthState() {
  //   Map<String, Object> authState = new HashMap<>();
  //   authState.put(LOGGED_IN_STATE, AuthUtils.isLoggedIn());
  //
  //   return authState;
  // }

  // public static Map<String, Object> getLoggedInUserDetails(HttpServletRequest request) {
  //   Map<String, Object> userDetailsState = new HashMap<>();
  //   userDetailsState.put("userDetails",
  //       request.getSession(false).getAttribute(SessionConstant.LOGGED_IN_USER_DETAILS));
  //   Map<String, Object> hubState = new HashMap<>();
  //   hubState.put("hubName",
  //       request.getSession(false).getAttribute(SessionConstant.SESSION_CURRENT_HUB));
  //   hubState.put("hubId",
  //       request.getSession(false).getAttribute(SessionConstant.SESSION_CURRENT_HUB_ID));
  //   hubState.put("apps",
  //           request.getSession(false).getAttribute("apps"));
  //   userDetailsState.put("currentHub", hubState);
  //   return userDetailsState;
  // }

}
