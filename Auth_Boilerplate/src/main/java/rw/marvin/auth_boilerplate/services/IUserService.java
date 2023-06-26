package rw.marvin.auth_boilerplate.services;

import rw.marvin.auth_boilerplate.models.User;


public interface IUserService {

    User create(User user);

    boolean isNotUnique(User user);

    void validateNewRegistration(User user);

    User getLoggedInUser();

}