<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LevelRepository")
 */
class Level
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $time;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Coeff", mappedBy="level")
     */
    private $coeffs;

    public function __construct()
    {
        $this->coeffs = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getTime(): ?int
    {
        return $this->time;
    }

    public function setTime(int $time): self
    {
        $this->time = $time;

        return $this;
    }

    /**
     * @return Collection|Coeff[]
     */
    public function getCoeffs(): Collection
    {
        return $this->coeffs;
    }

    public function addCoeff(Coeff $coeff): self
    {
        if (!$this->coeffs->contains($coeff)) {
            $this->coeffs[] = $coeff;
            $coeff->setLevel($this);
        }

        return $this;
    }

    public function removeCoeff(Coeff $coeff): self
    {
        if ($this->coeffs->contains($coeff)) {
            $this->coeffs->removeElement($coeff);
            // set the owning side to null (unless already changed)
            if ($coeff->getLevel() === $this) {
                $coeff->setLevel(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }
}
