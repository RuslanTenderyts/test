import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.stayled";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Shop</Link>
          <Link to="/shopping-cart">Shopping Cart</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
